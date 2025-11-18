import React from "react";
import { View, ScrollView, Text, Image } from "react-native";
const logo = require("../../assets/adaptive-icon.png");
export default function ScrollViewEx() {
  return (
    <ScrollView>
      <View style={{ backgroundColor: "plum", padding: 60, flex: 1 }}>
        <Image source={logo} style={{ width: 300, height: 300 }} />
        <Text>
          Lionel Messi is an Argentine professional footballer widely regarded
          as one of the greatest players of all time. Known for his dribbling,
          vision, and goal-scoring, he won numerous titles with FC Barcelona,
          including multiple Champions Leagues and La Liga championships. Messi
          has earned many Ballon d’Or awards and led Argentina to victory in the
          2021 Copa América and the 2022 FIFA World Cup, cementing his legacy as
          a football legend.
        </Text>
        <Image source={logo} style={{ width: 300, height: 300 }} />
      </View>
    </ScrollView>
  );
}
