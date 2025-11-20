import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";

export default function ExampleShadow(){
    return(
        <ScrollView style={styles.container}>
              <View style={[styles.box, styles.lightBlueBg, styles.boxShadow]}>
                {/* borderRadius do not work on text in ios but works on android */}
                <Text style={{ borderRadius: 5, backgroundColor: "red" }}>
                  Light Blue Box
                </Text>
              </View>
              <View style={[styles.box, styles.lightGreenBg, styles.androidShadow]}>
                <Text>Light green Box</Text>
              </View>
            </ScrollView>
    )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "plum", padding: 60 },
  box: {
    width: 250,
    height: 250,
    //padding:20;
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 20,
    borderWidth: 2,
    borderColor: "purple",
    borderRadius: 5,
  },
  lightBlueBg: { backgroundColor: "lightblue" },
  lightGreenBg: { backgroundColor: "lightgreen" },
  boxShadow:{
    shadowColor:"#333333",
    shadowOffset:{width:6, height:6},
    shadowRadius:4,
    shadowOpacity:0.6
  },
  androidShadow:{
    elevation:10
  }
});
