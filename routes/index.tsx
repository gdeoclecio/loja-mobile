import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../src/screen/Login"
import Home from "../src/screen/Home"
import Produtos from "../src/screen/Produtos"
import NovoProduto from "../src/screen/NovoProduto";
import EditarProduto from "../src/screen/EditarProduto";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Produtos" component={Produtos} />
      <Stack.Screen name="NovoProduto" component={NovoProduto} />
      <Stack.Screen name="EditarProduto" component={EditarProduto} />
    </Stack.Navigator>
  );
}