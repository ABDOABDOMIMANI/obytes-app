import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import TextField from "../../components/TextFieldProps";
import AntDesign from '@expo/vector-icons/AntDesign';
import { Link, useRouter } from "expo-router";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    // Simulate a login API call
    if (email === "A" && password === "A") {
      // Update the navigation path to the Styles page
      router.push("/Styles");
    } else {
      Alert.alert("Error", "Invalid email or password");
    }
  };

  // Check if both email and password are not empty
  const isFormValid = email.trim() !== "" && password.trim() !== "";

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <AntDesign
          style={styles.arrowLeft}
          name="arrowleft"
          size={26}
          color="black"
          onPress={() => router.back()}
        />
        <Text style={styles.title}>Welcome Back!</Text>
        <TextField
          title="Email"
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
        />
        <TextField
          title="Password"
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          
        />
      </View>
      <Text style={styles.forgotPassword}>This is a hint text to help user</Text>

      {/* Login Button */}
      <TouchableOpacity
        style={[styles.button, isFormValid ? styles.buttonActive : null]}
        onPress={handleLogin}
      >
        <Text style={[styles.buttonText, isFormValid ? styles.buttonTextActive : null]}>
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#ffffff",
  },
  titleContainer: {
    marginTop: 130,
  },
  title: {
    fontSize: 24,
    fontWeight: "300",
    marginBottom: 60,
    color: "#000000",
  },
  button: {
    width: "100%",
    backgroundColor: "#BDBDBD",
    borderRadius: 50,
    marginBottom: 80,
    height: 60,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 210,
    paddingHorizontal: 20,
  },
  buttonActive: {
    backgroundColor: "#000000", // Black color when the form is valid
  },
  buttonText: {
    fontSize: 16,
    color: "#737373",
    fontWeight: "400",
  },
  buttonTextActive: {
    color: "#FFFFFF", // White text color when the button is active
  },
  arrowLeft: {
    left: 0,
    bottom: 10,
  },
  forgotPassword: {
    color: "#A3A3A3",
    fontSize: 14,
    fontWeight: "300",
    width: 322,
    bottom: 20,
  },
});

export default LoginPage;