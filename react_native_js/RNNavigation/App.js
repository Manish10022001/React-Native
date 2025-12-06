import {StyleSheet} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import DashboardScreen from './screens/DashboardScreen'
import SettingScreen from './screens/SettingScreen'

import { createDrawerNavigator } from '@react-navigation/drawer';
//2: to navigate programetically without drawer
//-> 2.1: using toggleDrawer and destructureing navigation
const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
      <Drawer.Screen 
        name='Dashboard' 
        component={DashboardScreen} 
        options = {{
          title:"My Dashboard",
          drawerLabel:"Dashboard label",
          drawerActiveTintColor:"#c12121ff",
          drawerActiveBackgroundColor:"lightblue",
          drawerContentStyle:{
            backgroundColor:"lightpink"
          }
        }}
      />
      <Drawer.Screen name='Setting' component={SettingScreen} />
    </Drawer.Navigator>
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
