import React from "react";
import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";

const Settings = () => {
  const handleLinkPress = (url: string) => {
    Linking.openURL(url).catch((err) =>
      console.error("Failed to open link:", err)
    );
  };

  return (
    <View className="flex-1 p-5 bg-white">
      {/* UI Section */}
      <Text className="text-lg font-normal text-black mb-2.5">UI</Text>
      <View className="border border-neutral-200 rounded-xl p-3 pl-5 mb-10">
        <View className="flex-row items-center gap-5 w-full">
          <Text className="text-sm text-black ml-1 w-[200px]">
            Language : English
          </Text>
          <AntDesign
            name="arrowright"
            size={24}
            color="#CCCCCC"
            className="ml-16"
          />
        </View>
      </View>

      {/* General Section */}
      <Text className="text-lg font-normal text-black mb-2.5">General</Text>
      <View className="border border-neutral-200 rounded-xl p-3 pl-5 mb-10">
        <TouchableOpacity className="py-2.5">
          <View className="flex-row items-center gap-5 w-full">
            <View className="flex-row items-center gap-5 w-[200px]">
              <Feather name="share-2" size={24} color="#737373" />
              <Text className="text-sm text-black -ml-2.5">Share</Text>
            </View>
            <AntDesign
              name="arrowright"
              size={24}
              color="#CCCCCC"
              className="ml-16"
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity className="py-2.5">
          <View className="flex-row items-center gap-5 w-full">
            <View className="flex-row items-center gap-5 w-[200px]">
              <Feather name="star" size={24} color="#737373" />
              <Text className="text-sm text-black -ml-2.5">Rate</Text>
            </View>
            <AntDesign
              name="arrowright"
              size={24}
              color="#CCCCCC"
              className="ml-16"
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity className="py-2.5">
          <View className="flex-row items-center gap-5 w-full">
            <View className="flex-row items-center gap-5 w-[200px]">
              <AntDesign name="hearto" size={24} color="#737373" />
              <Text className="text-sm text-black -ml-2.5">Support</Text>
            </View>
            <AntDesign
              name="arrowright"
              size={24}
              color="#CCCCCC"
              className="ml-16"
            />
          </View>
        </TouchableOpacity>
      </View>

      {/* Links Section */}
      <Text className="text-lg font-normal text-black mb-2.5">Links</Text>
      <View className="border border-neutral-200 rounded-xl p-3 pl-5 mb-10">
        <TouchableOpacity
          className="py-2.5"
          onPress={() => handleLinkPress("https://github.com")}
        >
          <View className="flex-row items-center gap-5 w-full">
            <View className="flex-row items-center gap-5 w-[200px]">
              <SimpleLineIcons name="social-github" size={24} color="#737373" />
              <Text className="text-sm text-black -ml-2.5">Github</Text>
            </View>
            <AntDesign
              name="arrowright"
              size={24}
              color="#CCCCCC"
              className="ml-16"
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          className="py-2.5"
          onPress={() => handleLinkPress("https://obytes.com")}
        >
          <View className="flex-row items-center gap-5 w-full">
            <View className="flex-row items-center gap-5 w-[200px]">
              <AntDesign name="earth" size={24} color="#737373" />
              <Text className="text-sm text-black -ml-2.5">Website</Text>
            </View>
            <AntDesign
              name="arrowright"
              size={24}
              color="#CCCCCC"
              className="ml-16"
            />
          </View>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View className="items-center justify-center mt-[-20px]">
        <Image
          source={require("../../assets/footer.png")}
          className="w-[150px] h-[20px]"
        />
      </View>
    </View>
  );
};

export default Settings;