import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "red",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      {/* //if we want to customise the title and other properties of the screen
      //individually we need to configure the options outside the root //using
      //Stack.screen */}
      {/* <Stack.Screen
        name="routename"
        options={{ title: "Name we want to give" }}
      /> */}
      <Stack.Screen name="index" options={{ title: "Home Page" }} />
      <Stack.Screen name="setting" options={{ title: "Setting Page" }} />
    </Stack>
  );
}
