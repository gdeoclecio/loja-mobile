import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  card: {
    borderWidth: 1,
    borderRadius: 16,
    padding: 24,
    marginTop: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 10,
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 15,
  },
  acoes: {
    flexDirection: "row",
    gap: 10,
    marginTop: 10,
  },
  botaoSalvar: {
    flex: 1,
    backgroundColor: "#009c3b",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  botaoSalvarTexto: {
    color: "#fff",
    fontWeight: "bold",
  },
  botaoCancelar: {
    flex: 1,
    backgroundColor: "#888",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  botaoCancelarTexto: {
    color: "#fff",
    fontWeight: "bold",
  },
  botaoExcluir: {
    backgroundColor: "#e74c3c",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  botaoExcluirTexto: {
    color: "#fff",
    fontWeight: "bold",
  },
  botaoDesabilitado: {
    opacity: 0.6,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },
  loadingText: {
    fontSize: 16,
  },
});

  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    gap: 10,
  },

  loadingText: {
    fontSize: 16,
    color: "#333",
  },

  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 16,
  },

  card: {
    backgroundColor: "#fff",
    padding: 24,
    borderRadius: 12,
    width: "100%",
    maxWidth: 480,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    elevation: 3,
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
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  botaoCancelar: {
    flex: 1,
    padding: 12,
    backgroundColor: "#fff",
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

  botaoExcluir: {
    marginTop: 16,
    padding: 14,
    backgroundColor: "#cc0000",
    borderRadius: 8,
    alignItems: "center",
  },

  botaoExcluirTexto: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  botaoDesabilitado: {
    opacity: 0.6,
  },
});

