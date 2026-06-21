import { useEffect, useState } from "react";
import {View,Text,TextInput,TouchableOpacity,ScrollView,Alert,ActivityIndicator,} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import api from "../../services/api";
import styles from "./EditarProduto.styles";

const INITIAL_FORM = {
  title: "",
  price: "",
  description: "",
  category: "",
  image: "",
};

const FIELDS = [
  { name: "title",       placeholder: "Nome do Produto"    },
  { name: "price",       placeholder: "Preço do produto",  keyboardType: "numeric" },
  { name: "description", placeholder: "Descrição do produto" },
  { name: "category",    placeholder: "Categoria do produto" },
  { name: "image",       placeholder: "URL da imagem",     keyboardType: "url", autoCapitalize: "none" },
];


export default function EditarProduto() {
  const {
    params: { id },
  } = useRoute();

  const navigation = useNavigation();

  const [formData, setFormData] = useState(INITIAL_FORM);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  function handleChange(name, value) {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  useEffect(() => {
    async function carregarProduto() {
      try {
        const { data } = await api.get(`/products/${id}`);

        setFormData({
          ...data,
          price: String(data.price),
        });
      } catch (error) {
        Alert.alert(
          "Erro",
          "Não foi possível carregar o produto."
        );
      } finally {
        setLoading(false);
      }
    }

    carregarProduto();
  }, [id]);

  async function handleSubmit() {
    if (
      !formData.title.trim() ||
      !formData.description.trim() ||
      !formData.category.trim()
    ) {
      return Alert.alert(
        "Atenção",
        "Preencha todos os campos obrigatórios."
      );
    }

    if (!formData.price.trim()) {
      return Alert.alert(
        "Atenção",
        "Informe o preço do produto."
      );
    }

    if (Number(formData.price) <= 0) {
      return Alert.alert(
        "Atenção",
        "O preço deve ser maior que 0."
      );
    }

    if (
      formData.image &&
      !formData.image.startsWith("http")
    ) {
      return Alert.alert(
        "Atenção",
        "Informe uma URL de imagem válida."
      );
    }

    try {
      setSaving(true);

      await api.put(`/products/${id}`, {
        ...formData,
        price: Number(formData.price),
      });

      Alert.alert(
        "Sucesso",
        "Produto atualizado com sucesso!"
      );

      navigation.navigate("Produtos");
    } catch (error) {
      const mensagem =
        error.response?.data?.message ||
        "Erro ao editar produto.";

      Alert.alert("Erro", mensagem);
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#009c3b" />
        <Text style={styles.loadingText}>
          Carregando produto...
        </Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>
          Editar Produto
        </Text>

        {FIELDS.map(
          ({ name, placeholder, ...rest }) => (
            <TextInput
              key={name}
              style={styles.input}
              placeholder={placeholder}
              placeholderTextColor="#aaa"
              value={formData[name]}
              onChangeText={(value) =>
                handleChange(name, value)
              }
              editable={!saving}
              {...rest}
            />
          )
        )}

        <View style={styles.acoes}>
          <TouchableOpacity
            style={[
              styles.botaoSalvar,
              saving &&
                styles.botaoDesabilitado,
            ]}
            onPress={handleSubmit}
            disabled={saving}
          >
            {saving ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text
                style={styles.botaoSalvarTexto}
              >
                Editar
              </Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.botaoCancelar,
              saving &&
                styles.botaoDesabilitado,
            ]}
            onPress={() =>
              navigation.navigate("Produtos")
            }
            disabled={saving}
          >
            <Text
              style={styles.botaoCancelarTexto}
            >
              Cancelar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}