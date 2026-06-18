import { Text, TextInput, View, Pressable, ActivityIndicator, Image } from 'react-native';
import React, { useState } from 'react';
import { style, themas } from './style';
import { MaterialIcons } from '@expo/vector-icons';
import { useAuth } from '../../contexts/AuthContext';
import api from '../../services/api';

export default function Login({ navigation }: any) {

  const { login } = useAuth();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState('');

  async function autenticar() {
    setErro('');

    if (!username) {
      setErro('Usuário obrigatório');
      return;
    }

    if (password.length < 6) {
      setErro('Senha deve ter no mínimo 6 caracteres');
      return;
    }

    setLoading(true);

    try {
      const response = await api.post('/auth/login', { username, password });
      login({ username, token: response.data.token });
      navigation.navigate('Home');
    } catch (error) {
      setErro('Usuário ou senha incorretos');
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={style.container}>

      <View style={style.boxTop}>
        <Image
          source={require('../../../assets/bandeirabrasil.png')}
          style={{ width: 180, height: 180, resizeMode: 'contain' }}
        />
      </View>

      <View style={style.boxMid}>
        {erro ? (
          <Text style={{ color: 'red', marginBottom: 10 }}>{erro}</Text>
        ) : null}

        <Text style={style.titleInput}>Usuário</Text>
        <View style={style.BoxInput}>
          <MaterialIcons name="person" size={20} color={themas.colors.gray} />
          <TextInput
            style={style.input}
            placeholder="Digite seu usuário"
            underlineColorAndroid="transparent"
            autoCapitalize="none"
            value={username}
            onChangeText={(e: string) => setUsername(e)}
          />
        </View>

        <Text style={style.titleInput}>Senha</Text>
        <View style={style.BoxInput}>
          <MaterialIcons name="lock" size={20} color={themas.colors.gray} />
          <TextInput
            style={style.input}
            placeholder="Digite sua senha"
            underlineColorAndroid="transparent"
            secureTextEntry
            value={password}
            onChangeText={(e: string) => setPassword(e)}
          />
        </View>
      </View>

      <View style={style.boxBottom}>
        <Pressable style={style.button} onPress={autenticar}>
          {loading
            ? <ActivityIndicator color={'#FFFF'} size="small" />
            : <Text style={style.textButton}>Entrar</Text>
          }
        </Pressable>
      </View>

      <Text style={style.textBotton}>Não tem conta? <Text style={{ color: themas.colors.primary }}>Crie agora!</Text></Text>

    </View>
  );
}
