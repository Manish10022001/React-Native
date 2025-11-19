import React from "react";
import { View, Button, Alert } from "react-native";

export default function AlertComponent() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Button title="Alert" onPress={() => Alert.alert("Invalid")} />
      <Button
        title="Alert"
        onPress={() =>
          Alert.alert("Invalid message", "Please press again", [
            {
              text: "cancel",
              onPress: () => console.log("cancel pressed"),
            },
            {
              text: "ok",
              onPress: () => console.log("Ok pressed"),
            },
          ])
        }
      />
    </View>
  );
}
