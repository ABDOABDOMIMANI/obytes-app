import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import logo from "../assets/logo.png";
import "../global.css"


const ObytesDesignSystem: React.FC = () => {
  const router = useRouter();
  console.log("Router:", router);

  const handleRegisterPress = () => {
    if (!router) {
      console.error("Router is undefined");
      return;
    }
    try {
      router.push("/EmailPage"); // Updated route
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
      router.push("/LoginPage"); // Updated route
      console.log("Navigating to registration page");
    } catch (error) {
      console.error("Navigation error:", error);
    }
  };

  return (
    <View className="flex-1 justify-center items-center px-5 bg-white mt-20">
      {/* Logo */}
      <Image className="w-48 h-36 object-contain pt-20 pl-2" source={logo} />

      {/* Subheader */}
      <Text className="text-2xl text-black mb-5">Design system</Text>

      {/* Description */}
      <Text className="text-base text-gray-500 text-center mb-10 w-85">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean faucibus mollis nisl.
      </Text>

      <View className="flex-row gap-7">
        <TouchableOpacity
          className="w-40 py-4 rounded-full bg-black border-2 border-black items-center"
          onPress={handleLoginPress}
        >
          <Text className="text-white text-lg font-medium">Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="w-40 py-4 rounded-full bg-white border-2 border-black items-center"
          onPress={handleRegisterPress}
        >
          <Text className="text-black text-lg font-medium">Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ObytesDesignSystem;
