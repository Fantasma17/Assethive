import 'react-native-gesture-handler';  // Asegúrate de que esta línea esté al inicio
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import home from './screens/home';
import login from './screens/login';

const Stack = createStackNavigator();

export default function App() {
  function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen 
          name="login" 
          component={login} 
          options={{ 
            title: 'Bienvenido', 
            headerTintColor: "white", 
            headerTitleAlign: "center", 
            headerStyle: { backgroundColor: "#4A90E2" } 
          }} 
        />
        <Stack.Screen name="home" component={home} />
      </Stack.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
