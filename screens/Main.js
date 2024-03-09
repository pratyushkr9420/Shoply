import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Platform,
} from "react-native";
import React from "react";

const Main = () => {
  return (
    <View
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <SafeAreaView>
        <Text>This is React Native</Text>
      </SafeAreaView>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({});
