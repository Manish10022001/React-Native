import React from "react";
import { ScrollView, View, Text } from "react-native";

const getFullName = (firstName, secondName, thirdName) => {
  return firstName + " " + secondName + " " + thirdName;
};
export default function JsxExampleCat() {
  return <Text>Hello I am {getFullName("rum", "tum", "tugger")}</Text>;
}
