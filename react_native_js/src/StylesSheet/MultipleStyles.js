import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

export default function MultipleStyles() {
  return (
    <ScrollView style={styles.container}>
      <View style={[styles.box, styles.lightBlueBg]}>
        <Text>Light Blue Box</Text>
      </View>
      <View style={[styles.box, styles.lightGreenBg]}>
        <Text>Light green Box</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "plum", padding: 60 },
  box: { width: 100, height: 100, padding: 20 },
  lightBlueBg: { backgroundColor: "blue" },
  lightGreenBg: { backgroundColor: "green" },
});
