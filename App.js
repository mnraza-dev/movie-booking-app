import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./navigation/StackNavigator";
import { PlaceContext } from "./PlaceContext";
export default function App() {
  return (
    <PlaceContext>
      <Navigation />

      <StatusBar style="light" backgroundColor="teal" />
    </PlaceContext>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
