import { ScrollView, StyleSheet, Text, View, StatusBar, FlatList, SectionList } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import PokemonList from "./data.json";
import groupedPokemonList from "./grouped-data.json";

export default function App() {
  return (
    // <SafeAreaProvider>
    //   <SafeAreaView style={styles.container}>
    //     <ScrollView style={styles.scrollView}>
    //       {
    //         PokemonList.map((pokemon)=>{
    //           return(
    //             <View style={styles.card} key={pokemon.id}>
    //               <Text style={styles.cardText}>{pokemon.name}</Text>
    //               <Text style={styles.cardText}>{pokemon.type}</Text>
    //             </View>
    //           )
    //         })
    //       }
    //     </ScrollView>
    //   </SafeAreaView>
    // </SafeAreaProvider>

    <SafeAreaProvider>
       <SafeAreaView style={styles.container}>
        {/* <View style={styles.scrollView}> */}
        <ScrollView style={styles.scrollView}>
        {/* <View>
        <FlatList 
          data={PokemonList}
          // data={[]}
          renderItem={({item})=>{
            console.log(item.id);
            return(
              <View style={styles.card}>
                <Text>{item.type}</Text>
                <Text>{item.name}</Text>
              </View>
            )
          }}
          // horizontal = {true}
          keyExtractor={(item,index)=> item.id.toString()}
          ItemSeparatorComponent = {<View style={{height:16}}/>}
          ListEmptyComponent = {<View style={styles.emptyList}><Text >No data found</Text></View>}
          ListHeaderComponent={<Text style={styles.headerText}>Pokemon List</Text>}
          ListFooterComponent={<Text style={styles.footerText}>End of the list</Text>}
        />
        </View> */}

          <SectionList 
            sections={groupedPokemonList}
            renderItem={({item})=>{
              return(
                <View style={styles.card}>
                  <Text style={styles.cardText}>{item}</Text>
                </View>
              )
            }}  
            renderSectionHeader={({section})=>{
              return(
                <Text style={styles.sectionHeaderText}>{section.type}</Text>
              )
            }} 

            ItemSeparatorComponent = {()=>(<View style={{height:16}}/>)}
            SectionSeparatorComponent = {()=>(<View style={{height:16}}/>)}
         />
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
    // marginBottom:12
  },
  cardText:{
    fontSize:30
  },
  emptyList:{
    backgroundColor:"gray",
    borderRadius:8,
    borderWidth:2,
    width:300,
    height:200,
    justifyContent:"center",
    alignItems:"center",
  },
  headerText:{
    fontSize:30,
    textAlign:"center",
    marginBottom:12
  },
  footerText:{
    fontSize:20,
    textAlign:"center",
    marginTop:12
  },
  sectionHeaderText:{
    backgroundColor:"#ffff",
    fontSize:24,
    fontWeight:"bold"
  }
});
