import React from "react";
import { ScrollView, View, Text, Image, TextInput } from "react-native";

export default function One() {
  return (
    <ScrollView>
      <Text>Some Text</Text>
      <View>
        <Text>Some more text</Text>
        <Image
          source={{ uri: "https://reactnative.dev/docs/assets/p_cat2.png" }}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <TextInput
        style={{ height: 40, borderColor:"blue", borderWidth: 1 }}
        defaultValue="Enter some text"
      />
    </ScrollView>
  );
}
