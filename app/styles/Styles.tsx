import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import TextField from "../../components/TextFieldProps";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from "expo-router";


const Styles = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    // Simulate a login API call
    if (email === "Admin" && password === "Admin") {
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
      
      </View>
      <Text style={styles.forgotPassword}>this is Style page </Text>

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
  buttonText: {
    fontSize: 16,
    color: "#737373",
    fontWeight: "400",
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

export default Styles;