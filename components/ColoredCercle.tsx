import React from "react";
import { View, Text } from "react-native";
import "../global.css"

type ColoredCircleProps = {
  color: string;
  text: string;
  code: string;
  textColor?: string; // New optional prop for text color
};

const ColoredCircle: React.FC<ColoredCircleProps> = ({ color, text, code, textColor = "#000" }) => {
  return (
    <View className="items-center mt-2 ">
      {/* Circle with dynamic background color */}
      <View
        className="w-12 h-12 rounded-full justify-center items-center"
        style={{ backgroundColor: color }} // Dynamic background color
      >
        <Text className={`text-base font-normal`} style={{ color: textColor }}>
          {text}
        </Text>
      </View>
      {/* Code below the circle */}
      <Text className="text-sm text-gray-600 mt-1 font-light w-19 text-center ">{code}</Text>
    </View>
  );
};

export default ColoredCircle;
