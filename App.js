import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Linking } from 'react-native';

export default function App() {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>I'm in love with React Native</Text>
      <Button title="Lets start" onPress={()=> {Linking.openURL('https://reactnative.dev/docs/getting-started')}}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10,
  },
});
