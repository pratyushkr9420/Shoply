import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Searchbar, Headline } from "react-native-paper";
import { colors } from "../styles/styles";
import { useNavigation } from "@react-navigation/native";

const SearchBarComponent = ({
  searchQuery = "",
  setSearchQuery,
  searchVisible,
  products,
}) => {
  const navigate = useNavigation();
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        top: 60,
        position: "absolute",
        zIndex: 100,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        paddingHorizontal: 30,
        backgroundColor: colors.color2,
      }}
    >
      <SafeAreaView>
        <Searchbar
          value={searchQuery}
          mode="bar"
          onChangeText={(text) => setSearchQuery(text)}
          style={styles.searchBar}
        />
        <ScrollView>
          <View style={{ marginTop: 20 }}>
            {products.map((product, index) => (
              <TouchableOpacity
                key={product._id}
                onPress={() =>
                  navigate.navigate("productDetails", { id: product._id })
                }
              >
                <View
                  style={{
                    marginVertical: 10,
                    paddingHorizontal: 10,
                    borderRadius: 15,
                    backgroundColor: colors.color2,
                    elevation: 10,
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <Image
                    style={{ width: 100, height: 100, resizeMode: "contain" }}
                    source={product.images[0]}
                  />
                  <View>
                    <Text numberOfLines={1}>{product.name}</Text>
                    <Headline style={{ fontWeight: "bold" }}>
                      ${product.price}
                    </Headline>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default SearchBarComponent;

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: colors.color6,
  },
});
