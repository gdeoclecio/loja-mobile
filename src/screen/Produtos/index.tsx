import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

interface Produto {
  id: string;
  nome: string;
  preco: number;
}

export default function Produtos({ navigation }: any) {
  const [produtos, setProdutos] = useState<Produto[]>([
    { id: '1', nome: 'Camisa Brasil', preco: 299.9 },
    { id: '2', nome: 'Bola Oficial', preco: 199.9 },
    { id: '3', nome: 'Chuteira Profissional', preco: 459.9 },
  ]);

  const renderItem = ({ item }: { item: Produto }) => (
    <View style={styles.card}>
      <View style={styles.infoContainer}>
        <Text style={styles.nome}>{item.nome}</Text>
        <Text style={styles.preco}>R$ {item.preco.toFixed(2)}</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('EditarProduto', {
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
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Lista de Produtos</Text>

      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        ListEmptyComponent={
          <Text style={styles.empty}>Nenhum produto cadastrado.</Text>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20,
  },

  list: {
    paddingHorizontal: 16,
  },

  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  infoContainer: {
    flex: 1,
  },

  nome: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  preco: {
    marginTop: 5,
    color: 'green',
  },

  button: {
    backgroundColor: '#009C3B',
    padding: 10,
    borderRadius: 8,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  empty: {
    textAlign: 'center',
    marginTop: 40,
    color: '#999',
  },
});