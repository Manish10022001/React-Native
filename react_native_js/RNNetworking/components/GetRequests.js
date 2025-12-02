import {useState, useEffect} from 'react';
import { StyleSheet, Text, View, StatusBar, FlatList } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
//1. Get Request and bind the response to ui
export default function GetRequests() {
    const [postList, setPostList] = useState([])
    //fetch api data using asyn function
    const fetchData = async(limit=10)=>{
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
        const data = await response.json();
        
        setPostList(data)
    }

    //get fetch data when component mounts
    useEffect(()=>{
        fetchData()
    },[])
  return (
    // <SafeAreaProvider>
    //   <SafeAreaView style={styles.container}>
        <View style={styles.listContainer}>
            <FlatList 
                data={postList}
                renderItem={({item})=>{
                    return(
                        <View style={styles.card}>
                            <Text style={styles.titleText}>{item.title}</Text>
                            <Text style={styles.bodyText}>{item.body}</Text>
                        </View>
                    )
                }}
                ItemSeparatorComponent = {
                    <View style={{height:16}} />
                }

                ListEmptyComponent={
                    <Text>No Data Found</Text>
                }
                ListHeaderComponent={
                    <Text style={styles.headerText}>Post List</Text>
                }
                ListFooterComponent={
                    <Text style={styles.footerText}>End of the list</Text>
                }
            />
        </View>
    //   </SafeAreaView>
    // </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingTop:StatusBar.currentHeight,
//   },
  listContainer:{
    flex:1,
    paddingHorizontal:10,
    backgroundColor:"#f5f5f5"
  },
  card:{
    backgroundColor:"white",
    padding:16,
    borderRadius:8,
    borderWidth:1
  },
  titleText:{
    fontSize:34
  },
  titleBody:{
    fontSize:24,
    color:"#6666666"
  },
  headerText:{
    fontSize:24,
    textAlign:"center",
    marginBottom:12,
  },
  footerText:{
    fontSize:24,
    textAlign:"center",
    marginTop:12
  }
});
