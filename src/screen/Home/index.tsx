import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Image,
  StatusBar,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useAuth } from "../../contexts/AuthContext";

export default function Home({ navigation }: any) {
  const { logout, darkMode, toggleDarkMode } = useAuth();

  return (
    <View style={[styles.container, { backgroundColor: darkMode ? "#121212" : "#f0f4f0" }]}>
      <StatusBar barStyle={darkMode ? "light-content" : "dark-content"} />

      <View style={[styles.navbar, { backgroundColor: darkMode ? "#1f1f1f" : "#002776" }]}>
        <View style={styles.left}>
          <Image
            source={require("../../../assets/bola.png")}
            style={{ width: 32, height: 32 }}
          />
        </View>

        <View style={styles.center}>
          <Text style={styles.logo}>Loja Copa</Text>
        </View>

        <Pressable onPress={toggleDarkMode} style={styles.right}>
          <MaterialIcons
            name={darkMode ? "wb-sunny" : "nightlight-round"}
            size={24}
            color="#FFD700"
          />
        </Pressable>
      </View>

      <View style={[styles.banner, { backgroundColor: darkMode ? "#1a3a1a" : "#009C3B" }]}>
        <Text style={styles.bannerEmoji}>⚽</Text>
        <View>
          <Text style={styles.bannerTitle}>Bem-vindo!</Text>
          <Text style={styles.bannerSub}>Gerencie sua loja com facilidade</Text>
        </View>
      </View>

      <Text style={[styles.sectionTitle, { color: darkMode ? "#aaa" : "#555" }]}>
        O que deseja fazer?
      </Text>

      <View style={styles.grid}>
        <TouchableOpacity
          style={[styles.card, { backgroundColor: "#002776" }]}
          onPress={() => navigation.navigate("Produtos")}
          activeOpacity={0.85}
        >
          <Text style={styles.cardEmoji}>📦</Text>
          <Text style={styles.cardTitle}>Produtos</Text>
          <Text style={styles.cardDesc}>Ver, editar e excluir</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.card, { backgroundColor: "#009C3B" }]}
          onPress={() => navigation.navigate("NovoProduto")}
          activeOpacity={0.85}
        >
          <Text style={styles.cardEmoji}>➕</Text>
          <Text style={styles.cardTitle}>Novo Produto</Text>
          <Text style={styles.cardDesc}>Cadastrar item</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={async () => { await logout(); }}
        activeOpacity={0.85}
      >
        <MaterialIcons name="logout" size={20} color="#fff" />
        <Text style={styles.logoutText}>Sair do sistema</Text>
      </TouchableOpacity>

      <Text style={[styles.footer, { color: darkMode ? "#444" : "#bbb" }]}>
        Loja Copa © 2025
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbar: {
    paddingTop: 50,
    paddingBottom: 15,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  left: {
    width: 40,
  },
  center: {
    flex: 1,
    alignItems: "center",
  },
  right: {
    width: 40,
    alignItems: "flex-end",
  },
  logo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    letterSpacing: 1,
  },
  banner: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    margin: 20,
    padding: 20,
    borderRadius: 16,
  },
  bannerEmoji: {
    fontSize: 40,
  },
  bannerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  bannerSub: {
    fontSize: 13,
    color: "#d4f5d4",
    marginTop: 2,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
    marginHorizontal: 20,
    marginBottom: 12,
  },
  grid: {
    flexDirection: "row",
    gap: 12,
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  card: {
    flex: 1,
    padding: 20,
    borderRadius: 16,
    alignItems: "center",
    gap: 6,
  },
  cardEmoji: {
    fontSize: 32,
  },
  cardTitle: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  cardDesc: {
    color: "rgba(255,255,255,0.75)",
    fontSize: 12,
    textAlign: "center",
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: "#e74c3c",
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 12,
    marginTop: 8,
  },
  logoutText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },
  footer: {
    textAlign: "center",
    fontSize: 12,
    marginTop: "auto",
    paddingBottom: 20,
    paddingTop: 20,
  },
});