import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Image,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useAuth } from "../../contexts/AuthContext";

export default function Home({ navigation }: any) {
  const { logout, darkMode, toggleDarkMode } = useAuth();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: darkMode ? "#121212" : "#f5f5f5" },
      ]}
    >
      {/* NAVBAR */}
      <View
        style={[
          styles.navbar,
          { backgroundColor: darkMode ? "#1f1f1f" : "#fff" },
        ]}
      >
        {/* ESQUERDA */}
        <View style={styles.left}>
          <Image
            source={require("../../../assets/bola.png")}
            style={{ width: 28, height: 28 }}
          />
        </View>

        {/* CENTRO */}
        <View style={styles.center}>
          <Text style={[styles.logo, { color: darkMode ? "#fff" : "#000" }]}>
            Loja Copa
          </Text>
        </View>

        {/* DIREITA */}
        <Pressable onPress={toggleDarkMode} style={styles.right}>
          <MaterialIcons
            name={darkMode ? "wb-sunny" : "nightlight-round"}
            size={24}
            color={darkMode ? "#FFD700" : "#000"}
          />
        </Pressable>
      </View>

      {/* HEADER */}
      <View style={styles.header}>
        <Text
          style={[
            styles.title,
            { color: darkMode ? "#fff" : "#000" },
          ]}
        >
          Menu Principal
        </Text>

        <Text
          style={[
            styles.subtitle,
            { color: darkMode ? "#aaa" : "#666" },
          ]}
        >
          Gerencie produtos e operações do sistema
        </Text>
      </View>

      {/* CARDS */}

      <TouchableOpacity
        style={[styles.card, { backgroundColor: "#002776" }]}
        onPress={() => navigation.navigate("Produtos")}
      >
        <Text style={styles.cardTitle}>📦 Produtos</Text>
        <Text style={styles.cardDesc}>
          Ver, editar e excluir produtos
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.card, { backgroundColor: "#009C3B" }]}
        onPress={() => navigation.navigate("NovoProduto")}
      >
        <Text style={styles.cardTitle}>➕ Novo Produto</Text>
        <Text style={styles.cardDesc}>
          Criar item no sistema
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.card, { backgroundColor: "#FFCC00" }]}
        onPress={() => navigation.navigate("EditarProduto")}
      >
        <Text style={[styles.cardTitle, { color: "#000" }]}>
          ✏️ Editar Produto
        </Text>
        <Text style={[styles.cardDesc, { color: "#000" }]}>
          Atualizar dados existentes
        </Text>
      </TouchableOpacity>

      {/* LOGOUT */}
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={async () => {
          await logout();
          navigation.replace("Login");
        }}
      >
        <Text style={styles.logoutText}>Sair do sistema</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  /* NAVBAR */
  navbar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    paddingTop: 50,
    paddingBottom: 15,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#000",
    zIndex: 10,
  },

  left: {
    width: 50,
    alignItems: "flex-start",
  },

  center: {
    flex: 1,
    alignItems: "center",
  },

  right: {
    width: 50,
    alignItems: "flex-end",
  },

  logo: {
    fontSize: 18,
    fontWeight: "bold",
  },

  /* HEADER */
  header: {
    marginTop: 120,
    alignItems: "center",
    marginBottom: 30,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
  },

  subtitle: {
    fontSize: 14,
    marginTop: 5,
    textAlign: "center",
  },

  /* CARDS */
  card: {
    padding: 18,
    borderRadius: 12,
    marginBottom: 15,
  },

  cardTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  cardDesc: {
    color: "#fff",
    marginTop: 5,
  },

  logoutButton: {
    backgroundColor: "#e74c3c",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },

  logoutText: {
    color: "#fff",
    fontWeight: "bold",
  },
});