import {useState} from 'react';
import { StyleSheet, Text, TextInput, View, StatusBar, Switch } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const [name, setName] = useState('')
  const [isDarkMode, setIsDarkMode] = useState(false)
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <TextInput 
          style={styles.input} 
          value={name} 
          onChangeText={setName}
          placeholder="email@example.com"
          secureTextEntry
          // keyboardType="numeric"
          autoCorrect={false}
          autoCapitalize="none"
        />
        <TextInput 
          style={[styles.input, styles.multilineText]}
          placeholder="message"
          multiline
        />
        <Text style={styles.text}>My name is {name}</Text>

        <View style={styles.switchContainer}>
          <Text style={styles.text}>Dark Mode</Text>
          <Switch 
            value={isDarkMode}
            onValueChange={()=> setIsDarkMode((previousState)=>!previousState)}
            trackColor={{false:"gray", true:"lightblue"}}
            thumbCOlor="yellow"
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:StatusBar.currentHeight,
  },
  input:{
    height:40,
    margin:12,
    borderWidth:1,
    padding:10
  },
  text:{
    fontSize:30,
    padding:10
  },
  multilineText:{
    minHeight:100,
    textAlignVertical:"top"
  },
  switchContainer:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    paddingTop:10,
    paddingHorizontal:10
  }
});
