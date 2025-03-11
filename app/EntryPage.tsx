import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import logo from "../assets/logo.png";
import { useRouter } from "expo-router";
import {RegisterPage} from "./register/RegisterPage";

const ObytesDesignSystem: React.FC = () => {
  const router = useRouter();
  console.log("Router:", router);

  const handleRegisterPress = () => {
    if (!router) {
      console.error("Router is undefined");
      return;
    }
    try {
      router.push({pathname: "/register/RegisterPage"}); // Updated route
      console.log("Navigating to registration page");
    } catch (error) {
      console.error("Navigation error:", error);
    }
  };
  const handleLoginPress = () => {
    if (!router) {
      console.error("Router is undefined");
      return;
    }
    try {
      router.push({pathname: "/login/LoginPage"}); // Updated route
      console.log("Navigating to registration page");
    } catch (error) {
      console.error("Navigation error:", error);
    }
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image style={styles.logo} source={logo} />

      {/* Subheader */}
      <Text style={styles.subHeader}>Design system</Text>

      {/* Description */}
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean faucibus mollis nisl.
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
          <Text style={styles.buttonTextLogin}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.signUpButton]}
          onPress={handleRegisterPress}
        >
          <Text style={styles.buttonTextSignUp}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    marginTop: 80,
    backgroundColor: "#ffffff",
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    paddingTop: 80,
    paddingLeft: 10,
  },
  subHeader: {
    fontSize: 24,
    color: "#000000",
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: "#666666",
    textAlign: "center",
    marginBottom: 40,
    width: 300,
  },
  button: {
    width: "40%",
    padding: 15,
    borderRadius: 81,
    backgroundColor: "black",
    alignItems: "center",
    marginBottom: 10,
    borderWidth: 2,
  },
  signUpButton: {
    backgroundColor: "white",
  },
  buttonTextLogin: {
    fontSize: 16,
    color: "white",
    fontWeight: "400",
  },
  buttonTextSignUp: {
    fontSize: 16,
    color: "black",
    fontWeight: "400",
    borderColor: "black",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 30,
  },
});

export default ObytesDesignSystem;