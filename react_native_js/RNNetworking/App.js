
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import GetRequests from './components/GetRequests';
import LoadingState from './components/LoadingState';
import PullToRefresh from './components/PullToRefresh';
import PostTitleBody from './components/PostTitleBody';
import ErrorHandling from './components/ErrorHandling';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {/* <GetRequests /> */}
        {/* <LoadingState /> */}
        {/* <PullToRefresh /> */}
        {/* <PostTitleBody /> */}
        <ErrorHandling />
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
});
