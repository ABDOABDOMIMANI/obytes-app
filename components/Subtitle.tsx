import React from "react";
import { View, Text } from "react-native";

type SubtitleProps = {
  text: string;
};

const Subtitle: React.FC<SubtitleProps> = ({ text }) => {
  return (
    <View className="flex-row items-center w-full mb-2">
      <Text className="text-sm font-light text-gray-400 mr-5">{text}</Text>
      <View className="flex-1 h-[1px] bg-gray-300" />
    </View>
  );
};

export default Subtitle;
