import React from "react";
import { View, Text, StyleSheet } from "react-native";

type ColoredCircleProps = {
  color: string;
  text: string;
  code: string;
  textColor?: string; // New optional prop for text color
};

const ColoredCircle: React.FC<ColoredCircleProps> = ({ color, text, code, textColor = "#000" }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.circle, { backgroundColor: color }]}>
        <Text style={[styles.text, { color: textColor }]}>{text}</Text>
      </View>
      <Text style={styles.code}>{code}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 10,
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25, // Makes it a perfect circle
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 14,
    fontWeight: "400",
  },
  code: {
    fontSize: 11,
    color: "#404040", // Dark gray for the color code
    marginTop: 5,
    fontWeight: "300",
  },
});

export default ColoredCircle;
