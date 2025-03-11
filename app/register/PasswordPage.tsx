import React, { useState, useEffect } from "react";
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  Alert, 
  KeyboardAvoidingView, 
  ScrollView, 
  TouchableWithoutFeedback, 
  Keyboard, 
  Platform,
  Animated 
} from "react-native";
import TextField from "../../components/TextFieldProps";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from "expo-router";
import Feather from '@expo/vector-icons/Feather';

const PasswordPage = () => {
  const [email, setEmail] = useState("");
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
    outputRange: [10,100]
  });

  const handleContinue = () => {
    if (!email) {
      Alert.alert("Error", "Please enter your email");
      return;
    }
    // Add your email validation logic here
    router.push("/register/password");
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
            <Text style={styles.title}>What is your email address?</Text>
            <Text style={styles.subTitle}>You'll Use This To Log In</Text>
            
            <View style={styles.inputContainer}>
              <TextField 
                title="Email"
                placeholder="Enter your email"
                value={email}
                onChangeText={setEmail}
                
                
              />
            </View>

            <Text style={styles.termsText}>
              By continuing, you agree to our{' '}
              <Text style={styles.termsLink}>terms and conditions</Text> and{' '}
              <Text style={styles.termsLink}>privacy policy</Text>
            </Text>
          </View>

          <Animated.View style={[
            styles.buttonContainer, 
            { transform: [{ translateY: buttonPosition }] }
          ]}>
            <TouchableOpacity 
              style={[
                styles.button, 
                email ? styles.buttonActive : null
              ]} 
              onPress={handleContinue}
            >
              <Text style={[
                styles.buttonText, 
                email ? styles.buttonTextActive : null
              ]}>Continue</Text>
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

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    marginTop: 20,
    marginBottom: 10,
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
    marginBottom: -20, // Ajoute un espace de 10 entre l'input et les conditions
  },
  termsText: {
    fontSize: 13,
    color: "#A3A3A3",
    textAlign: "center",
    lineHeight: 20,
    fontStyle: "italic",
    marginTop: 10, // Espace de 10 entre l'input et les conditions
  },
  termsLink: {
    color: "#000000",
    fontWeight: "500",
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

export default PasswordPage;