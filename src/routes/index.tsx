import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screen/Login"
import Home from "../screen/Home"
import Produtos from "../screen/Produtos"
import NovoProduto from "../screen/NovoProduto";
import EditarProduto from "../screen/EditarProduto";

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