import React, { useState } from 'react';
import { FlatList, RefreshControl, StyleSheet, Text, View} from 'react-native';
import { ScrollView } from 'react-native';

export default function App() {
  const [Items, setItems] = useState([
    { name: 'name 1'},
    { name: 'name 2'},
    { name: 'name 3'},
    { name: 'name 4'},
    { name: 'name 5'},
    { name: 'name 6'},
    { name: 'name 7'},
    { name: 'name 8'},
    { name: 'name 8'},
    { name: 'name 8'},
    { name: 'name 8'},
    { name: 'name 8'},
  ]);

  const [Refreshing, setRefreshing] = useState(false)

  const onRefresh = () => {
    setRefreshing(true);
    setItems([...Items, {key: 69, name: 'Item 69'}])
    setRefreshing(false)
  }

  return (
    <FlatList
       keyExtractor={( item, index ) => index.toString()}
       data ={Items}
       renderItem={ ({item}) => (
        <View style={styles.item}>
        <Text style={styles.text}> {item.name}</Text>
      </View>
       )}
       refreshControl={
        <RefreshControl
          refreshing={Refreshing}
          onRefresh={onRefresh}
          colors={['red']}
        />
       }
    />
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#006000',
  },
  item: {
    margin: 10,
    backgroundColor: '#0060f0',
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
