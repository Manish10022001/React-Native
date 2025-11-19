// import One from "./src/examples/One.js";
import PressableComponent from "./src/examples/PressableComponent.js";
import AlertComponent from "./src/components/AlertComponent.js";
import StyleInheritance from "./src/StylesSheet/StyleInheritance.js";
import { View, Text , StyleSheet} from "react-native";
import Box from "./src/RNLayout/Box.js";

export default function App() {
  return (
    // <One />
    // <JsxExampleCat />
    // <CatProps />
    // <ImageProps />
    // <CatState />
    // <PizzaTranslator />
    // <ScrollViewEx />
    // <ButtonComponent />
    // <PressableComponent />
    // <ModalComponent />
    // <StatusBarComponent />
    // <ActivityIndicatorComponent />
    // <Alert />
    // <MultipleStyles />
    // <BoxModel />
    // <ExampleShadow />
    // <StyleInheritance />
    <View style={styles.container}>
      <Box style={{backgroundColor:"#681414ff", flex:1}}>Box 1</Box>
      <Box style={{backgroundColor:"#cec36eff", flex:4}}>Box 1</Box>
      <Box style={{backgroundColor:"#d689c4ff"}}>Box 1</Box>
      <Box style={{backgroundColor:"#2a0958ff"}}>Box 1</Box>
      <Box style={{backgroundColor:"#21732fff",flex:6}}>Box 1</Box>
      <Box style={{backgroundColor:"#0e0404ff"}}>Box 1</Box>
      <Box style={{backgroundColor:"#5c85c6ff"}}>Box 1</Box>
      <Box style={{backgroundColor:"#c1c678ff"}}>Box 1</Box>
    </View>
  );
}

const styles= StyleSheet.create({
  container:{
    flex:1,
    marginTop:60,
    borderWidth:6,
    borderColor:"red",
  }
})