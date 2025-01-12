import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";

const PlacesScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "",
      headerLeft: () => (
        <Pressable
          style={{
            flexDirection: "row",
            gap: 14,
            alignItems: "center",
          }}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
          <Text style={{ color: "black", fontSize: 16, letterSpacing: 1 }}>
            CHANGE LOCATION
          </Text>
        </Pressable>
      ),

      headerStyle: {
        backgroundColor: "#f5f5f5",
        shadowColor: "transparent",
        shadowOpacity: 0.5,
        shadowOffset: { height: 1, width: -1 },
        shadowRadius: 3,
      },
      headerTitleStyle: { color: "white" },
    });
  }, []);
  return (
    <View>
      <Text>PlacesScreen</Text>
    </View>
  );
};

export default PlacesScreen;

const styles = StyleSheet.create({});
