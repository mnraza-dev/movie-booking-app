import { Animated, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Place } from "../PlaceContext";

const HomeScreen = () => {
  const navigation = useNavigation();
  const moveAnimations = new Animated.Value(0);
  const {selectedCity, setSelectedCity} = useContext(Place);

  useEffect(() => {
    Animated.loop(
      Animated.timing(moveAnimations, {
        toValue: -11,
        duration: 3000,
        useNativeDriver: false,
      })
    ).start();
  }, [moveAnimations]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <Text>Hello, MN Raza !</Text>,
      headerRight: () => (
        <Pressable
          style={{
            flexDirection: "row",
            gap: 4,
            alignItems: "center",
          }}
        >
          <Ionicons name="notifications-outline" size={24} color="black" />
          <Ionicons
            onPress={() => navigation.navigate("Places")}
            name="location-outline"
            size={24}
            color="black"
          />
          <Pressable onPress={() => navigation.navigate("Places")}>
            <Animated.Text
              style={[
                styles.text,
                { transform: [{ translateX: moveAnimations }] },
              ]}
            >
              <Text>{selectedCity}</Text>
            </Animated.Text>
          </Pressable>
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
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    color: "black",
  },
});
