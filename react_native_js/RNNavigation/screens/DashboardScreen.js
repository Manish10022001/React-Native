import {View, Text, StyleSheet, Button} from "react-native";
import {useNavigation} from "@react-navigation/native"


export default function DashboardScreen({navigation}){  //2.1
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Dashboard</Text>
            <Button title="Got to Setting" onPress={()=>navigation.toggleDrawer()}/>
            <Button title="Settings" onPress={()=>navigation.jumpTo("Setting")}/>
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