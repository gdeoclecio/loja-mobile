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