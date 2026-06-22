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
  Image,
} from 'react-native';

import api from '../../services/api';
import { themas } from '../Login/themas';

interface Produto {
  id: number;
  title: string;
  price: number;
  image: string;
}

export default function Produtos() {

  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [loading, setLoading] = useState(true);
  const [pesquisa, setPesquisa] = useState('');

  // 📌 LISTAR PRODUTOS
  const carregarProdutos = async () => {
    try {
      const response = await api.get('/products');
      setProdutos(response.data);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível carregar produtos');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    carregarProdutos();
  }, []);

  // 🗑 DELETE PRODUTO
  async function deletarProduto(id: number) {
    try {
      await api.delete(`/products/${id}`);

      // atualiza lista depois de deletar
      setProdutos(prev => prev.filter(item => item.id !== id));

    } catch (error) {
      Alert.alert('Erro', 'Erro ao deletar produto');
    }
  }

  // 🔎 FILTRO
  const produtosFiltrados = produtos.filter(p =>
    p.title.toLowerCase().includes(pesquisa.toLowerCase())
  );

  // 📦 ITEM DA LISTA
  const renderItem = ({ item }: { item: Produto }) => (
    <View style={styles.card}>

      <Image source={{ uri: item.image }} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>
          R$ {Number(item.price).toFixed(2)}
        </Text>
      </View>

      {/* 🗑 DELETE */}
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => deletarProduto(item.id)}
      >
        <Text style={{ color: '#fff', fontWeight: 'bold' }}>
          Excluir
        </Text>
      </TouchableOpacity>

    </View>
  );

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.header}>Produtos</Text>

      <TextInput
        style={styles.search}
        placeholder="Buscar produto..."
        value={pesquisa}
        onChangeText={setPesquisa}
      />

      {loading ? (
        <ActivityIndicator size="large" color="#009C3B" />
      ) : (
        <FlatList
          data={produtosFiltrados}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      )}

    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },

  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  search: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
  },

  image: {
    width: 60,
    height: 60,
    marginRight: 10,
    borderRadius: 6,
  },

  info: {
    flex: 1,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  price: {
    color: 'green',
    marginTop: 4,
  },

  deleteButton: {
    backgroundColor: 'red',
    padding: 8,
    borderRadius: 8,
  },
});