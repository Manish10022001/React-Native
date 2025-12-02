import {useState} from 'react';
import { StyleSheet, Text, TextInput, View, StatusBar, Image, Button, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState('');
  const [errors, setErrors]       = useState({});

  function validateForm(){
    let errors={};
    if(!username) errors.username="Username is required";
    if(!password) errors.password="Password is required";

    setErrors(errors);
    return Object.keys(errors).length === 0; //we we do not have any keys for erros then we do not have any error message
    //and if we have then we display them
  }

  function handleSubmit(){
    if(validateForm()){
        console.log("Submitted", username, password);
        //after submit reset all values
        setUsername("");
        setPassword("");
        setErrors({})
    }
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView 
            behavior="padding"
            keyboardVerticalOffset={Platform.OS==="ios"?100:0}
        ><View style={styles.form}>
            <Image style={styles.image} source={require("./assets/adaptive-icon.png")}/>
            <Text style={styles.label}>Username</Text>
            {
                errors.username ? <Text style={styles.errorText}>{errors.username}</Text>:null
            }
            <TextInput 
                style={styles.input} 
                placeholder="Enter your username"
                value={username}
                onChangeText={setUsername}
            />
            <Text style={styles.label}>Password</Text>
            {
                errors.password ? <Text style={styles.errorText}>{errors.password}</Text>:null
            }
            <TextInput 
                style={styles.input} 
                placeholder="Enter your password" 
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            <Button style={styles.button} title="Submit" onPress={handleSubmit}/>
        </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:20,
    justifyContent:"center",
    backgroundColor: '#f5f5f5',
    paddingTop:StatusBar.currentHeight,
  },
  form:{
    backgroundColor:"plum",
    padding:20,
    borderRadius:  10,
    shadowColor:"black",
    shadowOffset:{
        width:0,height:2
    },
    shadowOpacity:0.25,
    shadowRadius:4,
    elevation:5,
  },
  label:{
    fontSize:16,
    marginBottom:5,
    fontWeight:"bold"
  },
  input:{
    height:40,
    borderColor:"#ddd",
    borderWidth:1,
    marginBottom:20,
    padding:10,
    borderRadius:5
  },
  image:{
    width:200,
    height:400,
    marginBottom:30,
    alignSelf:"center"
  },
  errorText:{
    color:"red",
    marginBottom:10
  }
});
