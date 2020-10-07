import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from "react-native";

import RNCheckboxCard from "./lib/RNCheckboxCard";

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#19191a",
        }}
      >
        <RNCheckboxCard
          onPress={(checked: boolean) => console.log("Checked: ", checked)}
        />
      </SafeAreaView>
    </>
  );
};

export default App;
