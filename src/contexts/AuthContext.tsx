import { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext<any>(null);

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState(null);

  async function login(userData: any) {
    setUser(userData);
    await AsyncStorage.setItem('@user', JSON.stringify(userData));
  }

  async function logout() {
    setUser(null);
    await AsyncStorage.removeItem('@user');
  }

  useEffect(() => {
    async function carregarUsuario() {
      const dados = await AsyncStorage.getItem('@user');
      if (dados) {
        setUser(JSON.parse(dados));
      }
    }
    carregarUsuario();
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}