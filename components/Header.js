import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Avatar } from "react-native-paper";
import { colors } from "../styles/styles";
import { useNavigation, useRoute } from "@react-navigation/native";

const Header = ({ back, isCartEmpty = false }) => {
  const navigate = useNavigation();
  const route = useRoute();

  const handleEmptyCart = () => {
    console.log("Empty cart");
  };

  return (
    <>
      {back && (
        <TouchableOpacity
          style={{
            position: "absolute",
            top: 10,
            left: 0,
          }}
        >
          <Avatar.Icon
            style={{ backgroundColor: colors.color4 }}
            icon="arrow-left"
            size={70}
            color={colors.color3}
          />
        </TouchableOpacity>
      )}
      <TouchableOpacity
        style={{
          position: "absolute",
          top: 50,
          right: 0,
        }}
        onPress={
          isCartEmpty ? handleEmptyCart : () => navigate.navigate("cart")
        }
      >
        <Avatar.Icon
          style={{ backgroundColor: colors.color4 }}
          icon={"cart-outline"}
          size={70}
          color={
            isCartEmpty
              ? colors.color4
              : route.name === "productdetails"
              ? colors.color2
              : colors.color3
          }
        />
      </TouchableOpacity>
    </>
  );
};

export default Header;
