import React from "react";
import { View, Text, StyleSheet } from "react-native";

type SubtitleProps = {
  text: string;
};

const Subtitle: React.FC<SubtitleProps> = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "300",
    color: "#A3A3A3", // Gray color like in the image
    marginRight: 20, // Space between text and line
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#D3D3D3", // Light gray line
  },
});

export default Subtitle;
