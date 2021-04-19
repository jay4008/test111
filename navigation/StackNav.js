
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import React from 'react';
import MeetingRooms from '../screens/MeetingRooms';
import NextPage from '../screens/NextPage';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MeetingRooms" component={MeetingRooms}  options = {{

          title :'First page'
      }}/>
        <Stack.Screen name="NextPage" component={NextPage}  options = {{

title :'Secound page'
}}/>
    </Stack.Navigator>
  );
}
export default MyStack;