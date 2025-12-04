import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { Pressable, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen'
import AboutScreen from './screens/AboutScreen'
//1. create stack navigators
//2.1 to navigate between screens -> using navigate (navigation prop)
//2.2 to navigate betwen screens -> using useNavigation hook

//3: Passing Data between screens
//-> 3.1 pass data to new screen
//-> 3.2 set default parameter value 
//-> 3.3 update parameter from given screen using navigation prop
//-> 3.4 send data back to the screen


//4: Stack Navigation Options
//-> 4.1 title
//-> 4.2 Style header resonating with app's theme
//-> 4.3 Header left and Header right with custom styles
//-> 4.4 screen to have a shade of header color

//-> 4.5 to have uniform screen across all screns copy all optons and in <Stact.Navigation in ScreenOptions paste it

//5: Dynamic Stack Navigation e.g instead of generic title, want name of person passed in as parameter
//->5.1 Dynamically set header title directly from <Stack.screen>
//->5.2 Can use useLayoutEffect hook to set dynamic title

const Stack = createNativeStackNavigator(); //1 import createNativeStackNavigator
export default function App() {
  return (
    <NavigationContainer>
      {/* 1.2 */}
      <Stack.Navigator 
        initialRouteName="Home"
        //4.5
        screenOptions={{
                          title:"welcome home", //4.1
                          //4.2
                          headerStyle:{
                            backgroundColor:"#6a51ae"
                          },
                          headerTintColor:"#fff",
                          headerTitleStyle:{fontWeight:"bold"},

                          //4.3
                          headerRight: ()=>(
                            <Pressable onPress={()=>alert("Menu button pressed")}>
                              <Text style={{color:"#fff", fontSize:16}}>Menu</Text>
                            </Pressable>
                          ),

                          //4.4
                          contentStyle:{backgroundColor:"#e8e4f3"}
                      }}
      >
        {/* 1.3 it has name, component props */}
        {/* by default topmost screen within the navigator is the initial scrreen, we can change this by using initialRouteName prop */}
        <Stack.Screen name="Home" 
                      component ={HomeScreen}
                      // options={{
                      //     title:"welcome home", //4.1
                      //     //4.2
                      //     headerStyle:{
                      //       backgroundColor:"#6a51ae"
                      //     },
                      //     headerTintColor:"#fff",
                      //     headerTitleStyle:{fontWeight:"bold"},

                      //     //4.3
                      //     headerRight: ()=>(
                      //       <Pressable onPress={()=>alert("Menu button pressed")}>
                      //         <Text style={{color:"#fff", fontSize:16}}>Menu</Text>
                      //       </Pressable>
                      //     ),

                      //     //4.4
                      //     contentStyle:{backgroundColor:"#e8e4f3"}
                      // }} 
        />
        <Stack.Screen name="About" 
                      component={AboutScreen} 
                      initialParams={{name:"Guest"}} //3.2 initialParams prop
                      //5.1
                      options={({route})=>(
                        {
                          title:route.params.name,
                        }
                      )}
        /> 
      </Stack.Navigator>
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
