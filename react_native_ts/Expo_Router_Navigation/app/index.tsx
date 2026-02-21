import { Text, View } from "react-native";
import {StatusBar} from "expo-status-bar"
import { Link } from "expo-router";
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Index Page</Text>
      <StatusBar style="auto"/>
      <Link href={"/setting"}>Go to settings</Link>
    </View>
  );
}
