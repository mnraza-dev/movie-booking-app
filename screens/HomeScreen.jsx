import {
  Animated,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useContext, useEffect, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Place } from "../PlaceContext";
// import movieData from "../movieData";
import MovieCard from "../components/MovieCard";

const HomeScreen = () => {
  const navigation = useNavigation();
  const moveAnimations = new Animated.Value(0);
  const { selectedCity, setSelectedCity } = useContext(Place);

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

  const data = [
    {
      id: 299534,
      title: "Avengers: Endgame",
      release_date: "2019-04-26",
      poster_path: "/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
      overview:
        "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once again in order to reverse Thanos' actions and restore balance to the universe.",
      vote_average: 8.3,
    },
    {
      id: 67890,
      title: "Inception",
      release_date: "2010-07-16",
      poster_path: "/8ZTVqvKDQ8emSGUEMjsS4yHAwrp.jpg",
      overview:
        "Cobb, a thief who enters the dreams of others to steal secrets from their subconscious, is given a chance to have his criminal record erased if he can successfully perform an inception: planting an idea into a target's subconscious.",
      vote_average: 8.8,
    },
    {
      id: 112233,
      title: "The Dark Knight",
      release_date: "2008-07-18",
      poster_path: "/nMKdUUepR0i5zn0y1T4CsSB5chy.jpg",
      overview:
        "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham, forcing Bruce Wayne to come out of retirement and fight for justice.",
      vote_average: 9.0,
    },
    {
      id: 445566,
      title: "The Matrix",
      release_date: "1999-03-31",
      poster_path: "/oMsxZEvz9a708d49b6UdZK1KAo5.jpg",
      overview:
        "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
      vote_average: 8.7,
    },
    {
      id: 789012,
      title: "Interstellar",
      release_date: "2014-11-07",
      poster_path: "/pbrkL804c8yAv3zBZR4QPEafpAR.jpg",
      overview:
        "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      vote_average: 8.6,
    },
    {
      id: 345678,
      title: "The Lord of the Rings: The Return of the King",
      release_date: "2003-12-17",
      poster_path: "/2u7zbn8EudG6kLlBzUYqP8RyFU4.jpg",
      overview:
        "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
      vote_average: 8.9,
    },
  ];

  const renderItem = ({ item }) => (
   <MovieCard item={item} />
  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "black",
  },
  card: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
  },
  poster: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  releaseDate: {
    marginTop: 5,
    fontSize: 14,
    color: "#555",
  },
});

export default HomeScreen;
