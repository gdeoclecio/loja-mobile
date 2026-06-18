import { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert, ActivityIndicator } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import api from "../../services/api";
import styles from "./EditarProduto.styles";

const INITIAL_FORM = { title: "", price: "", description: "", category: "", image: "" };

const FIELDS = [
  { name: "title",       placeholder: "Nome do Produto"    },
  { name: "price",       placeholder: "Preço do produto",  keyboardType: "numeric" },
  { name: "description", placeholder: "Descrição do produto" },
  { name: "category",    placeholder: "Categoria do produto" },
  { name: "image",       placeholder: "URL da imagem",     keyboardType: "url", autoCapitalize: "none" },
];

export default function EditarProduto() {
  const { params: { id } } = useRoute();
  const navigation = useNavigation();

  const [formData, setFormData] = useState(INITIAL_FORM);
  const [loading, setLoading] = useState(true);

  const handleChange = (name, value) => setFormData((prev) => ({ ...prev, [name]: value }));

  useEffect(() => {
    api.get(`/products/${id}`)
      .then(({ data }) => setFormData({ ...data, price: String(data.price) }))
      .catch(() => Alert.alert("Erro", "Não foi possível carregar o produto."))
      .finally(() => setLoading(false));
  }, [id]);

  async function handleSubmit() {
    if (!formData.title || !formData.description || !formData.category)
      return Alert.alert("Atenção", "Preencha todos os campos");

    if (Number(formData.price) <= 0)
      return Alert.alert("Atenção", "Preço deve ser maior que 0");

    try {
      await api.put(`/products/${id}`, { ...formData, price: Number(formData.price) });
      navigation.navigate("Produtos");
    } catch {
      Alert.alert("Erro", "Erro ao editar produto");
    }
  }

  if (loading)
    return <View style={styles.loadingContainer}><ActivityIndicator size="large" color="#009c3b" /></View>;

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <View style={styles.card}>
        <Text style={styles.titulo}>Editar Produto</Text>

        {FIELDS.map(({ name, placeholder, ...rest }) => (
          <TextInput
            key={name}
            style={styles.input}
            placeholder={placeholder}
            placeholderTextColor="#aaa"
            value={formData[name]}
            onChangeText={(v) => handleChange(name, v)}
            {...rest}
          />
        ))}

        <View style={styles.acoes}>
          <TouchableOpacity style={styles.botaoSalvar} onPress={handleSubmit}>
            <Text style={styles.botaoSalvarTexto}>Editar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botaoCancelar} onPress={() => navigation.navigate("Produtos")}>
            <Text style={styles.botaoCancelarTexto}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
