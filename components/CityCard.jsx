import { useNavigation } from "@react-navigation/native";
import { ImageBackground, Pressable, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import AntDesign from "@expo/vector-icons/AntDesign";
const CityCard = ({ city, selectedCity, setSelectedCity }) => {
  const navigation = useNavigation();

  const selectCity = (cityName) => {
    setSelectedCity(cityName);
    setTimeout(() => {
      navigation.push("HomeScreen");
    }, 800);
  };

  return (
    <Pressable onPress={() => selectCity(city.name)}>
      <ImageBackground
        imageStyle={{ borderRadius: 10 }}
        source={{ uri: city.image }}
        style={styles.card}
      >
        <View style={styles.overlay}>
          {selectedCity === city.name && (
            <View
              style={{
                position: "absolute",
                top: 10,
                left: 20,
              }}
            >
              <AntDesign
                name="checkcircleo"
                size={28}
                color="white"
                style={{
                  color: "white",
                }}
              />
            </View>
          )}
          <Text style={styles.cityName}>{city.name}</Text>
        </View>
      </ImageBackground>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  card: {
    flex: 1,
    width: 168,
    margin: 10,
    height: 120,
    borderRadius: 10,
    overflow: "hidden",
    opacity: 0.9,
  },

  cityName: {
    position: "absolute",
    bottom: 10,
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});

export default CityCard;
