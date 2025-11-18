import React from "react";
import { View, ScrollView, Text, Image, Pressable } from "react-native";
const logo = require("../../assets/adaptive-icon.png");

export default function PressableComponent() {
  return (
    <ScrollView>
      <View style={{ backgroundColor: "plum", padding: 60, flex: 1 }}>
        <Pressable
          onPress={() => console.log("Image Pressed")}
          onPressIn={() => console.log("Imaged pressed in")}
          onLongPress={() => console.log("Image long pressed")}
          onPressOut={() => console.log("Image Pressed out")}
        >
          <Image source={logo} style={{ width: 300, height: 300 }} />
        </Pressable>
        <Pressable
          onPress={() => console.log("Text Pressed")}
          onPressIn={() => console.log("Text pressed in")}
          onLongPress={() => console.log("Text long pressed")}
          onPressOut={() => console.log("Text Pressed out")}
        >
          <Text>
            Lionel Messi is an Argentine professional footballer widely regarded
            as one of the greatest players of all time. Known for his dribbling,
            vision, and goal-scoring, he won numerous titles with FC Barcelona,
            including multiple Champions Leagues and La Liga championships.
            Messi has earned many Ballon d’Or awards and led Argentina to
            victory in the 2021 Copa América and the 2022 FIFA World Cup,
            cementing his legacy as a football legend.
          </Text>
        </Pressable>
        <Image source={logo} style={{ width: 300, height: 300 }} />
      </View>
    </ScrollView>
  );
}
