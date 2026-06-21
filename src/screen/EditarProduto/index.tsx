import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useAuth } from "../../contexts/AuthContext";

export default function EditarProduto({ route, navigation }: any) {
  const { produto, setProdutos } = route.params;
  const { darkMode, toggleDarkMode } = useAuth();
  const [nome, setNome] = useState(produto.nome);
  const [preco, setPreco] = useState(String(produto.preco));

  function salvar() {
    setProdutos((prev: any) =>
      prev.map((item: any) =>
        item.id === produto.id
          ? { ...item, nome, preco: parseFloat(preco) }
          : item,
      ),
    );

    navigation.goBack();
  }

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: darkMode ? "#1a1a1a" : "#f5f5f5" },
      ]}
    >
      <Text style={[styles.title, { color: darkMode ? '#FFFFFF' : '#000000' }]}>Editar Produto</Text>
      <Pressable
        onPress={toggleDarkMode}
        style={{ position: "absolute", top: 20, right: 20 }}
      >
        <MaterialIcons
          name={darkMode ? "wb-sunny" : "nightlight-round"}
          size={28}
          color={darkMode ? "#FFD700" : "#002776"}
        />
      </Pressable>

      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        placeholder="Nome do produto"
      />

      <TextInput
        style={styles.input}
        value={preco}
        onChangeText={setPreco}
        placeholder="Preço"
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={salvar}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: "#fff",
  },

  button: {
    backgroundColor: "#009C3B",
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});
