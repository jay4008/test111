
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { View, Text } from 'react-native';
import React from 'react';
import MeetingRooms from '../screens/MeetingRooms';
import AddAMeeting from '../screens/AddAMeeting';
import Free from '../screens/Free';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MeetingRooms" component={MeetingRooms} />
      <Stack.Screen name="AddAMeeting" component={AddAMeeting} />
      <Stack.Screen name="Free" component={Free} />
    </Stack.Navigator>
  );
}

const Notifications = () =>{
    return(
        <View>
            <Text>Notifications</Text>
        </View>
    )
}
const Profile = () =>{
    return(
        <View>
            <Text>Profile</Text>
        </View>
    )
}
const Settings = () =>{
    return(
        <View>
            <Text>Settings</Text>
        </View>
    )
}

export default MyStack;