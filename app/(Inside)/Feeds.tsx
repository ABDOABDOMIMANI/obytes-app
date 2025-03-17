import React, { useState } from "react";
import { View, ScrollView, Image, StyleSheet } from "react-native";
import FeedPost from "../../components/FeedPost";

const Feeds = () => {
  // Simulate feed data (empty array for now)
  const [feedData, setFeedData] = useState(Array.from({ length: 200 }, (_, index) => index + 1));

  return (
    <View style={styles.container}>
      {feedData.length === 0 ? (
        <View style={styles.imageContainer}>
          <Image 
            source={require("../../assets/nopost.png")} // Adjust path if needed
            style={styles.image}
            resizeMode="contain"
          />
        </View>
      ) : (
        <ScrollView style={styles.feedContainer} showsVerticalScrollIndicator={false}>
          {feedData.map((item) => (
            <FeedPost id={item} key={item} />
          ))}
        </ScrollView>
      )}
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
  feedContainer: {
    marginTop: -10,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    marginTop: -250,
    width: 350, // Adjust size as needed
    height: 350,
  },
});

export default Feeds;
