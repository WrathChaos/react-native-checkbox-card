import React from "react";
import { FlatList, StatusBar, SafeAreaView } from "react-native";

import RNCheckboxCard from "./build/dist/RNCheckboxCard";

const staticData = [
  {
    id: 1,
    text: "Banana",
  },
];

const App = () => {
  const renderItem = (data: any) => {
    const { text, id } = data.item;

    return (
      <RNCheckboxCard
        darkMode
        text={text}
        onPress={(checked: boolean) => console.log("Checked: ", checked)}
      />
    );
  };

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
        <FlatList data={staticData} renderItem={renderItem} />
      </SafeAreaView>
    </>
  );
};

export default App;
