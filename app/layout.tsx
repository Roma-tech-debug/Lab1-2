import { Stack } from "expo-router";
import { View } from "react-native";

export default function Layout() {
  return (
    <View>
      <Stack.Screen name="home" component={HomeScreen} />
    </View>
  );
}

function HomeScreen() {
  return (
    <View>
      {/* Your HomeScreen content */}
    </View>
  );
}
