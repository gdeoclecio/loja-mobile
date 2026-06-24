import { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert, ActivityIndicator, Pressable, KeyboardTypeOptions } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import api from "../../services/api";
import { styles } from "./EditarProduto.styles";
import { useAuth } from "../../contexts/AuthContext";
import { useTheme } from "../../contexts/ThemeContext";

const INITIAL_FORM = {
  title: "",
  price: "",
  description: "",
  category: "",
  image: "",
};

const FIELDS: {
  name: string;
  placeholder: string;
  keyboardType?: KeyboardTypeOptions;
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
}[] = [
  { name: "title", placeholder: "Nome do Produto" },
  { name: "price", placeholder: "Preço do produto", keyboardType: "numeric" },
  { name: "description", placeholder: "Descrição do produto" },
  { name: "category", placeholder: "Categoria do produto" },
  { name: "image", placeholder: "URL da imagem", keyboardType: "url", autoCapitalize: "none" },
];

export default function EditarProduto() {
  const route = useRoute<any>();
  const id = route.params?.id;
  const navigation = useNavigation<any>();
  const { darkMode, toggleDarkMode } = useAuth();
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  function handleChange(name: string, value: string) {
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  useEffect(() => {
    async function carregarProduto() {
      try {
        const { data } = await api.get(`/products/${id}`);
        setFormData({ ...data, price: String(data.price) });
      } catch (error) {
        Alert.alert("Erro", "Não foi possível carregar o produto.");
      } finally {
        setLoading(false);
      }
    }
    carregarProduto();
  }, [id]);

  async function handleSubmit() {
    if (!formData.title.trim() || !formData.description.trim() || !formData.category.trim()) {
      return Alert.alert("Atenção", "Preencha todos os campos obrigatórios.");
    }
    if (!formData.price.trim()) {
      return Alert.alert("Atenção", "Informe o preço do produto.");
    }
    if (Number(formData.price) <= 0) {
      return Alert.alert("Atenção", "O preço deve ser maior que 0.");
    }
    if (formData.image && !formData.image.startsWith("http")) {
      return Alert.alert("Atenção", "Informe uma URL de imagem válida.");
    }

    try {
      setSaving(true);
      await api.put(`/products/${id}`, { ...formData, price: Number(formData.price) });
      Alert.alert("Sucesso", "Produto atualizado com sucesso!");
      navigation.navigate("Produtos");
    } catch (error: any) {
      Alert.alert("Erro", error.response?.data?.message || "Erro ao editar produto.");
    } finally {
      setSaving(false);
    }
  }

  function handleDeleteConfirm() {
    Alert.alert(
      "Excluir Produto",
      "Tem certeza que deseja excluir este produto? Essa ação não poderá ser desfeita.",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Excluir",
          style: "destructive",
          onPress: async () => {
            try {
              setSaving(true);
              await api.delete(`/products/${id}`);
              Alert.alert("Sucesso", "Produto excluído com sucesso!", [
                { text: "OK", onPress: () => navigation.navigate("Home") },
              ]);
            } catch (error: any) {
              Alert.alert("Erro", error.response?.data?.message || "Erro ao excluir produto.");
            } finally {
              setSaving(false);
            }
          },
        },
      ]
    );
  }

  if (loading) {
    return (
      <View style={[styles.loadingContainer, { backgroundColor: darkMode ? "#1a1a1a" : "#f5f5f5" }]}>
        <ActivityIndicator size="large" color="#009c3b" />
        <Text style={[styles.loadingText, { color: darkMode ? "#fff" : "#333" }]}>
          Carregando produto...
        </Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor: darkMode ? "#1a1a1a" : "#f5f5f5" }]}>
      <View style={[styles.card, { backgroundColor: darkMode ? "#2b2b2b" : "#fff", borderColor: darkMode ? "#444" : "#e0e0e0" }]}>
        <Pressable onPress={toggleDarkMode} style={{ position: "absolute", top: 20, right: 20, zIndex: 1 }}>
          <MaterialIcons
            name={darkMode ? "wb-sunny" : "nightlight-round"}
            size={28}
            color={darkMode ? "#FFD700" : "#002776"}
          />
        </Pressable>

        <Text style={[styles.titulo, { color: darkMode ? "#fff" : "#009c3b" }]}>
          Editar Produto
        </Text>

        {FIELDS.map(({ name, placeholder, ...rest }) => (
          <TextInput
            key={name}
            style={[styles.input, {
              backgroundColor: darkMode ? "#1f1f1f" : "#fff",
              color: darkMode ? "#fff" : "#333",
              borderColor: darkMode ? "#666" : "#009c3b",
            }]}
            placeholder={placeholder}
            placeholderTextColor={darkMode ? "#888" : "#aaa"}
            value={formData[name as keyof typeof formData]}
            onChangeText={(value) => handleChange(name, value)}
            editable={!saving}
            {...rest}
          />
        ))}

        <View style={styles.acoes}>
          <TouchableOpacity
            style={[styles.botaoSalvar, saving && styles.botaoDesabilitado]}
            onPress={handleSubmit}
            disabled={saving}
          >
            {saving ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.botaoSalvarTexto}>Editar</Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.botaoCancelar, saving && styles.botaoDesabilitado]}
            onPress={() => navigation.navigate("Produtos")}
            disabled={saving}
          >
            <Text style={styles.botaoCancelarTexto}>Cancelar</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={[styles.botaoExcluir, saving && styles.botaoDesabilitado]}
          onPress={handleDeleteConfirm}
          disabled={saving}
        >
          <Text style={styles.botaoExcluirTexto}>Excluir Produto</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}