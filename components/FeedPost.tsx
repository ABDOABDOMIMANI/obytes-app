import React from "react";
import { View, Text, Image } from "react-native";
import "../global.css"
interface FeedPostProps {
  id: string | number; // Unique identifier
}

const FeedPost: React.FC<FeedPostProps> = ({ id }) => {
  return (
    <View key={id} className="bg-gray-100 p-4 rounded-lg my-2 w-[350px] h-[310px]">
      {/* Post Image */}
      <View className="w-full h-[150px] bg-gray-300 rounded-lg mb-2">
        <Image source={require('../assets/postimage.png')} className="w-full h-full rounded-lg" />
      </View>

      {/* User Info */}
      <View className="flex-row items-center mb-2">
        <View className="w-[60px] h-[60px] rounded-full bg-gray-400 mr-2">
          <Image source={require('../assets/ologo.png')} className="w-full h-full rounded-full" />
        </View>
        <View>
          <Text className="text-base font-bold text-gray-800">Obytes</Text>
          <Text className="text-sm text-gray-500">20 minutes ago</Text>
        </View>
      </View>

      {/* Action Buttons */}
      <View className="h-[60px] w-[330px] pl-2 pr-3 text-center rounded-xl my-1">
        <Text className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat hendrerit ex.</Text>
      </View>
      <View className="h-[60px] w-[330px] pl-2 pr-3 text-center rounded-xl my-1" />
    </View>
  );
};

export default FeedPost;
