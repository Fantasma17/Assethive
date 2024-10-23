// app.tsx
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { 
  InicioScreen, 
  ActivosScreen, 
  BodegaScreen, 
  TransferenciasScreen, 
  EmpleadosScreen, 
  PermisosScreen, 
  EstadosScreen 
} from "./screens";

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Inicio"
      screenOptions={{ headerShown: false }}  // Oculta el encabezado automático
    >
      <Drawer.Screen name="Inicio" component={InicioScreen} />
      <Drawer.Screen name="Activos" component={ActivosScreen} />
      <Drawer.Screen name="Bodega" component={BodegaScreen} />
      <Drawer.Screen name="Transferencias" component={TransferenciasScreen} />
      <Drawer.Screen name="Empleados" component={EmpleadosScreen} />
      <Drawer.Screen name="Permisos" component={PermisosScreen} />
      <Drawer.Screen name="Estados" component={EstadosScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
