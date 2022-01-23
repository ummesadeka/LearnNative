import React, { useState } from 'react';
import {  StyleSheet, Text, TextInput, View} from 'react-native';
import { ScrollView } from 'react-native';

export default function App() {
  const [name, SetName ] = useState('');
  return (
   <View style={styles.body}>
     <Text style={styles.text}>Please write here:</Text>
     <TextInput 
     multiline
     style={styles.input}
     placeholder='e.g. jhon'
     onChangeText={(value) => SetName(value)
    }
    // maxLength={5}
    // keyboardType='numeric'
    secureTextEntry
      />
     <Text style={styles.text}> your name is: {name}</Text>
   </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#006000',
    alignItems:'center'
  },
  input: {
    borderWidth: 1,
    width: 200,
    borderColor: '#fff',
    borderRadius: 5,
    textAlign: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10,
  },
});
