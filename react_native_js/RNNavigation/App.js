import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {StyleSheet} from 'react-native'
import CourseListScreen from './screens/CourseListScreen'
import ProfileScreen from './screens/ProfileScreen'
import SettingScreen from './screens/SettingScreen'
import { Ionicons } from '@expo/vector-icons'; 
const Tab = createBottomTabNavigator()
export default function App() {
  return (
    <NavigationContainer>
        <Tab.Navigator screenOptions={{
            tabBarLabelPosition:"below-icon", //or beside-icon
            tabBarShowLabel:true, //or false
            tabBarActiveTintColor:"purple",
            tabBarInactiveTintColor:"blue"
        }}>
            <Tab.Screen name="Course List" component={CourseListScreen}/>
            <Tab.Screen name="Profile" component={ProfileScreen} options={{
                tabBarLabel:"my profile",
                tabBarIcon:({color})=><Ionicons name="person" size={20} color={color}/>,
                tabBarBadge:3
            }}/>
            <Tab.Screen name="Setting" component={SettingScreen} />
        </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
