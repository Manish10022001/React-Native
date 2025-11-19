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
      <Box style={{backgroundColor:"#681414ff", alignSelf:"flex-start"}}>Box 1</Box>
      <Box style={{backgroundColor:"#cec36eff", alignSelf:"flex-end"}}>Box 2</Box>
      <Box style={{backgroundColor:"#d689c4ff", alignSelf:"center"}}>Box 3</Box>
      <Box style={{backgroundColor:"#2a0958ff", alignSelf:"stretch"}}>Box 4</Box>
      <Box style={{backgroundColor:"#21732fff"}}>Box 5</Box>
      <Box style={{backgroundColor:"#0e0404ff"}}>Box 6</Box>
      <Box style={{backgroundColor:"#5c85c6ff"}}>Box 7</Box>
    </View>
  );
}

const styles= StyleSheet.create({
  container:{
    // flex:1,
    // flexDirection:"column",
    // justifyContent:"flex-start",
    // justifyContent:"flex-end",
    // justifyContent:"center",
    // justifyContent:"space-evenly",
    // alignItems:"stretch" //by default
    //alignItems:"flex-start",
    // alignItems:"flex-end",
    // alignItems:"center",
    // alignItems:"flex-end",
    // flexWrap:'nowrap',
    // flexWrap:'wrap',
    alignContent:"space-around", //other values, flex-start, flex-end, cente, space-between, stretch, etc
    flexWrap:"wrap",
    height:300,
    marginTop:60,
    borderWidth:6,
    borderColor:"red",
  }
})