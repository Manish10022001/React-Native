import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function BoxModel() {
  return (
    <ScrollView style={styles.container}>
      <View style={[styles.box, styles.lightBlueBg]}>
        {/* borderRadius do not work on text in ios but works on android */}
        <Text style={{ borderRadius: 5, backgroundColor: "red" }}>
          Light Blue Box
        </Text>
      </View>
      <View style={[styles.box, styles.lightGreenBg]}>
        <Text>Light green Box</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "plum", padding: 60 },
  box: {
    width: 100,
    height: 100,
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
});
