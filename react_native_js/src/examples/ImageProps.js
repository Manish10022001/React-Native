import React from "react";
import { View, Image, Text } from "react-native";

export default function ImageProps() {
  return (
    <View>
      <Image
        source={{ uri: "https://reactnative.dev/docs/assets/p_cat1.png" }}
        style={{ width: 200, height: 200 }}
      />
      <Text>Hi! I am your cat.</Text>
    </View>
  );
}
