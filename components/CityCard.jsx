import { ImageBackground, Pressable, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

const CityCard = ({ city }) => (
  <Pressable onPress={() => {}}>
    <ImageBackground
      imageStyle={{ borderRadius: 10 }}
      source={{ uri: city.image }}
      style={styles.card}
    >
      <View style={styles.overlay}>
        <Text style={styles.cityName}>{city.name}</Text>
      </View>
    </ImageBackground>
  </Pressable>
);

const styles = StyleSheet.create({
 

  card: {
    flex: 1,
    width: 168,
    margin: 10,
    height: 120, // Fixed height for visibility
    borderRadius: 10,
    overflow: "hidden", // Ensures image stays within rounded corners
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent overlay
  },
  cityName: {
    position: "absolute",
    bottom: 10,
    color: "white",
    fontSize: 16,
    fontWeight: "semibold",
    textAlign: "center",
  },
});
export default CityCard;
