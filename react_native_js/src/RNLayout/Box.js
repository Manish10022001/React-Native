import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
//passed two props to Box, children so that it is directly rendered instead of text and style
export default function Box({children, style}){
    return(
        <View style = {[styles.box, style]}>
            <Text style={styles.text}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    box:{
        backgroundColor:"#fff",
        padding:20
    },
    text:{
        fontSize:24,
        fontWeight:"bold",
        textAlign:"center",
        color:"white"
    }
})