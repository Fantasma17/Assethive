import React from 'react';
import { StyleSheet, View, Image, TextInput, TouchableOpacity, Text } from 'react-native';

export default function Login({ navigation  }) {
  const handleLogin = () => {
    // Aquí puedes agregar la lógica de validación
    navigation.navigate('home');
  };

  return (
    <View style={styles.padre}>
      <View>
        <Image source={require('../assets/logoscuro.png')} style={styles.profile} />
      </View>

      <View style={styles.tarjeta}>
        <View style={styles.cajaTexto}>
          <TextInput placeholder='usuario' style={{ paddingHorizontal: 15 }} />
        </View>

        <View style={styles.cajaTexto}>
          <TextInput placeholder='contraseña' style={{ paddingHorizontal: 15 }} secureTextEntry />
        </View>

        <View style={styles.PadreBoton}>
          <TouchableOpacity style={styles.cajaBoton} onPress={handleLogin}>
            <Text style={styles.TextoBoton}>Iniciar sesión</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  padre: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  profile: {
    width: 162,
    height: 100,
    borderRadius: 50,
  },
  tarjeta: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    width: '90%',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  cajaTexto: {
    paddingVertical: 20,
    backgroundColor: '#cccccc40',
    borderRadius: 30,
    marginVertical: 10,
  },
  PadreBoton: {
    alignItems: 'center',
  },
  cajaBoton: {
    backgroundColor: '#525FE1',
    borderRadius: 30,
    paddingVertical: 20,
    width: 150,
    marginTop: 20,
  },
  TextoBoton: {
    textAlign: 'center',
    color: 'white',
  },
});