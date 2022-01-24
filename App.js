import React, { useState } from 'react';
import {  Alert, Button, Image, Modal, Pressable, StyleSheet, Text, TextInput, ToastAndroid, View} from 'react-native';

export default function App() {
  const [name, SetName ] = useState('');
  const [submitted, SetSubmitted ] = useState(false);
  const [showWarning, SetShowWarning] = useState(false);
  const onPressHandler = () => {
    if (name.length > 3) {
      SetSubmitted (!submitted);
    } else {
      SetShowWarning(true)
    }
  }
  return (
   <View style={styles.body}>
     <Modal
     visible={showWarning}
     onRequestClose={() => 
      SetShowWarning(false)
    }
    animationType='slide'
     >
       <View style={styles.centered_view}>
         <View style={styles.warning_modal}>
             <Text>The name must be longer  than 3 characters</Text>
          </View>
       </View>
     </Modal>
     <Text style={styles.text}>Please write here:</Text>
     <TextInput 
     multiline
     style={styles.input}
     placeholder='e.g. jhon'
     onChangeText={(value) => SetName(value)
    }
    maxLength={5}
    keyboardType='numeric'
    secureTextEntry
      />

       <Pressable 
           onPress={onPressHandler}
           delayLongPress={2000}
           hitSlop={{ top: 10, bottom: 50 }}
           android_ripple={{color: 'blue'}}
           style={({ pressed }) => [
             { backgroundColor: pressed ? '#ddd' : 'red'}
           ]}
         >
       <Text style={styles.text}>
         {submitted ? 'clear' : 'Submit'}
         </Text>
       </Pressable>
       {
         submitted ? 
         <View>
         <Text style={styles.text}> you are registered as: {name}</Text>
       
         <Image
          style={styles.image}
          
          resizeMode='stretch' />
         </View>
         :
         <Image
          style={styles.image}
          source={{uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.kindpng.com%2Fimgv%2FTJTbRwT_done-icon-white-png-transparent-png%2F&psig=AOvVaw1pES52Kh4S1JCNK6V0qCJR&ust=1643089015753000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLCJ59vVyfUCFQAAAAAdAAAAABAD'}}
          resizeMode='stretch' />
       }

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
  button:{
    backgroundColor: 'green'
  },
  warning_modal: {
    width: 300,
    height: 300,
    backgroundColor: '#999',
    borderRadius: 20,
  },
  centered_view: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099',
  },
  image: {
    height: 100,
    width: 100,
    justifyContent: 'center',
  }
});
