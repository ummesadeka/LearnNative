import React, { useState } from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

export default function App() {
  const [name, setName] = useState('Style Test');


  const onClickHandler = () => {
    setName('Style Test is Done')


  }
  return (
    <View style={styles.body}>
      <View style={styles.View1}>
          <Text style={styles.text}> 1 </Text>
      </View>
      <View style={styles.View2}>
          <Text style={styles.text}> 2 </Text>
      </View>
      <View style={styles.View3}>
          <Text style={styles.text}> 3 </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#006000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  View1: {
    width: 100,
    height: 100,
    backgroundColor: '#0060f0',
    alignItems: 'center',
    justifyContent: 'center'
  },
  View2: {
    width: 100,
    height: 100,
    backgroundColor: '#f06060',
    alignItems: 'center',
    justifyContent: 'center'
  },
  View3: {
    width: 100,
    height: 100,
    backgroundColor: '#ff9060',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10,
  },
});
