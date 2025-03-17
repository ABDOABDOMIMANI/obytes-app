import { StyleSheet, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from "../splash-screen";
import { useEffect, useState } from "react";
import EntryPage from "../app/EntryPage";
import { useRouter } from "expo-router";
import "../global.css"

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Show splash screen for 3 seconds then navigate to EntryPage
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // Cleanup timer
    return () => clearTimeout(timer);
  }, []);

  // Prevent going back once splash screen is done
  useEffect(() => {
    if (!isLoading) {
      router.canGoBack(); // Set to false to prevent going back
    }
  }, [isLoading]);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <SplashScreen />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <EntryPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});