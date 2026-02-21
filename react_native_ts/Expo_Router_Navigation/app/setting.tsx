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
        </View>
    )
}