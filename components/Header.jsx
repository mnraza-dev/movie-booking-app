import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

const Header = () => {
  return (
    <View
      style={{
        marginBottom: 60,
      }}
    >
      <ImageBackground
        resizeMode="cover"
        style={{ width: "100%", height: 200 }}
        source={{
          uri: "https://m.media-amazon.com/images/M/MV5BNzBiMmQ5YzItOTBmYS00YWY2LWIyMjMtNjZjMDY3MDNhYzE4XkEyXkFqcGc@._V1_FMjpg_UX632_.jpg",
        }}
      >
        <Pressable
          style={{
            backgroundColor: "#fff",
            height: 100,
            padding: 16,
            borderRadius: 10,
            width: "80%",
            margin: "auto",
            shadowColor: "#000",
            shadowOpacity: 0.8,
            elevation: 10,
            marginTop: 150,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View
              style={{
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Text>Releasing in 1 Day</Text>
              <Text>Custody</Text>
              <Text>UA . Telugu</Text>
            </View>

            <Pressable
              style={{
                backgroundColor: "orange",
                padding: 8,
                borderRadius: 5,
                marginTop: 14,
                alignItems: "center",
                position: "absolute",
                right: 10,
              }}
            >
              <Text
                style={{
                  fontWeight: 400,
                }}
              >
                Book Now
              </Text>
            </Pressable>
          </View>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
