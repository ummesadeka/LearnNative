import React, { useState } from 'react';
import { RefreshControl, StyleSheet, Text, View} from 'react-native';
import { ScrollView } from 'react-native';

export default function App() {
  const [Items, setItems] = useState([
    {key:1, item: 'Item 1'},
    {key:2, item: 'Item 2'},
    {key:3, item: 'Item 3'},
    {key:4, item: 'Item 4'},
    {key:5, item: 'Item 5'},
    {key:6, item: 'Item 6'},
    {key:7, item: 'Item 7'},
    {key:8, item: 'Item 8'},
    {key:9, item: 'Item 8'},
    {key:10, item: 'Item 8'},
    {key:11, item: 'Item 8'},
    {key:12, item: 'Item 8'},
  ]);

  const [Refreshing, setRefreshing] = useState(false)

  const onRefresh = () => {
    setRefreshing(true);
    setItems([...Items, {key: 69, item: 'Item 69'}])
    setRefreshing(false)
  }

  return (
      <ScrollView
       style={styles.body}
       refreshControl={
        <RefreshControl
          refreshing={Refreshing}
          onRefresh={onRefresh}
          colors={['red']}
        />
       }
       >
      {
        Items.map((object)=> {
          return (
            <View style={styles.item} key={object.key}>
            <Text style={styles.text}> {object.item}</Text>
          </View>
          )
        })
      }
     </ScrollView>
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
