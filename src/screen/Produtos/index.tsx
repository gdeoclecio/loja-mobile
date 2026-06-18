import React, { useEffect, useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  FlatList, 
  TouchableOpacity, 
  ActivityIndicator, 
  SafeAreaView 
} from 'react-native';


import api from '../../services/api'; 

interface Produto {
  id: string;
  nome: string;
  preco: number;
  descricao?: string;
}

export default function Produtos({ navigation }: any) {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    api.get('/produtos')
      .then((response) => {
        setProdutos(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao buscar produtos na API:", error);
        setLoading(false);
      });
  }, []);

  const renderItem = ({ item }: { item: Produto }) => (
    <View style={styles.card}>
      <View style={styles.infoContainer}>
        <Text style={styles.nomeProduto}>{item.nome}</Text>
        <Text style={styles.precoProduto}>
          R$ {typeof item.preco === 'number' ? item.preco.toFixed(2) : item.preco}
        </Text>
      </View>
      
      <TouchableOpacity 
        style={styles.botaoEditar}
        onPress={() => navigation.navigate('EditarProduto', { id: item.id })}
      >
        <Text style={styles.textoBotao}>Editar</Text>
      </TouchableOpacity>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#3498db" />
        <Text style={styles.textoLoading}>Carregando produtos...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Lista de Produtos</Text>
      
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.lista}
        ListEmptyComponent={
          <Text style={styles.empty}>Nenhum produto cadastrado ainda.</Text>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  textoLoading: { marginTop: 10, color: '#666' },
  titulo: { fontSize: 24, fontWeight: 'bold', marginVertical: 20, textAlign: 'center', color: '#333' },
  lista: { paddingHorizontal: 16, paddingBottom: 20 },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  infoContainer: { flex: 1 },
  nomeProduto: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  precoProduto: { fontSize: 16, color: '#2ecc71', fontWeight: '600', marginTop: 4 },
  botaoEditar: { backgroundColor: '#3498db', paddingVertical: 8, paddingHorizontal: 16, borderRadius: 6 },
  textoBotao: { color: '#fff', fontWeight: 'bold', fontSize: 14 },
  empty: { textAlign: 'center', marginTop: 40, color: '#999', fontSize: 16 }
});