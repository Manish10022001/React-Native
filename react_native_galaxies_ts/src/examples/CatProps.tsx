import React from "react";
import { Text, View } from "react-native";

type CatProp = {
  name: string;
};

function Cat(props: CatProp) {
  return (
    <View>
      <Text>Hi I am {props.name}</Text>
    </View>
  );
}

export default function CatProps() {
  return (
    <View>
      <Cat name="Ajinkya" />
      <Cat name="Akash" />
      <Cat name="Nano" />
    </View>
  );
}
