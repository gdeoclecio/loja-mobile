import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
  TextInput,
  Alert,
} from 'react-native';
import api from '../../services/api';
import { themas } from '../Login/themas';

interface Produto {
  id: string;
  nome: string;
  preco: number;
}

export default function Produtos({ navigation }: any) {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [pesquisa, setPesquisa] = useState<string>('');

  
  const carregarProdutos = async () => {
    try {
      setLoading(true);
      const response = await api.get('/produtos');
      setProdutos(response.data);
    } catch (error) {
      console.error("Erro ao buscar produtos da API:", error);
      Alert.alert("Erro", "Não foi possível carregar a lista de produtos.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    carregarProdutos();
  }, []);


  const produtosFiltrados = produtos.filter(produto =>
    produto.nome.toLowerCase().includes(pesquisa.toLowerCase())
  );

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

      
      <View style={styles.searchSection}>
        <View style={styles.BoxInput}>
          <TextInput
            style={styles.input}
            placeholder="Buscar produto por nome..."
            placeholderTextColor={themas.colors.gray || '#888'}
            value={pesquisa}
            onChangeText={(text) => setPesquisa(text)}
          />
        </View>
      </View>

     
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={themas.colors.primary || '#009C3B'} />
          <Text style={{ marginTop: 10, color: '#555' }}>Buscando produtos...</Text>
        </View>
      ) : (
       
        <FlatList
          data={produtosFiltrados}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.list}
          ListEmptyComponent={
            <Text style={styles.empty}>
              {pesquisa ? "Nenhum produto corresponde à busca." : "Nenhum produto cadastrado."}
            </Text>
          }
        />
      )}
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
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 15,
  },
  searchSection: {
    paddingHorizontal: 16,
    marginBottom: 15,
  },
  BoxInput: {
    width: '100%',
    height: 45,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 40,
    flexDirection: "row",
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    color: 'black',
    paddingLeft: 5,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
