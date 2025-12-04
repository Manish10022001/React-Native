import {View, Text, StyleSheet, Button} from "react-native";
import {useNavigation} from "@react-navigation/native"
export default function AboutScreen({route, navigation}){ //3.1 {route} //3.3{navigation}
    // const navigation = useNavigation(); //2.2
    const {name} = route.params;
    return(
        <View style={styles.container}>
            <Text style={styles.text}>About {name}</Text>
            {/* <Button title="Go to Home" onPress={()=>navigation.navigate("Home")}/> */}

            {/* 3.3 */}
            <Button title="Update the Name" 
                    onPress={()=>navigation.setParams({name:"react native"})}
            />

            {/* 3.4.1: Send Data back to the screen */}
            <Button 
                title="Go back with data"
                onPress={()=> navigation.navigate("Home",{result:"Data from About"})}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    text:{
        fontSize:24,
        fontWeight:"bold",
        marginBottom:16,
    }
})