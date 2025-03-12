import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from "react-native";
import TextField from "../../../components/TextFieldProps";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from "expo-router";
import FeedPost from "../../../components/FeedPost";
const Feeds = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  

  return (
    <View style={styles.container}>
      <ScrollView style={styles.titleContainer} showsVerticalScrollIndicator={false}>
      <FeedPost />
      <FeedPost />
      <FeedPost />
      <FeedPost />
      <FeedPost />
      <FeedPost />
      <FeedPost />
      </ScrollView>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#ffffff",
  },
  titleContainer: {
    marginTop: -10,
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

export default Feeds;