import { Text, TextInput, View, Pressable, ActivityIndicator, Image, Animated, KeyboardAvoidingView, Platform } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { style, themas } from './style';
import { MaterialIcons } from '@expo/vector-icons';
import { useAuth } from '../../contexts/AuthContext';
import api from '../../services/api';


export default function Login({ navigation }: any) {

  const { login,darkMode, toggleDarkMode } = useAuth();
  const opacidade = useRef(new Animated.Value(0)).current;
  const escala = useRef(new Animated.Value(0.3)).current;
  const rotacao = useRef(new Animated.Value(0)).current;


    const spin = rotacao.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
    });


  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);


useEffect(() => {
  // animação de entrada: fade + escala
  Animated.parallel([
    Animated.timing(opacidade, {
      toValue: 1,
      duration: 1200,
      useNativeDriver: true,
    }),
    Animated.spring(escala, {
      toValue: 1,
      friction: 4,
      useNativeDriver: true,
    }),
  ]).start();

  // animação de rotação contínua da bola
  Animated.loop(
    Animated.timing(rotacao, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    })
  ).start();
}, []);





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
    <KeyboardAvoidingView
      style={[style.container, { backgroundColor: darkMode ? '#1a1a1a' : '#F5F5F5' }]}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
>

      <View style={style.boxTop}>
      <Animated.Image
     source={require('../../../assets/bola.png')}
     style={{
     width: 120,
     height: 120,
     marginTop: 10,
     transform: [{ rotate: spin }],
    }}
        />

      <Animated.Text style={{
         opacity: opacidade,
          fontSize: 26,
           fontWeight: 'bold',
          color: darkMode ? '#FFFFFF' : themas.colors.secundary,
         marginTop: 10,
        letterSpacing: 2,
        }}>
          Loja Copa
        </Animated.Text>

        <Pressable onPress={toggleDarkMode} style={{ position: 'absolute', top: 20, right: 20 }}>  
       <MaterialIcons
         name={darkMode ? 'wb-sunny' : 'nightlight-round'}
          size={28}
          color={darkMode ? '#FFD700' : '#002776'}
  /> 
</Pressable>


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
            secureTextEntry={!mostrarSenha}
            onChangeText={(e: string) => setPassword(e)}
          />

                    <Pressable onPress={() => setMostrarSenha(!mostrarSenha)}>
        <MaterialIcons
         name={mostrarSenha ? 'visibility' : 'visibility-off'}
        size={22}
         color={themas.colors.gray}
          />
</Pressable>
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

    </KeyboardAvoidingView>
  );
}