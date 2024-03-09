import { StyleSheet, Platform, StatusBar } from "react-native";

// #0e8fe6

// original color: #c70049

export const colors = {
  colors1: "#0e8fe6",
  color1_light: "rgba(227,25,99)",
  color1_light2: "rgba(199,0,73,0.8)",
  color2: "white",
  color3: "rgb(45,45,45)",
  color4: "transparent",
  color5: "#f2f2f2",
  color6: "#f7f7f7",
};

export const defaultStyle = StyleSheet.create({
  defaultStyle: {
    padding: 40,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: colors.color2,
  },
});

export const inputStyling = StyleSheet.create({
  inputStyling: {
    height: 50,
    marginVertical: 10,
    marginHorizontal: 20,
    backgroundColor: colors.color2,
  },
});
