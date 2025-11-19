import React from "react";
import { View, ActivityIndicator } from "react-native";

export default function ActivityIndicatorComponent() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <ActivityIndicator size="large" />
      <ActivityIndicator size="large" color="midnightblue" />
      <ActivityIndicator size="large" color="green" animating={false} /> {/*visibility false,  */}
    </View>
  );
}
