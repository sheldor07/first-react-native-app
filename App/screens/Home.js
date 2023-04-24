import React from "react";
import { View, StatusBar, StyleSheet, Image, Dimensions } from "react-native";
import colors from "../constants/colors";
const screen = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: colors.blue,
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  logoBackground:{
    width: screen.width * 0.45,
    height: screen.height * 0.45,
  },
  logo: {
    position: "absolute",
    width: screen.width * 0.25,
    height: screen.height * 0.25,
  },
});
export default () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.blue} />

      <View style={styles.logoContainer}>
        <Image
          style={styles.logoBackground}
          source={require("../assets/images/background.png")}
          resizeMode="contain"
        />
        <Image
          style={styles.logo}
          source={require("../assets/images/logo.png")}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};
