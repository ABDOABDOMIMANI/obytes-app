import { Tabs } from "expo-router";
import { useRouter } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Alert, TouchableOpacity } from "react-native";

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

// Logout confirmation function
const confirmLogout = (router: any) => {
  Alert.alert(
    "Confirm Logout",
    "Are you sure you want to log out?",
    [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Yes, Logout",
        style: "destructive",
        onPress: () => router.push("../../../EntryPage"),
      },
    ]
  );
};

export default function Layout() {
  const router = useRouter(); // Initialize router

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#FF6C00", // Active tab color
        tabBarInactiveTintColor: "gray", // Inactive tab color
        tabBarLabelStyle: {
          fontSize: 13,
          fontWeight: "bold",
          marginBottom: -10,
        }, // Tab label style

        headerStyle: {
          elevation: 0, // Remove shadow on Android
          shadowOpacity: 0, // Remove shadow on iOS
          borderBottomWidth: 0, // Remove bottom border line
        },

        headerTitleAlign: "left", // Align title to the left
        headerTitleStyle: {
          fontSize: 24, // Set header title size
          fontWeight: "500", // Optional: Make it bold
        },

        tabBarStyle: {
          position: "absolute", // Keep it floating
          bottom: 0,
          left: 20,
          right: 20,
          borderRadius: 20,
          height: 60,
          backgroundColor: "#fff",
          shadowColor: "transparent",
          paddingTop: 10,
        },
      }}
    >
      {/* Styles Tab */}
      <Tabs.Screen
        name="Styles"
        options={{
          title: "Styles",
          tabBarIcon: renderIcon(Feather, "home"),
          headerRight: () => (
            <TouchableOpacity onPress={() => confirmLogout(router)}>
              <MaterialIcons
                name="logout"
                size={30}
                color="#FF6C00"
                className="mr-7"
              />
            </TouchableOpacity>
          ),
        }}
      />

      {/* Feeds Tab */}
      <Tabs.Screen
        name="Feeds"
        options={{
          title: "Feed",
          tabBarIcon: renderIcon(Entypo, "news"),
          headerRight: () => (
            <TouchableOpacity onPress={() => confirmLogout(router)}>
              <MaterialIcons
                name="logout"
                size={30}
                color="#FF6C00"
                className="mr-7"
              />
            </TouchableOpacity>
          ),
        }}
      />

      {/* Settings Tab */}
      <Tabs.Screen
        name="Settings"
        options={{
          title: "Settings",
          tabBarIcon: renderIcon(Entypo, "cog"),
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.push("../../EntryPage")}>
              <AntDesign
                name="arrowleft"
                size={26}
                color="black"
                className="ml-4 mr-5"
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => confirmLogout(router)}>
              <MaterialIcons
                name="logout"
                size={30}
                color="#FF6C00"
                className="mr-7"
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Tabs>
  );
}