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

const EmailPage = () => {
  const [email, setEmail] = useState("");
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

  const handleContinue = () => {
    if (!email) {
      Alert.alert("Error", "Please enter your email");
      return;
    }
    try {
      router.push("/PasswordPage"); // Updated path to match your project structure
      console.log("Navigating to password page");
    } catch (error) {
      console.error("Navigation error:", error);
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
          <View className="mt-5 mb-2.5">
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
              What is your email address?
            </Text>
            <Text className="text-base text-neutral-600 mb-8">
              You'll Use This To Log In
            </Text>

            <View className="mb-4">
              <TextField
                title="Email"
                placeholder="Enter your email"
                value={email}
                onChangeText={setEmail}
              />
            </View>

            <Text className="text-xs text-neutral-400 text-center leading-5 italic mt-2.5">
              By continuing, you agree to our{" "}
              <Text className="text-black font-medium">terms and conditions</Text>{" "}
              and{" "}
              <Text className="text-black font-medium">privacy policy</Text>
            </Text>
          </View>

          {/* Button */}
          <Animated.View
            className="absolute left-5 right-5 bottom-8"
            style={{ transform: [{ translateY: buttonPosition }] }}
          >
            <TouchableOpacity
              className={`flex-row items-center justify-center rounded-full h-14 gap-2.5 ${
                email ? "bg-black" : "bg-neutral-300"
              }`}
              onPress={handleContinue}
            >
              <Text
                className={`text-base font-medium ${
                  email ? "text-white" : "text-neutral-500"
                }`}
              >
                Continue
              </Text>
              <Feather
                name="arrow-right-circle"
                size={24}
                color={email ? "#FFFFFF" : "#737373"}
              />
            </TouchableOpacity>
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default EmailPage;