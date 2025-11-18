import React from "react";
import { View, Text } from "react-native";

function Cat(props) {
  return (
    <View>
      <Text>Hello, I am {props.name}</Text>
    </View>
  );
}
export default function CatProps() {
  return (
    <View>
      <Cat name="akash" />
      <Cat name="ajinkya" />
      <Cat name="nano" />
    </View>
  );
}
