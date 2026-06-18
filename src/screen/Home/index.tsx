
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Home({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏠 Home Temporária</Text>

      <Text style={styles.subtitle}>
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
        onPress={() => navigation.navigate("Login")}
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

import { View, Text } from 'react-native'


export default function Home() {
  return (
    <View>
      <Text>
        Home
      </Text>
    </View>
  )
}

