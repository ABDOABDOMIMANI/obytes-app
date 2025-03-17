import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";

interface TextFieldProps {
  title: string;
  placeholder: string;
  value?: string;
  onChangeText?: (text: string) => void;
}

const TextField: React.FC<TextFieldProps> = ({
  title,
  placeholder,
  value,
  onChangeText,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View className="mb-8">
      <Text className="text-base font-normal text-gray-600 mb-2">{title}</Text>
      <TextInput
        className={`w-[340px] h-[52px] bg-gray-200 rounded-lg px-4 text-sm text-black border-2 ${
          isFocused ? "border-black" : "border-transparent"
        }`}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor="#A0A0A0"
        returnKeyType="done"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </View>
  );
};

export default TextField;
