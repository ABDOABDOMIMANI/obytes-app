import React, { useState } from "react";
import { View, ScrollView, Image } from "react-native";
import FeedPost from "../../components/FeedPost";

const Feeds = () => {
  // Simulate feed data (empty array for now)
  const [feedData, setFeedData] = useState(
    Array.from({ length: 200 }, (_, index) => index + 1)
  );

  return (
    <View className="flex-1 items-center p-5 bg-white">
      {feedData.length === 0 ? (
        <View className="flex-1 justify-center items-center">
          <Image
            source={require("../../assets/nopost.png")} // Adjust path if needed
            className="w-[350px] h-[350px] mt-[-250px]"
            resizeMode="contain"
          />
        </View>
      ) : (
        <ScrollView
          className="w-full mt-[-10px]"
          showsVerticalScrollIndicator={false}
        >
          {feedData.map((item) => (
            <FeedPost id={item} key={item} />
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default Feeds;