import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  TouchableOpacity,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import { Avatar, Button } from "react-native-paper";
import { colors } from "../styles/styles";

// Components import
import SearchBarComponent from "../components/SearchBarComponent";
//

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState();
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([
    {
      _id: "1",
      price: 280,
      name: "Sample1",
      images: [require("../assets/headphone.jpg")],
    },
    {
      _id: "2",
      price: 280,
      name: "Sample2",
      images: [require("../assets/headphone.jpg")],
    },
  ]);
  const categories = [
    { category: "Electronics", _id: "1" },
    { category: "Men", _id: "2" },
    { category: "Women", _id: "3" },
    { category: "Household", _id: "4" },
    { category: "Books", _id: "5" },
  ];
  return (
    <>
      {searchVisible && (
        <SearchBarComponent
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          searchVisible={setSearchVisible}
          products={products}
        />
      )}
      <View style={defaultStyle.defaultStyle}>
        <SafeAreaView>
          <Header back={false} />
          <View style={styles.headingAndSearchContainer}>
            <View>
              <Text style={{ fontSize: 28 }}>Our</Text>
              <Text style={{ fontSize: 28, fontWeight: "800" }}>Products</Text>
            </View>
            <View style={styles.searchIconContainer}>
              <TouchableOpacity
                onPress={() => {
                  setSearchVisible((prev) => !prev);
                }}
              >
                <Avatar.Icon
                  icon="magnify"
                  size={50}
                  color={"black"}
                  style={{
                    backgroundColor: colors.color4,
                    elevation: 12,
                    borderRadius: 20,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <ScrollView
            contentContainerStyle={{
              marginTop: 30,
              marginLeft: 1,
              padding: 5,
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              gap: 13,
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {categories.map((item, index) => (
              <Button
                key={item._id}
                mode="elevated"
                buttonColor={
                  selectedCategory === item._id ? "gray" : colors.color5
                }
                onPress={() => {
                  if (selectedCategory !== item._id) {
                    setSelectedCategory(item._id);
                  } else {
                    setSelectedCategory();
                  }
                }}
              >
                <Text
                  style={{
                    color: selectedCategory === item._id ? "white" : "black",
                    fontWeight: selectedCategory === item._id ? "bold" : null,
                  }}
                >
                  {item.category}
                </Text>
              </Button>
            ))}
          </ScrollView>
        </SafeAreaView>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  headingAndSearchContainer: {
    marginTop: 80,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  searchIconContainer: {
    borderRadius: 32,
    backgroundColor: "#f0f4f7",
    elevation: 12,
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    opacity: 0.6,
    alignItems: "center",
  },
});
