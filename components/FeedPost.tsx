import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

interface FeedPostProps {
  id: string | number; // Unique identifier
}

const FeedPost: React.FC<FeedPostProps> = ({ id }) => {
  return (
    <View key={id} style={styles.container}>
      {/* Post Image */}
      <View style={styles.imagePlaceholder}>
        <Image source={require('../assets/postimage.png')} style={styles.image} />
      </View>

      {/* User Info */}
      <View style={styles.userContainer}>
        <View style={styles.avatar}>
          <Image source={require('../assets/ologo.png')} style={styles.avatar} />
        </View>
        <View>
          <Text style={styles.username}>Obytes</Text>
          <Text style={styles.description}>20 minutes ago</Text>
        </View>
      </View>

      {/* Action Buttons */}
      <View style={styles.actionBar}>
        <Text style={{ fontSize: 13 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat hendrerit ex.</Text>
      </View>
      <View style={styles.actionBar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F5",
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    width: 350,
    height: 310,
  },
  imagePlaceholder: {
    width: "100%",
    height: 150,
    backgroundColor: "#E0E0E0",
    borderRadius: 10,
    marginBottom: 10,
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#C4C4C4",
    marginRight: 10,
  },
  username: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
  description: {
    fontSize: 12,
    color: "#A3A3A3",
  },
  actionBar: {
    height: 60,
    width: 330,
    paddingLeft: 6,
    paddingRight: 10,
    textAlign: "center",
    borderRadius: 15,
    marginVertical: 5,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
});

export default FeedPost;
