import React, { useState } from "react";
import { View, Text, Alert, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import Subtitle from "../../components/Subtitle";
import ColoredCercle from "../../components/ColoredCercle";
import TextField from "../../components/TextFieldProps";

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
    <View className="flex-1 p-5 bg-white">
      <ScrollView contentContainerStyle={{ paddingBottom: 50 }} showsVerticalScrollIndicator={false}>
        <Text className="text-3xl font-light mb-4 text-black">Obytes Design System</Text>
        <Subtitle text="Typography" />
        
        {/* Typography Grid */}
              <View className="flex flex-row gap-4 pb-8 flex-wrap">
        <Text className="text-4xl font-light w-full">Heading 1</Text>
        <Text className="text-3xl font-light w-full">Heading 2</Text>
        <Text className="text-2xl font-light w-full">Heading 3</Text>
        <View className="flex flex-wrap flex-row gap-4 pb-8">
      <View className="flex flex-row w-full">
        <Text className="text-lg font-light w-1/4">Text xl</Text>
        <Text className="text-lg font-normal w-1/4">Text xl</Text>
        <Text className="text-lg font-medium w-1/4">Text xl</Text>
        <Text className="text-lg font-semibold w-1/4">Text xl</Text>
      </View>

    <View className="flex flex-row w-full">
      <Text className="text-base font-light w-1/4">Text lg</Text>
      <Text className="text-base font-normal w-1/4">Text lg</Text>
      <Text className="text-base font-medium w-1/4">Text lg</Text>
      <Text className="text-base font-semibold w-1/4">Text lg</Text>
    </View>

    <View className="flex flex-row w-full">
      <Text className="text-sm font-light w-1/4">Text xl</Text>
      <Text className="text-sm font-normal w-1/4">Text xl</Text>
      <Text className="text-sm font-medium w-1/4">Text xl</Text>
      <Text className="text-sm font-semibold w-1/4">Text xl</Text>
    </View>

    <View className="flex flex-row w-full">
      <Text className="text-xs font-light w-1/4">Text lg</Text>
      <Text className="text-xs font-normal w-1/4">Text lg</Text>
      <Text className="text-xs font-medium w-1/4">Text lg</Text>
      <Text className="text-xs font-semibold w-1/4">Text lg</Text>
    </View>
  </View>

      </View>


        <Subtitle text="Colors" />

        {/* Primary Colors Grid */}
        <Text className="text-lg font-light mb-2 w-full">Primary</Text>
        <View className="flex flex-row flex-wrap gap-4 pb-8">
          <ColoredCercle text="50" code="#FFC499" color="#FFC499" textColor="black" />
          <ColoredCercle text="100" code="#FFC499" color="#FFC499" textColor="black" />
          <ColoredCercle text="200" code="#FFA766" color="#FFA766" textColor="black" />
          <ColoredCercle text="300" code="#FFC499" color="#FFC499" textColor="black" />
          <ColoredCercle text="400" code="#FF8933" color="#FF8933" textColor="black" />
          <ColoredCercle text="500" code="#FF7B1A" color="#FF7B1A" textColor="white" />
          <ColoredCercle text="600" code="#FF6C00" color="#FF6C00" textColor="white" />
          <ColoredCercle text="700" code="#E56100" color="#E56100" textColor="white" />
          <ColoredCercle text="800" code="#CC5600" color="#CC5600" textColor="white" />
          <ColoredCercle text="900" code="#B24C00" color="#B24C00" textColor="white" />
        </View>

        {/* Neutral Colors Grid */}
        <Text className="text-lg font-light mb-2 w-full">Neutral</Text>
        <View className="flex flex-row flex-wrap gap-4 pb-8">
          <ColoredCercle text="50" code="#FAFAFA" color="#FAFAFA" textColor="black" />
          <ColoredCercle text="100" code="#F5F5F5" color="#F5F5F5" textColor="black" />
          <ColoredCercle text="200" code="#F0EFEE" color="#F0EFEE" textColor="black" />
          <ColoredCercle text="300" code="#D4D4D4" color="#D4D4D4" textColor="black" />
          <ColoredCercle text="400" code="#A3A3A3" color="#A3A3A3" textColor="black" />
          <ColoredCercle text="500" code="#737373" color="#737373" textColor="white" />
          <ColoredCercle text="600" code="#525252" color="#525252" textColor="white" />
          <ColoredCercle text="700" code="#404040" color="#404040" textColor="white" />
          <ColoredCercle text="800" code="#262626" color="#262626" textColor="white" />
          <ColoredCercle text="900" code="#171717" color="#171717" textColor="white" />
        </View>

        <Subtitle text="Forms" />
        <TextField title="Default" placeholder="Lorem ipsum dolor sit amet" />
        <TextField title="Select an Option" placeholder="Choose one..." />
        <TextField title="Error" placeholder="Lorem ipsum dolor sit amet" />
        <TextField title="Focused" placeholder="Lorem ipsum dolor sit amet" />

        <Subtitle text="Buttons" />
        <View className="grid  gap-4 w-1/2">
          <TouchableOpacity className="bg-black py-2 h-14 w-full rounded-full mb-2">
            <Text className="text-white text-lg font-light text-center py-1">Button</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-[#5d5353] py-2 h-14 w-full rounded-full mb-2">
            <Text className="text-white text-lg font-light text-center py-1">Button</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-[#474141] py-2 h-14 w-full rounded-full mb-2">
            <Text className="text-white text-lg font-light text-center py-1">Button</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-[#CECECE] py-2 h-14 w-full rounded-full mb-2">
            <Text className="text-[#737373] text-lg font-light text-center py-1">Button</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Styles;
