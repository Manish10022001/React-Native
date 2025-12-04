import {View, Text, StyleSheet, Button} from "react-native";

export default function HomeScreen({navigation, route}){ //2.navigation prop //3.4.2 {route}
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Home Screen</Text>
            {/* 3.4.3 text component which renders result */}
            <Text style={styles.text}>{route.params?.result}</Text>
            <Button title="Go to About" onPress={()=>navigation.navigate("About",{
               name:"Manish" //3.1 //also in 5.1
            })}/>
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