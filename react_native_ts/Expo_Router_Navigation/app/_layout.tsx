import { Stack } from "expo-router";
import { Button, Pressable, Text } from "react-native";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: "red",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        // to customize back button in header globally, use headerLeft in which render custom component
        headerLeft: () => (
          //   <Button
          //     title="Back"
          //     color={"blue"}
          //     //need to give prop navigation to set condition to go back
          //     onPress={() => navigation.goBack()}
          //   />
          <Pressable
            onPress={() => navigation.goBack()}
            style={{ marginRight: 10 }}
          >
            <Text style={{ color: "blue", fontSize: 16 }}>Back</Text>
          </Pressable>
        ),
      })}
    >
      {/* //if we want to customise the title and other properties of the screen
      //individually we need to configure the options outside the root //using
      //Stack.screen */}
      {/* <Stack.Screen
        name="routename"
        options={{ title: "Name we want to give" }}
      /> */}
      <Stack.Screen
        name="index"
        options={{ title: "Home Page", headerLeft: undefined }} //added headerLeft property to undefined to clear back button or array from home scrren
      />
      <Stack.Screen name="setting" options={{ title: "Setting Page" }} />
    </Stack>
  );
}
