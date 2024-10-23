
//index.js
import React from "react";
import Screen from "./Screen";

export const InicioScreen = ({ navigation }) => <Screen navigation={navigation} name="Inicio" />;
export const ActivosScreen = ({ navigation }) => <Screen navigation={navigation} name="Activos" />;
export const BodegaScreen = ({ navigation }) => <Screen navigation={navigation} name="Bodega" />;
export const TransferenciasScreen = ({ navigation }) => <Screen navigation={navigation} name="Transferencias" />;
export const EmpleadosScreen = ({ navigation }) => <Screen navigation={navigation} name="Empleados" />;
export const PermisosScreen = ({ navigation }) => <Screen navigation={navigation} name="Permisos" />;
export const EstadosScreen = ({ navigation }) => <Screen navigation={navigation} name="Estados" />;
