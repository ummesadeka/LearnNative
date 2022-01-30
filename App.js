import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Pressable, View} from 'react-native';

const Stack = createStackNavigator();

function ScreenA({navigation}) {

  const onPressHandler = () => {
    // navigation.navigate('Screen_B');
    navigation.replace('Screen_B');
  }
  return(
    <View>
      <Text>
        Screen A
      </Text>
      <Pressable
       onPress={onPressHandler}
        style={({ pressed }) => ({backgroundColor: pressed ? '#ddd' : '#0f0'})}>
        <Text>
          go to screen B
        </Text>
      </Pressable>
    </View>
  )
}
function ScreenB({navigation}) {
  const onPressHandler = () => {
    navigation.navigate('Screen_A');
    // navigation.goBack();
  }
  return(
    <View>
      <Text>
        Screen B
      </Text>
      <Pressable
       onPress={onPressHandler}
        style={({ pressed }) => ({backgroundColor: pressed ? '#ddd' : '#0f0'})}>
        <Text>
          go to screen A
        </Text>
      </Pressable>
    </View>
  )
}
export default function App() {
  
  return (
   <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen
       name="Screen_A"
       component={ScreenA}
       options={{
         header: () => null
       }}
        />
       <Stack.Screen
       name="Screen_B"
       component={ScreenB}
        />
     </Stack.Navigator>
   </NavigationContainer>
 )
}
