import {View, Text, StyleSheet, TouchableOpacity, Picker} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import React from 'react';
import {RootState} from '../store';
import {useSelector, useDispatch} from 'react-redux';
const MeetingRooms = (props) => {
    const freeroom = useSelector(
        (state: RootState) => state.meeting.freeroom,
      );

    //   totalroom : 20,
    //   freeroom : 5,
    //    totalBuilding : 4, 
    //    totalMeeting : 100,
    //    goingOn: 10


      const totalroom = useSelector(
        (state: RootState) => state.meeting.totalroom,
      );
      const totalBuilding = useSelector(
        (state: RootState) => state.meeting.totalBuilding,
      );
    //   const freeroom = useSelector(
    //     (state: RootState) => state.meeting.totalMeeting,
    //   );

       const totalMeeting = useSelector(
        (state: RootState) => state.meeting.totalMeeting,
      );

      const goingOn = useSelector(
        (state: RootState) => state.meeting.goingOn,
      );
    
  return (
    <View style={{flex: 1}}>
        <View style = {{ padding:  10,  borderRadius : 5, borderColor :"silver", borderWidth : 1, marginHorizontal: 10,marginVertical: 10,}}>
         <RNPickerSelect
    
            onValueChange={(value) => console.log(value)}
            items={[
                { label: 'Football', value: 'football' },
                { label: 'Baseball', value: 'baseball' },
                { label: 'Hockey', value: 'hockey' },
            ]}
        />
        </View>
      <View style={styles.boxcontainer}>
        <Text style = {styles.Heading}>Buildings</Text>
        <Text style = {styles.norMtxt}>Total {totalBuilding}</Text>
      </View>
      <View style={styles.boxcontainer}>
        <Text style = {styles.Heading}>Rooms</Text>
        <Text  style = {styles.norMtxt}>Total {totalroom}</Text>
<Text  style = {styles.norMtxt}>Free {freeroom}</Text>
      </View>
      <View style={styles.boxcontainer}>
        <Text style = {styles.Heading}>Meetings</Text>
        <Text  style = {styles.norMtxt}>total {totalMeeting} today</Text>
        <Text  style = {styles.norMtxt}>Total {goingOn} Going Now</Text>
      </View>
      <TouchableOpacity
      onPress = {() => props.navigation.navigate('AddAMeeting')}
        style={{
          backgroundColor: '#2B79D6',
          borderRadius: 10,
          padding: 10,
          marginHorizontal: 10,
          marginTop: 10,
        }}>
        <Text style={{textAlign: 'center', color :"#fff"}}>Add a meeting</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MeetingRooms;

const styles = StyleSheet.create({
  boxcontainer: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    margin: 10,
    borderColor: '#6CA8FF',
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 5,
  },
  Heading:{
      fontSize : 18,
      color :"#000"
  },
  norMtxt :{
      color :"#647789",
      fontSize : 15
  }
});
