import React from "react";
import { View, Text, StyleSheet, ScrollView, ImageBackground, Image } from "react-native";
import { DrawerItems } from "react-navigation-drawer";  // Asegúrate de importar correctamente
import { Ionicons } from "@expo/vector-icons";

export default Sidebar = props => (
  <ScrollView>
    <ImageBackground
      source={require("../assets/background.png")}
      style={{ width: undefined, padding: 16, paddingTop: 48 }}
    >
      <Image
        source={require("../assets/profile-pic.jpg")}
        style={styles.profile}
      />
      <Text style={styles.name}>Sophie Stewart</Text>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.followers}>734 Followers</Text>
        <Ionicons name="md-people" size={16} color="rgba(255, 255, 255, 0.8)" />
      </View>
    </ImageBackground>
    <View style={styles.container}>
      <DrawerItems {...props} />
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profile: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: "#FFF",
  },
  name: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 8,
  },
  followers: {
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: 13,
    marginRight: 4,
  },
});
