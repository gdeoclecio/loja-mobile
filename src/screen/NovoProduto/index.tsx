import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  ScrollView,
  StyleSheet,
  Pressable,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useAuth } from '../../contexts/AuthContext';
import { useTheme } from '../../contexts/ThemeContext';
import api from '../../services/api';

export default function NovoProduto({ navigation }: any) {
  const { darkMode, toggleDarkMode } = useTheme();

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

  const inputStyle = [
    styles.input,
    {
      backgroundColor: darkMode ? '#1f1f1f' : '#fff',
      borderColor: darkMode ? '#666' : '#ddd',
      color: darkMode ? '#fff' : '#333',
    },
  ];

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        { backgroundColor: darkMode ? '#121212' : '#f0f4f0' },
      ]}
    >
      <Pressable onPress={toggleDarkMode} style={styles.darkModeButton}>
        <MaterialIcons
          name={darkMode ? 'wb-sunny' : 'nightlight-round'}
          size={26}
          color={darkMode ? '#FFD700' : '#002776'}
        />
      </Pressable>

      <Text style={[styles.title, { color: darkMode ? '#fff' : '#002776' }]}>
        Novo Produto
      </Text>

      <TextInput
        style={inputStyle}
        placeholder="Título do produto"
        placeholderTextColor={darkMode ? '#888' : '#aaa'}
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        style={inputStyle}
        placeholder="Preço"
        placeholderTextColor={darkMode ? '#888' : '#aaa'}
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
      />

      <TextInput
        style={inputStyle}
        placeholder="URL da imagem"
        placeholderTextColor={darkMode ? '#888' : '#aaa'}
        autoCapitalize="none"
        value={image}
        onChangeText={setImage}
      />

      <TextInput
        style={inputStyle}
        placeholder="Descrição"
        placeholderTextColor={darkMode ? '#888' : '#aaa'}
        value={description}
        onChangeText={setDescription}
      />

      <TextInput
        style={inputStyle}
        placeholder="Categoria"
        placeholderTextColor={darkMode ? '#888' : '#aaa'}
        value={category}
        onChangeText={setCategory}
      />

      <TouchableOpacity
        style={[styles.button, loading && styles.buttonDisabled]}
        onPress={salvarProduto}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Salvar Produto</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.cancelButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={[styles.cancelText, { color: darkMode ? '#aaa' : '#555' }]}>
          Cancelar
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 24,
    justifyContent: 'center',
  },
  darkModeButton: {
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
    fontSize: 15,
  },
  button: {
    backgroundColor: '#009C3B',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  cancelButton: {
    alignItems: 'center',
    marginTop: 14,
  },
  cancelText: {
    fontSize: 14,
  },
});