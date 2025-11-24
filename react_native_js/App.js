// import One from "./src/examples/One.js";
import {useState, useEffect} from 'react';
import PressableComponent from "./src/examples/PressableComponent.js";
import AlertComponent from "./src/components/AlertComponent.js";
import StyleInheritance from "./src/StylesSheet/StyleInheritance.js";
import { View, Text , StyleSheet, Dimensions } from "react-native";
import Box from "./src/RNLayout/Box.js";
//drawback of Dimensions Api, when we change screen to landscape we need to again reload the app, the values don't dynamically update when screen changes to resolve that we have to follow 5 steps
//  step1: import useState and useEffect from react
export default function App() {
  //step : create a state variable that will store device dimensions when screen loads
  const [dimensions, setDimensions] = useState({
    //pass object and will have key called window
    window: Dimensions.get('window')
  })

  //step 3: add effect that listens to changes in device dimensions and update dimension to store value
  useEffect(()=>{
    const subscription = Dimensions.addEventListener("change",({window})=>{
      setDimensions({window})
    });
    return ()=> subscription?.remove();
  })

  //step 4 : extract device width and height from dimensions state variable
  const {window} = dimensions;
  const windowWidth = window.width;
  const windowHeight = window.height;
  //step 5: add inline styles that dynamically change based on device dimensions
  return (
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

        <View style={[styles.box,{
          width:windowWidth>500?'70%':'90%',
           height:windowHeight>500?'70%':'90%'}]}>
          <Text style={{fontSize:windowWidth>500?74:20}}>Welcome !</Text>
        </View>
      </View>
    
  );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    alignItems: "center",
    justifyContent: "center",
  },
  box:{
    // width:windowWidth > 500 ? '50%' : '70%',
    // height:windowHeight > 500 ? '50%':'70%',
    backgroundColor:'lightblue',
    alignItems:'center',
    justifyContent:'center'
  },
  // text:{
  //   fontSize:windowWidth>500? 54: 24,
  // }
});
