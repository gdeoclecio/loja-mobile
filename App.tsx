import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";
import { AuthProvider } from "./src/contexts/AuthContext";
import { ThemeProvider } from "./src/contexts/ThemeContext";

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </ThemeProvider>
    </AuthProvider>
  );
}