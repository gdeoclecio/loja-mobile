import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { MaterialIcons } from "@expo/vector-icons";
import { useAuth } from "../../contexts/AuthContext";

interface Produto {
  id: string;
  nome: string;
  preco: number;
}

export default function Produtos({ navigation }: any) {
  const [produtos, setProdutos] = useState<Produto[]>([
    { id: "1", nome: "Camisa Brasil", preco: 299.9 },
    { id: "2", nome: "Bola Oficial", preco: 199.9 },
    { id: "3", nome: "Chuteira Profissional", preco: 459.9 },
  ]);

  const { darkMode, toggleDarkMode } = useAuth();

  const renderItem = ({ item }: { item: Produto }) => (
    <View
      style={[styles.card, { backgroundColor: darkMode ? "#2a2a2a" : "#fff" }]}
    >
      <View style={styles.infoContainer}>
        <Text style={[styles.nome, { color: darkMode ? '#FFFFFF' : '#000000' }]}>{item.nome}</Text>
        <Text style={styles.preco}>R$ {item.preco.toFixed(2)}</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate("EditarProduto", {
            produto: item,
            setProdutos,
          })
        }
      >
        <Text style={styles.buttonText}>Editar</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: darkMode ? "#1a1a1a" : "#f5f5f5" },
      ]}
    >
      <Text style={[styles.title, { color: darkMode ? "#FFFFFF" : "#000000" }]}>
        Lista de Produtos
      </Text>

      <Pressable
        onPress={toggleDarkMode}
        style={{ position: 'absolute', top: 20, right: 20 }}
      >
        <MaterialIcons
          name={darkMode ? 'wb-sunny' : 'nightlight-round'}
          size={28}
          color={darkMode ? '#FFD700' : '#002776'}
        />
      </Pressable>

      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        ListEmptyComponent={
          <Text style={styles.empty}>Nenhum produto cadastrado.</Text>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    margin: 20,
  },

  list: {
    paddingHorizontal: 16,
  },

  card: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  infoContainer: {
    flex: 1,
  },

  nome: {
    fontSize: 16,
    fontWeight: "bold",
  },

  preco: {
    marginTop: 5,
    color: "green",
  },

  button: {
    backgroundColor: "#009C3B",
    padding: 10,
    borderRadius: 8,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },

  empty: {
    textAlign: "center",
    marginTop: 40,
    color: "#999",
  },
});
