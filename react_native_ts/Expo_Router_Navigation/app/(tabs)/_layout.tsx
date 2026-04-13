import { Tabs } from "expo-router";
import FontAwesonme from "@expo/vector-icons/FontAwesome";
export default function TabLayout() {
  return (
    //to customize tab buttons we use ScreenOptions
    <Tabs screenOptions={{ tabBarActiveTintColor: "green" }}>
      {/* to customize individual tabs use Tabs.Screen */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesonme name="home" size={26} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarActiveBackgroundColor: "gray",
          tabBarActiveTintColor: "white",
          tabBarIcon: ({ color }) => (
            <FontAwesonme name="gear" size={26} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="details"
        options={{
          title: "Details",
          tabBarLabel: "Custom label",
          href: null, //href : null will hide the tab
          tabBarIcon: ({ color }) => (
            <FontAwesonme name="file" size={26} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
