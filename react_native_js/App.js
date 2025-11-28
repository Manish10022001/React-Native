// import One from "./src/examples/One.js";
import {useState, useEffect} from 'react';
import PressableComponent from "./src/examples/PressableComponent.js";
import AlertComponent from "./src/components/AlertComponent.js";
import StyleInheritance from "./src/StylesSheet/StyleInheritance.js";
import { View, Text , StyleSheet } from "react-native";
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context'
import Box from "./src/RNLayout/Box.js";

export default function App() {
  // const windowWidth = useWindowDimensions().width;
  // const windowHeight = useWindowDimensions().height;
  return (
    <SafeAreaProvider>
    <SafeAreaView style={{flex:1}}>
    <View style={styles.container}>
      {/* <One /> */}
      {/* <JsxExampleCat /> */}
      {/* <CatProps /> */}
      {/* <ImageProps /> */}
      {/* <CatState /> */}
      {/* <PizzaTranslator /> */}
      {/* <ScrollViewEx /> */}
      {/* <ButtonComponent /> */}
      {/* <PressableComponent /> */}
      {/* <ModalComponent /> */}
      {/* <StatusBarComponent /> */}
      {/* <ActivityIndicatorComponent /> */}
      {/* <Alert /> */}
      {/* <MultipleStyles /> */}
      {/* <BoxModel /> */}
      {/* <ExampleShadow /> */}
      {/* <StyleInheritance /> */}

      {/* <View style={styles.container}>*/}
         {/* <Box style={{ backgroundColor:"#681414ff", top:75, left:75 }}>Box 1</Box>
         <Box style={{ backgroundColor:"#cec36eff", top:78, left:75 }}>Box 2</Box>
         <Box style={{ backgroundColor:"#d689c4ff", position:'absolute', top:100, left:100 }}>Box 3</Box>
         <Box style={{ backgroundColor:"#2a0958ff" }}>Box 4</Box>
         <Box style={{ backgroundColor:"#21732fff" }}>Box 5</Box>
         <Box style={{ backgroundColor:"#0e0404ff" }}>Box 6</Box>
         <Box style={{ backgroundColor:"#5c85c6ff" }}>Box 7</Box> */}
      {/*</View>*/}

        <View style={styles.box}>
          <Text style={styles.text}>Welcome !</Text>
        </View>
      </View>
    </SafeAreaView>
    </SafeAreaProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    alignItems: "center",
    justifyContent: "center",
  },
  box:{
    backgroundColor:'lightblue',
    alignItems:'center',
    justifyContent:'center'
  },
  text:{
    fontSize:24,
  }
});
