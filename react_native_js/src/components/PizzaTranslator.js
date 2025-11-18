// Handling Input Text
//Hello there Bob" would be translated as "🍕 🍕 🍕".

import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";

export default function PizzaTranslator() {
  const [text, setText] = useState("");
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <TextInput
        placeholder="Type here to translate!"
        onChangeText={(newText) => setText(newText)}
        style={{
          height: 40,
          padding: 5,
          marginHorizontal: 8,
          borderWidth: 1,
        }}
      />
      <Text style={{ padding: 5, fontSize: 42 }}>
        {text
          .split(" ")
          .map((word) => word && "🍕")
          .join(" ")}
      </Text>
    </View>
  );
}
