import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  Animated,
} from "react-native";
import TextField from "../../components/TextFieldProps";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ConfirmPage = () => {
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [keyboardHeight] = useState(new Animated.Value(0));

  useEffect(() => {
    const keyboardWillShow = Keyboard.addListener(
      Platform.OS === "ios" ? "keyboardWillShow" : "keyboardDidShow",
      (e) => {
        Animated.timing(keyboardHeight, {
          toValue: 1,
          duration: 250,
          useNativeDriver: false,
        }).start();
      }
    );

    const keyboardWillHide = Keyboard.addListener(
      Platform.OS === "ios" ? "keyboardWillHide" : "keyboardDidHide",
      () => {
        Animated.timing(keyboardHeight, {
          toValue: 0,
          duration: 250,
          useNativeDriver: false,
        }).start();
      }
    );

    return () => {
      keyboardWillShow.remove();
      keyboardWillHide.remove();
    };
  }, []);

  const buttonPosition = keyboardHeight.interpolate({
    inputRange: [0, 26],
    outputRange: [10, 100],
  });

  const handleContinue = async () => {
    try {
      const storedPassword = await AsyncStorage.getItem("password"); // Retrieve stored password

      if (!password) {
        Alert.alert("Error", "Please enter your password");
        return;
      } else if (password !== storedPassword) {
        Alert.alert("Error", "Passwords do not match. Please try again.");
        return;
      } else {
        router.push("/Styles"); // Navigate to the next page
      }
    } catch (error) {
      console.error("Error retrieving password:", error);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1 bg-white"
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="flex-1 p-5">
          {/* Header */}
          <View className="mt-6">
            <TouchableOpacity
              onPress={() => router.back()}
              className="w-10 h-10 justify-center"
            >
              <AntDesign name="arrowleft" size={26} color="black" />
            </TouchableOpacity>
          </View>

          {/* Content */}
          <View className="flex-1">
            <Text className="text-lg font-medium text-black mb-2">
              Confirm your password
            </Text>
            <Text className="text-base text-neutral-600 mb-8">
              Make it the same!
            </Text>

            <View className="mb-4">
              <TextField
                title="Confirm Password"
                placeholder="Enter your password again"
                value={password}
                onChangeText={setPassword}
              />
            </View>

            <Text className="text-xs text-neutral-400 text-center leading-5 italic pb-24">
              Password must be at least 8 characters long and include numbers and
              symbols
            </Text>
          </View>

          {/* Button */}
          <Animated.View
            className="absolute left-5 right-5 bottom-8"
            style={{ transform: [{ translateY: buttonPosition }] }}
          >
            <TouchableOpacity
              className={`flex-row items-center justify-center rounded-full h-14 gap-2.5 ${
                password ? "bg-black" : "bg-neutral-300"
              }`}
              onPress={handleContinue}
            >
              <Text
                className={`text-base font-medium ${
                  password ? "text-white" : "text-neutral-500"
                }`}
              >
                Continue
              </Text>
              <Feather
                name="arrow-right-circle"
                size={24}
                color={password ? "#FFFFFF" : "#737373"}
              />
            </TouchableOpacity>
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default ConfirmPage;