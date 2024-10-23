
//Screen.js
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default class Screen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => this.props.navigation.openDrawer()}
        >
          <FontAwesome5 name="bars" size={24} color="Black" />
        </TouchableOpacity>
        <View style={styles.content}>
          <Text style={styles.text}>{this.props.name} Screen</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  menuButton: {
    alignItems: 'flex-start',
    marginTop: 40,  // Agrega margen superior para que no quede tan arriba
    marginLeft: 16,  // Mantén el margen izquierdo para que esté alineado
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#161924',
    fontSize: 20,
    fontWeight: 'bold',
  },
});