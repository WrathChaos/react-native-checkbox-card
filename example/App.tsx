import React from "react";
import { View, Text, FlatList, StatusBar, SafeAreaView } from "react-native";
import RNCheckboxCard from "react-native-checkbox-card";

const staticData = [
  {
    id: 1,
    text: "Banana",
    quantity: "(2)",
  },
  {
    id: 2,
    text: "Apple",
    quantity: "(3)",
  },
  {
    id: 3,
    text: "Red wine",
    quantity: "x1",
  },
  {
    id: 4,
    text: "Egg",
    quantity: "x12",
  },
  {
    id: 5,
    text: "Flour",
    quantity: "1 pack",
  },

  {
    id: 6,
    text: "Butter",
    quantity: "1 whole",
  },
  {
    id: 7,
    text: "Brown rise",
    quantity: "2 kg",
  },
  {
    id: 8,
    text: "Tomato sauce",
    quantity: "x2",
  },
];

const App = () => {
  const renderItem = (data: any) => {
    const { text, quantity, id } = data.item;

    return (
      <View style={{ marginTop: 16 }}>
        <RNCheckboxCard
          darkMode
          text={text}
          quantity={quantity}
          enableQuantityText
          rightIconComponent={<View />}
          onPress={(checked: boolean) => console.log("Checked: ", checked)}
        />
      </View>
    );
  };

  const renderHeader = () => (
    <View style={{ marginLeft: 24 }}>
      <Text style={{ fontSize: 32, color: "#fff", fontWeight: "600" }}>
        Shopping List
      </Text>
      <Text style={{ color: "#818181", fontSize: 16 }}>
        Your daily shopping list
      </Text>
    </View>
  );

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: "center",
          backgroundColor: "#19191a",
        }}
      >
        {renderHeader()}
        <FlatList
          data={staticData}
          style={{ marginTop: 24 }}
          renderItem={renderItem}
        />
      </SafeAreaView>
    </>
  );
};

export default App;
