import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import TextField from "../../components/TextFieldProps";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from "expo-router";


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
    if (email === "user@example.com" && password === "password123") {
      Alert.alert("Success", "Logged in successfully!");
    } else {
      Alert.alert("Error", "Invalid email or password");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
      <AntDesign style={styles.arrowLeft} name="arrowleft" size={26} color="black" onPress={() => router.push({pathname: "../EntryPage"})} />
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
      <Text style={styles.forgotPassword}>this is a hint text to help user </Text>

      {/* Login Button */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
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
  input: {
    width: "100%",
    height: 50,
    borderColor: "#cccccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "black",
    borderRadius: 8,
    marginBottom: 80,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 230,
  },
  buttonText: {
    fontSize: 16,
    color: "#ffffff",
    fontWeight: "bold",
  },
  arrowLeft: {
    
    left: 0,
    bottom: 10,
  },forgotPassword :{
    color: "#A3A3A3",
    fontSize: 14,
    fontWeight: "300",
    width: 322,
    bottom: 20,

  }
});

export default LoginPage;