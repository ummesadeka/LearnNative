import React, { useState } from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

export default function App() {
  const [name, setName] = useState('React Native');
  const [ session, setSession ] = useState({ number: 6, title: 'state'});
  const [ current, setCurrent ] = useState(true)

  const onClickHandler = () => {
    setName(' I am in love with React Native')

    setSession({ number: 7, title: 'style' })

    setCurrent(false);
  }
  return (
    <View style={styles.body}>
      <Text style={styles.text}>{name} </Text>
      <Text style={styles.text}> This is session number {session.number} and about {session.title} </Text>
      <Text style={styles.text}> {current ? 'current session' : 'next session'} </Text>
      <Button title="Update State" onPress={onClickHandler}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#006000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10,
  },
});
