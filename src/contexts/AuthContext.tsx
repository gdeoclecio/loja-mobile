import { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext<any>(null);

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState(null);
  const [darkMode, setDarkMode] = useState(false); // trocar cores para claro e escuro


  function toggleDarkMode(){ // essa função pega o valor e inverte darkkmodel
    setDarkMode(prev => !prev);
  }

  async function login(userData: any) {      // função async salva os dados  na memoria e no celular
    setUser(userData);
    await AsyncStorage.setItem('@user', JSON.stringify(userData));
  }

  async function logout() {      // Limpa os dados  da memoria e do celular
    setUser(null);
    await AsyncStorage.removeItem('@user');
  }

 useEffect(() => {                  // useEffect verifica se tem usuario salvo ao abrir o aplicativo
  async function carregarUsuario() {
    const dados = await AsyncStorage.getItem('@user');
    if (dados) {
      setUser(JSON.parse(dados));
    }
  }
  carregarUsuario();
}, []);


  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        darkMode,
        toggleDarkMode,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}