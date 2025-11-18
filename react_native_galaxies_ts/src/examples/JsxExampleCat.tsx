import React from "react";
import { Text } from "react-native";
const getFullName = (
  firstName: string,
  secondName: string,
  thirdName: string
) => {
  return `${firstName} ${secondName} ${thirdName}`;
};
export default function JsxExampleCat() {
  return <Text>Hi, Hello from {getFullName("rum", "tum", "tummer")}!</Text>;
}
