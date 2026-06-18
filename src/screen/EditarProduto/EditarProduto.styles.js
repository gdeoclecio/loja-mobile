import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },

  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 16,
  },

  card: {
    backgroundColor: "#ffffff",
    padding: 24,
    borderRadius: 12,
    width: "100%",
    maxWidth: 480,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },

  titulo: {
    color: "#009c3b",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
    textAlign: "center",
  },

  input: {
    width: "100%",
    padding: 12,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: "#009c3b",
    borderRadius: 8,
    fontSize: 16,
    color: "#333",
    backgroundColor: "#fff",
  },

  acoes: {
    flexDirection: "row",
    gap: 12,
    marginTop: 8,
  },

  botaoSalvar: {
    flex: 1,
    padding: 12,
    backgroundColor: "#009c3b",
    borderRadius: 8,
    alignItems: "center",
  },

  botaoSalvarTexto: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },

  botaoCancelar: {
    flex: 1,
    padding: 12,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#cc0000",
    alignItems: "center",
  },

  botaoCancelarTexto: {
    color: "#cc0000",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default styles;