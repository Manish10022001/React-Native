import { Link, useNavigation } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { View, Text } from "react-native";
//create routee for setting page, eg. localhost:8081/setting
export default function Setting() {
  const navigate = useNavigation();
  useEffect(() => {
    navigate.setOptions({
      headerStyle: {
        backgroundColor: "yellowgreen",
      },
      headerTintColor: "red",
    });
  });
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Setting page</Text>
      <StatusBar style="auto" />
      <Link href={{ pathname: "./details" }}>Go to details page</Link>
    </View>
  );
}
