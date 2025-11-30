import { ScrollView, StyleSheet, Text, View, StatusBar } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import PokemonList from "./data.json";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          {
            PokemonList.map((pokemon)=>{
              return(
                <View style={styles.card} key={pokemon.id}>
                  <Text style={styles.cardText}>{pokemon.name}</Text>
                  <Text style={styles.cardText}>{pokemon.type}</Text>
                </View>
              )
            })
          }
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop:StatusBar.currentHeight,
  },
  scrollView:{
    paddingHorizontal:16,
  },
  card:{
    backgroundColor:"white",
    borderRadius:8,
    borderWidth:1,
    padding:16,
    marginBottom:12
  },
  cardText:{
    fontSize:30
  }
});
