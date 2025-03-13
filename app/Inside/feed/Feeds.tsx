import React, { useState } from "react";
import { View, ScrollView, Image, StyleSheet } from "react-native";
import FeedPost from "../../../components/FeedPost";

const Feeds = () => {
  // Simulate feed data (empty array for now)
  const [feedData, setFeedData] = useState([
    <FeedPost  id={1} key={1}/>,
    <FeedPost  id={2} key={2}/>,
    <FeedPost  id={3} key={3}/>,
    <FeedPost  id={4} key={4}/>,
    <FeedPost  id={5} key={5}/>,
    <FeedPost  id={6} key={6}/>,
    <FeedPost  id={7} key={7}/>,


  ]);

  return (
    <View style={styles.container}>
      {feedData.length === 0 ? (
        <View style={styles.imageContainer}>
          <Image 
            source={require("../../../assets/nopost.png")} // Adjust path if needed
            style={styles.image}
            resizeMode="contain"
          />
        </View>
      ) : (
        <ScrollView style={styles.feedContainer} showsVerticalScrollIndicator={false}>
          {feedData}
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
