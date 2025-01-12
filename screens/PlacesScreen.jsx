import { Pressable, StyleSheet, Text, View, FlatList } from "react-native";
import React, { useContext, useState, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Place } from "../PlaceContext";
import { Searchbar } from "react-native-paper";
import CityCard from "../components/CityCard";

const PlacesScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "",
      headerLeft: () => (
        <Pressable
          onPress={() => navigation.goBack()}
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

  const { selectedCity, setSelectedCity } = useContext(Place);
  console.log(selectedCity);
  const [searchQuery, setSearchQuery] = useState("");

  const cities = [
    {
      id: "1",
      name: "Lucknow",
      image:
        "https://imgs.search.brave.com/9gkRrhP1IugasqoNfy8s8iwOdFAo09PfoKtG881m8Jc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTEz/OTQzNzU5Ny9waG90/by9ydW1pLWdhdGUt/bHVja25vdy5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9NklG/dnFSNUsxLV9mUnI5/aG5rbHJxREVWOVd6/Rnl6dEd6MG50U0x5/eXFDMD0",
    },
    {
      id: "2",
      name: "Bhopal",
      image:
        "https://imgs.search.brave.com/UEGqTQVvddJa43xuqBzg-TGACQvANnOucCRr82YZWM8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGhlaGl0YXZhZGEu/Y29tL0VuY3ljLzIw/MjQvNS8yMi9CaG9w/YWwtUmx5LVN0bi10/by10cmFuc2Zvcm1f/MjAyNDA1MjIxMDU4/NTEwNjU4X0hAQElH/SFRfMzAwX1dAQElE/VEhfNTAwLmpwZw",
    },
    {
      id: "3",
      name: "Delhi",
      image:
        "https://imgs.search.brave.com/XgW4-jQkoklHalBnzW-5NxdGVfyiZAc0nSk6hIJLqeg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudG9paW1nLmNv/bS9waG90by9tc2lk/LTI0MjQ1ODA0LHdp/ZHRoLTk2LGhlaWdo/dC02NS5jbXM",
    },
    {
      id: "4",
      name: "Mumbai",
      image:
        "https://imgs.search.brave.com/4LS4Ge-JlFA7LxQDVdmeBtg0KGoCT_xXuKe1R0-dPws/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9wb3J0LWluZGlh/LWFzaWEtbXVtYmFp/XzI0ODU5LTc1My5q/cGc_c2VtdD1haXNf/aHlicmlk",
    },
    {
      id: "5",
      name: "Chennai",
      image:
        "https://imgs.search.brave.com/j6jktZZDC4DTpgDsIiBpwcKgaocaU_HZ-AZaDA52DMY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE5/NDMyMDc4MC9waG90/by9jaGVubmFpLWNl/bnRyYWwtcmFpbHdh/eS1zdGF0aW9uLXRh/bWlsLW5hZHUtaW5k/aWEuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPWQ1YXpmX0w5/aW1SR2p0ay1pSEsx/LVVTdUp6TEhuM2hm/OFpUdVk2blRPekE9",
    },
    {
      id: "6",
      name: "Bangalore",
      image:
        "https://imgs.search.brave.com/7Rb70ifZS9yujbBejGhrtDXq7FkBRbg65WyR8s3J2Sg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzY4LzA1Lzg4/LzM2MF9GXzI2ODA1/ODg1Ml9XZnlKNlp5/d3pCVlRMb2VqaW9C/cWpVY2J0eXFtOEtr/Vi5qcGc",
    },
    {
      id: "7",
      name: "Hyderbad",
      image:
        "https://imgs.search.brave.com/KbAEiCbfBK7yv_NYtliFlFdA_940t7t-GburkacFNrs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzYwLzg5LzA5/LzM2MF9GXzM2MDg5/MDk5MV9Za3liajVK/TzVIWUJhcVdlUk96/OWNSMmpXWE44SFp4/Zi5qcGc",
    },
  ];

  return (
    <View

      style={{
        // flex: 1,
       paddingHorizontal: 8,
        backgroundColor: "#f5f5f5",
      }}
    >
      <Searchbar
        mode="view"
        placeholder="Search Your City"
        onChangeText={setSearchQuery}
        theme={{
          roundness: 16,
        }}
      />
      <Text
        style={{
          fontSize: 16,
          fontWeight: "semibold",
          paddingHorizontal: 16,
          marginTop: 16,
        }}
      >
        Select Your City
      </Text>

      <FlatList
      columnWrapperStyle={{ justifyContent: "space-between" }}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        data={cities}
        keyExtractor={(item) => item.id} 
        renderItem={({ item }) => <CityCard city={item} />}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

export default PlacesScreen;

const styles = StyleSheet.create({
  list: {
    padding: 0,
  },
});
