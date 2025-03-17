import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
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
      router.push("/Styles");
    } else {
      Alert.alert("Error", "Invalid email or password");
    }
  };

  const isFormValid = email.trim() !== "" && password.trim() !== "";

  return (
    <View className="flex-1 justify-center items-center p-5 bg-white">
      <View className="mt-33">
        <AntDesign
          className=" left-0 top-0"
          name="arrowleft"
          size={26}
          color="black"
          onPress={() => router.back()}
        />
        <Text className="text-2xl font-light mb-16 text-black">Welcome Back!</Text>
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
      <Text className="text-sm font-light text-gray-400 w-80 mb-5 right-6 bottom-7">
        This is a hint text to help user
      </Text>

      {/* Login Button */}
      <TouchableOpacity
        className={`w-full rounded-full h-16 justify-center items-center mt-52 mb-20 px-5 top-20 ${
          isFormValid ? "bg-black" : "bg-gray-400"
        }`}
        onPress={handleLogin}
      >
        <Text className={`text-lg font-large text-white ${
          isFormValid ? "text-white" : "text-gray-500"
        }`}>
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginPage;