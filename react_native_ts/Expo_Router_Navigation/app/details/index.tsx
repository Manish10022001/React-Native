import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
//create route for details page eg. localhost:8081/details
export default function Details(){
    return(
        <View style={{
            flex:1,
            justifyContent:"center",
            alignItems:"center"
        }}>
            <Text>Details Page</Text>
            <StatusBar style="auto"/>
            <Link href={{pathname:"/"}}>Go home</Link>
        </View>
    )
}