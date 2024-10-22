import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Menú lateral */}
      {isMenuOpen && (
        <View style={styles.sidebar}>
          <View style={styles.sidebarHeader}>
            <Text style={styles.menuTitle}>Menú</Text>
            <TouchableOpacity onPress={toggleMenu}>
              <Text style={styles.closeBtn}>×</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.sidebarMenu}>
            <Text style={styles.menuItem}>Inicio</Text>
            <Text style={styles.menuItem}>Activos</Text>
            <Text style={styles.menuItem}>Transferencias</Text>
            <Text style={styles.menuItem}>Mantenimiento</Text>
            <Text style={styles.menuItem}>Perfil</Text>
          </View>
        </View>
      )}

      {/* Barra superior */}
      <View style={styles.header}>
        <TouchableOpacity onPress={toggleMenu}>
          <Text style={styles.menuBtn}>☰</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Gestión de Activos</Text>
      </View>

      {/* Resto del contenido */}
      <ScrollView style={styles.main}>
        {/* Aquí puedes agregar el contenido principal */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#2196F3',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 10,
  },
  menuBtn: {
    fontSize: 24,
    color: '#fff',
  },
  sidebar: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '70%',
    height: '100%',
    backgroundColor: '#fff',
    zIndex: 1000,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  sidebarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  closeBtn: {
    fontSize: 30,
    color: '#000',
  },
  sidebarMenu: {
    marginTop: 20,
  },
  menuItem: {
    fontSize: 18,
    paddingVertical: 10,
  },
  main: {
    flex: 1,
    padding: 15,
  },
});
