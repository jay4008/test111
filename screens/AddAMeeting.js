import {View, Text, StyleSheet, TouchableOpacity, Picker, TextInput, Dimensions, Alert } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
const {width} = Dimensions.get('window')
import React, { useState } from 'react';
const AddAMeeting = (props) => {


    const [date, setDate]= useState("")
    const [stime, setSTime]= useState("")
    const [Etime, setEtime]= useState("")




    const [building ,setBuilding] = useState('')
    const navigateOtherPage = ()  =>{
        if( date === ""){
            Alert.alert("Data Cant emapty")
            return
        }
        if( stime === ""){
            Alert.alert("Starting time Cant emapty")
            return
        }
        if( Etime === ""){
            Alert.alert("Ending time Cant emapty")
            return
        }
        if(building === ""){
            Alert.alert("please select a building")
            return
        }
        props.navigation.navigate('Free')
    }


  return (
    <View style={{flex: 1}}>
       

       <View style = {{flexDirection :'row',justifyContent :'space-between', alignItems :'center',  padding : 5, marginTop : 10, marginRight : 5}}>
        <Text>Date</Text>
        <TextInput onFocus = {() =>console.log("called")




        }
        
        onChangeText= {(txt) => setDate(txt)}
        style = {{width :width  -120 ,marginLeft : 10, borderWidth : 1, borderColor :"silver", padding : 8, borderRadius : 5}}></TextInput>
           
       </View>

       <View style = {{justifyContent :'space-between',flexDirection :'row', alignItems :'center',  padding : 5, marginRight : 5}}>
        <Text>Start Time</Text>
        <TextInput 
        
        onChangeText= {(txt) => setSTime(txt)}
        style = {{width :width  -120  ,marginLeft : 10, borderWidth : 1, borderColor :"silver", padding : 8, borderRadius : 5}}></TextInput>
           
       </View>

       <View style = {{justifyContent :'space-between',flexDirection :'row', alignItems :'center',  padding : 5,marginRight : 5}}>
        <Text>End Time</Text>
        <TextInput 
         onChangeText= {(txt) => setEtime(txt)}
        
        style = {{width :width  -120  ,marginLeft : 10, borderWidth : 1, borderColor :"silver", padding : 8, borderRadius : 5}}></TextInput>
           
       </View>

       <View style = {{ padding:  10,  borderRadius : 5, borderColor :"silver", borderWidth : 1, marginHorizontal: 10,marginVertical: 10,}}>
         <RNPickerSelect
    
            onValueChange={(value) => setBuilding(value)}
            items={[
                { label: 'Building1', value: 'Building1' },
                { label: 'Building2', value: 'Building2' },
                { label: 'Building3', value: 'Building3' },
                { label: 'Building4', value: 'Building4' },
            ]}
        />
        </View>
      <TouchableOpacity
      onPress = {() => navigateOtherPage()}
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

export default AddAMeeting;

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
