import React, { useState, useEffect } from "react";
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  Alert, 
  KeyboardAvoidingView, 
  TouchableWithoutFeedback, 
  Keyboard, 
  Platform,
  Animated 
} from "react-native";
import TextField from "../../components/TextFieldProps";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from "expo-router";
import Feather from '@expo/vector-icons/Feather';
import AsyncStorage from '@react-native-async-storage/async-storage';
const ConfirmPage = () => {
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [keyboardHeight] = useState(new Animated.Value(0));

  useEffect(() => {
    const keyboardWillShow = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow',
      (e) => {
        Animated.timing(keyboardHeight, {
          toValue: 1,
          duration: 250,
          useNativeDriver: false,
        }).start();
      }
    );

    const keyboardWillHide = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide',
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
    outputRange: [10, 100]
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
        router.push("../../Inside/styles/Styles"); // Navigate to the next page
      }
    } catch (error) {
      console.error("Error retrieving password:", error);
    }
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"} 
      style={styles.mainContainer}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity 
              onPress={() => router.back()} 
              style={styles.backButton}
            >
              <AntDesign name="arrowleft" size={26} color="black" />
            </TouchableOpacity>
          </View>

          <View style={styles.content}>
            <Text style={styles.title}>Confirm yourpassword</Text>
            <Text style={styles.subTitle}>Make it the same!</Text>
            
            <View style={styles.inputContainer}>
              <TextField 
                title="Confirm Password"
                placeholder="Enter your password again"
                value={password}
                onChangeText={setPassword}
                
                
              />
            </View>

            <Text style={styles.termsText}>
              Password must be at least 8 characters long and include numbers and symbols
            </Text>
          </View>

          <Animated.View style={[
            styles.buttonContainer, 
            { transform: [{ translateY: buttonPosition }] }
          ]}>
            <TouchableOpacity 
              style={[
                styles.button, 
                password ? styles.buttonActive : null
              ]} 
              onPress={handleContinue}
            >
              <Text style={[
                styles.buttonText, 
                password ? styles.buttonTextActive : null
              ]}>Continue</Text>
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

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  container: {
    flex: 1,
    padding: 20,
    marginBottom: 30,
  },
  header: {
    marginTop: 24,
    
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
    color: "#000000",
    marginBottom: 8,
  },
  subTitle: {
    fontSize: 16,
    color: "#525252",
    marginBottom: 32,
  },
  inputContainer: {
    marginBottom: -21,
  },
  termsText: {
    fontSize: 10,
    color: "#A3A3A3",
    textAlign: "center",
    lineHeight: 20,
    fontStyle: "italic",
    paddingBottom: 90,
  },
  buttonContainer: {
    position: 'absolute',
    left: 20,
    right: 20,
    bottom: 30,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#BDBDBD",
    borderRadius: 50,
    height: 60,
    gap: 10,
  },
  buttonActive: {
    backgroundColor: "#000000",
  },
  buttonText: {
    fontSize: 16,
    color: "#737373",
    fontWeight: "500",
  },
  buttonTextActive: {
    color: "#FFFFFF",
  },
});

export default ConfirmPage;
