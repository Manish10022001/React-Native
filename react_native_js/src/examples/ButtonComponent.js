import React from "react";
import { View, Button } from "react-native";

export default function ButtonComponent() {
  return (
    <View style={{ backgroundColor: "plum", padding: 60, flex: 1 }}>
      <Button
        title="Click me"
        onPress={() => console.log("I am clicked")}
        color="blue"
      />
    </View>
  );
}
