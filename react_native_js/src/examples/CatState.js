import React, { useState } from "react";
import { View, Text, Button } from "react-native";

export function Cafe(props) {
  const [isHungry, setIsHungry] = useState(true);

  return (
    <View>
      <Text>
        I am {props.name} and I am {isHungry ? "hungry" : "full"}
      </Text>
      <Button
        onPress={() => {
          setIsHungry(false);
        }}
        disabled={!isHungry}
        title={isHungry ? "Give me some Food, please" : "I am full"}
      />
    </View>
  );
}

export default function CatState() {
  return (
    <View>
      <Cafe name="oppo" />
      <Cafe name="UTF" />
    </View>
  );
}
