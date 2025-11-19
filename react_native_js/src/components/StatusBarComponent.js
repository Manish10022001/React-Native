import React from "react";
import { View, StatusBar } from "react-native";

export default function StatusBarComponent() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      {/* statusbar has paramerters like backgroundColor and barStyle i.e text color and hidden if we do not want to see it*/}
      <StatusBar backgroundColor="lightgreen" barStyle="light-content" />
    </View>
  );
}
