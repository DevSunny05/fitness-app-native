import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import StackNavigator from './StackNavigator';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  return (
    <StackNavigator/>
    // <View style={styles.container}>
     
    //   <HomeScreen/>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});
