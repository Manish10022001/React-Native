import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function Test(){
    return(
        <View>
            <Text>Test page</Text>
            <Link href={{pathname:"/"}}>Go Home</Link>
        </View>
    )
}