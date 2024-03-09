import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
} from "react-native";
import React from "react";
import { defaultStyle } from "../styles/styles";
import Header from "../components/Header";

const Home = () => {
  return (
    <View style={defaultStyle.defaultStyle}>
      <SafeAreaView>
        <View>
          <Header back={false} />
          <Text style={{ fontSize: 25 }}>Our</Text>
          <Text style={{ fontSize: 25, fontWeight: "800" }}>Products</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
