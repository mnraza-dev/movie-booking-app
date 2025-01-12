import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const MovieCard = ({ item }) => {
  return (
    <View style={styles.card}>
      <Image
        style={styles.poster}
        source={{
          uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`, // Correct URL construction
        }}
      />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.releaseDate}>{item.release_date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: 250,
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

export default MovieCard;
