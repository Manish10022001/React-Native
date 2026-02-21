import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
//create routee for setting page, eg. localhost:8081/setting
export default function Setting(){
    return(
        <View style={{
            flex:1,
            justifyContent:"center",
            alignItems:"center"
        }}>
            <Text>Setting page</Text>
            <StatusBar style="auto"/>
            <Link href={{pathname:"./details"}}>Go to details page</Link>
        </View>
    )
}