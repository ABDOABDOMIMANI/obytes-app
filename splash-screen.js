import React, { useEffect, useRef } from "react";
import { StyleSheet, View, Image, Animated  } from "react-native";
import icon from "./assets/splash-screen.png";
import logo from "./assets/logo.png";

export default function SplashScreen() {
  const fadeAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnimation]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.imageContainer, { opacity: fadeAnimation }]}>
        <Image style={styles.image} source={icon} />
        <Image style={styles.logo} source={logo} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1e1e1e",
  },
  imageContainer: {
    borderRadius: 20,
    overflow: "hidden",
  },
  image: {
    width: 1000,
    height: 880,
    paddingRight: 130,
    resizeMode: "cover",
  },
  logo: {
    position: "absolute",
    textAlign : "center",
    alignContent :"center", // Position from the top
    left: 400,
    top :370, // Position from the left
    width: 200, // Adjust the size of the logo
    height: 50, // Set a specific height or use a numeric value
    zIndex: 2, // Ensure the logo is on top
  },
});