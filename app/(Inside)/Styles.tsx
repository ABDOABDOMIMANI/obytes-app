import React, { useState } from "react";
import { View, Text, Alert, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import Subtitle from "../../components/Subtitle";
import ColoredCercle from "../../components/ColoredCercle";
import TextField from "../../components/TextFieldProps";
import { Picker } from '@react-native-picker/picker';
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
      <ScrollView style={styles.titleContainer} contentContainerStyle={{ paddingBottom: 50 }} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Obytes Design System</Text>
        <Subtitle text="Typography" />
        <View style={styles.grid}>
          <Text style={{fontSize: 36, fontWeight: "300" , width: "100%"}}>Heading 1</Text>
          
          <Text style={{fontSize: 31, fontWeight: "300" , width: "100%"}}>Heading 2</Text>
          <Text style={{fontSize: 25, fontWeight: "300" , width: "100%"}}>Heading 3</Text>
          
          <Text style={{fontSize: 18, fontWeight: "300"  , width: "20%" }}>Text xl</Text>
          <Text style={{fontSize: 18, fontWeight: "400" , width: "20%"}}>Text xl</Text>
          <Text style={{fontSize: 18, fontWeight: "500" , width: "20%"}}>Text xl</Text>
          <Text style={{fontSize: 18, fontWeight: "600" , width: "20%"}}>Text xl</Text>

          <Text style={{fontSize: 16, fontWeight: "300"  , width: "20%" }}>Text lg</Text>
          <Text style={{fontSize: 16, fontWeight: "400" , width: "20%"}}>Text lg</Text>
          <Text style={{fontSize: 16, fontWeight: "500" , width: "20%"}}>Text lg</Text>
          <Text style={{fontSize: 16, fontWeight: "600" , width: "20%"}}>Text lg</Text>

          <Text style={{fontSize: 14, fontWeight: "300"  , width: "20%" }}>Text xl</Text>
          <Text style={{fontSize: 14, fontWeight: "400" , width: "20%"}}>Text xl</Text>
          <Text style={{fontSize: 14, fontWeight: "500" , width: "20%"}}>Text xl</Text>
          <Text style={{fontSize: 14, fontWeight: "600" , width: "20%"}}>Text xl</Text>

          <Text style={{fontSize: 12, fontWeight: "300"  , width: "20%" }}>Text lg</Text>
          <Text style={{fontSize: 12, fontWeight: "400" , width: "20%"}}>Text lg</Text>
          <Text style={{fontSize: 12, fontWeight: "500" , width: "20%"}}>Text lg</Text>
          <Text style={{fontSize: 12, fontWeight: "600" , width: "20%"}}>Text lg</Text>

        </View>

        <Subtitle text="Colors" />
        <Text style={{fontSize: 16, fontWeight: "300" , width: "100%" , marginBottom: 7}}>Primary</Text>
        {/* Grid Layout for ColoredCercle */}
        <View style={styles.grid}>
          <ColoredCercle text="50" code="#FFC499" color="#FFC499"  textColor="black"  />
          <ColoredCercle text="100" code="#FFC499" color="#FFC499" textColor="black" />
          <ColoredCercle text="200" code="#FFA766" color="#FFA766" textColor="black"  />
          <ColoredCercle text="300" code="#FFC499" color="#FFC499" textColor="black"  />
          <ColoredCercle text="400" code="#FF8933" color="#FF8933" textColor="black" />
          <ColoredCercle text="500" code="#FF7B1A" color="#FF7B1A" textColor="white" />
          <ColoredCercle text="600" code="#FF6C00" color="#FF6C00" textColor="white"/>
          <ColoredCercle text="700" code="#E56100" color="#E56100" textColor="white"/>
          <ColoredCercle text="800" code="#CC5600" color="#CC5600" textColor="white"/>
          <ColoredCercle text="900" code="#B24C00" color="#B24C00" textColor="white"/>
        </View>

        <Text style={{fontSize: 16, fontWeight: "300" , width: "100%" , marginBottom: 7}}>Neutral</Text>

        <View style={styles.grid}>
          <ColoredCercle text="50" code="#FAFAFA" color="#FAFAFA"  textColor="black"  />
          <ColoredCercle text="100" code="#F5F5F5" color="#F5F5F5" textColor="black" />
          <ColoredCercle text="200" code="#F0EFEE" color="#F0EFEE" textColor="black"  />
          <ColoredCercle text="300" code="#D4D4D4" color="#D4D4D4" textColor="black"  />
          <ColoredCercle text="400" code="#A3A3A3" color="#A3A3A3" textColor="black" />
          <ColoredCercle text="500" code="#737373" color="#737373" textColor="white" />
          <ColoredCercle text="600" code="#525252" color="#525252" textColor="white"/>
          <ColoredCercle text="700" code="#404040" color="#404040" textColor="white"/>
          <ColoredCercle text="800" code="#262626" color="#262626" textColor="white"/>
          <ColoredCercle text="900" code="#171717" color="#171717" textColor="white"/>
        </View>
        <Subtitle text="Forms" />
        <TextField title="Default" placeholder="Lorem ipsum dolor sit amet" />
        <TextField 
          title="Select an Option" 
          placeholder="Choose one..." 
          
        />
        
        <TextField title="Error" placeholder="Lorem ipsum dolor sit amet" />
        <TextField title="Focused" placeholder="Lorem ipsum dolor sit amet" />
        <Subtitle text="Buttons" />
         <TouchableOpacity
          style={styles.button}>
         <Text style={styles.buttonText}>Button</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button , {backgroundColor: "#5d5353"}]} >
         <Text style={styles.buttonText}>Button</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button , {backgroundColor: "#474141"}]} >
         <Text style={styles.buttonText}>Button</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button , {backgroundColor: "#CECECE"}]} >
         <Text style={[styles.buttonText , {color: "#737373"}]}>Button</Text>
        </TouchableOpacity>


      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ffffff",
  },
  titleContainer: {
    marginTop: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "300",
    marginBottom: 15,
    color: "#000000",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap", // Enables grid layout
    justifyContent: "center", // Centers items
    gap: 15, 
    paddingBottom: 30,
  },
  button: {
    backgroundColor: "#000000",
    padding: 10,
    height: 50,
    width: "50%",
    alignSelf: "auto",
    borderRadius: 50,
    marginBottom: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "300",
    textAlign: "center",
    alignItems: "center",
    paddingTop: 5,
  },
});

export default Styles;
