import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  ScrollView,
} from 'react-native';

import api from '../../services/api';

export default function NovoProduto({ navigation }: any) {

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const [loading, setLoading] = useState(false);

  async function salvarProduto() {
    if (!title || !price) {
      Alert.alert('Atenção', 'Preencha título e preço');
      return;
    }

    setLoading(true);

    try {
      await api.post('/products', {
        title,
        price: Number(price),
        image,
        description,
        category,
      });

      Alert.alert('Sucesso', 'Produto cadastrado!');
      navigation.goBack();

    } catch (error) {
      Alert.alert('Erro', 'Não foi possível cadastrar produto');
    } finally {
      setLoading(false);
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.title}>Novo Produto</Text>

      <TextInput
        style={styles.input}
        placeholder="Título do produto"
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        style={styles.input}
        placeholder="Preço"
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
      />

      <TextInput
        style={styles.input}
        placeholder="URL da imagem"
        value={image}
        onChangeText={setImage}
      />

      <TextInput
        style={styles.input}
        placeholder="Descrição"
        value={description}
        onChangeText={setDescription}
      />

      <TextInput
        style={styles.input}
        placeholder="Categoria"
        value={category}
        onChangeText={setCategory}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={salvarProduto}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Salvar Produto</Text>
        )}
      </TouchableOpacity>

    </ScrollView>
  );
}
export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },

  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
  },

  button: {
    backgroundColor: '#009C3B',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});