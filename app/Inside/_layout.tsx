import { Tabs } from "expo-router";
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';
import { StyleProp, TextStyle } from 'react-native';

// Define a type for the tab icon props
type TabIconProps = {
  color: string;
  size?: number;
};

// Helper function to render icons consistently
const renderIcon = (IconComponent: React.ComponentType<any>, name: string) => {
  return ({ color, size = 24 }: TabIconProps) => (
    <IconComponent name={name} size={size} color={color} />
  );
};

export default function Layout() {
  return (
    <Tabs
  screenOptions={{
    tabBarActiveTintColor: '#FF6C00', // Active tab color
    tabBarInactiveTintColor: 'gray', // Inactive tab color
    tabBarLabelStyle: { 
      fontSize: 13, 
      fontWeight: 'bold', 
      marginBottom: -10, 
    } as StyleProp<TextStyle>, // Tab label style

    headerStyle: { 
      elevation: 0, // Remove shadow on Android
      shadowOpacity: 0, // Remove shadow on iOS
      borderBottomWidth: 0, // Remove bottom border line
       // Optional: Make header background transparent
    },

    headerTitleAlign: "left", // Align title to the left
    headerTitleStyle: {
      fontSize: 24, // Set header title size
      fontWeight: "500", // Optional: Make it bold
    },

    tabBarStyle: {
      position: "absolute", // Keep it floating
      bottom: 0, // Move the tab bar 30px from the bottom
      left: 20, // Optional: Adjust left padding
      right: 20, // Optional: Adjust right padding
      borderRadius: 20, // Optional: Add rounded corners
      height: 60, // Adjust tab bar height
      backgroundColor: "#fff", // Background color of the tab bar
      shadowColor: "transparent", // Ensure no shadow is visible
      // Remove Android shadow
      // Remove iOS shadow
      paddingTop: 10,
    },
  }}
>


      <Tabs.Screen
        name="styles/Styles"
        options={{
          title: "Styles",
          tabBarIcon: renderIcon(Feather, "home"),
        }}
      />
      <Tabs.Screen
        name="feed/Feeds"
        options={{
          title: "Feed",
          tabBarIcon: renderIcon(Entypo, "news"),
        }}
      />
      <Tabs.Screen
        name="settings/Settings"
        options={{
          title: "Settings",
          tabBarIcon: renderIcon(Entypo, "cog"),
        }}
        
      />
    </Tabs>
  );
}
