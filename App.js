import React, { useState } from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

export default function App() {
  const [name, setName] = useState('Style Test');


  const onClickHandler = () => {
    setName('Style Test is Done')


  }
  return (
    <View style={{
      height: '50%',
      width: '100%',
    backgroundColor: '#006000',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 10,
    borderColor: '#006060', 
    borderRadius: 10,
  }}>
      <Text style={styles.text}>{name} </Text>
      <Button title="Update State" onPress={onClickHandler}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
 
  text: {
    color: '#fff',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10,
    textTransform: 'uppercase'
  },
});
