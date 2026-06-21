import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useAuth } from "../../contexts/AuthContext"; // preciso para acessar a função logaut

export default function Home({ navigation }: any) {
  const { logout, darkMode, toggleDarkMode } = useAuth(); // para acessar o que esta na classe AuthContext

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: darkMode ? "#1a1a1a" : "#f5f5f5" },
      ]}
    >
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

      <Text style={[styles.title, { color: darkMode ? "#FFFFFF" : "#000000" }]}>
        🏠 Home Temporária
      </Text>

      <Text
        style={[styles.subtitle, { color: darkMode ? "#AAAAAA" : "#666666" }]}
      >
        App em desenvolvimento - modo teste
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Produtos")}
      >
        <Text style={styles.buttonText}>Ver Produtos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#e74c3c" }]}
        onPress={async () => {
          await logout(); // await chama a funcao que limpa os dados da memoria
          navigation.navigate("Login");
        }}
      >
        <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 30,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#3498db",
    padding: 15,
    borderRadius: 8,
    width: "80%",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
