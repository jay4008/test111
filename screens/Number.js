import {View, Text, StyleSheet, TouchableOpacity, Picker, ScrollView, Dimensions, Alert } from 'react-native';
const {width} = Dimensions.get('window')
import React, { useState, useEffect } from 'react';

const Number = () =>{
const [data, setdata] = useState([])
const setToHundRed = () =>{
    var arr = []
     for (let index = 1; index <= 100; index++) {
        arr.push(index)
         
     }
     setdata(arr)
}

useEffect(() =>{
setToHundRed()



},[])

    return(
        <ScrollView>
        <View>

{

    data && data.length !==0 && data.map((item, index) =>(

        <View>
{
    item % 5 ===0 ?   <Text style = {{alignSelf :'center' , padding : 5}}>{"Abc"}</Text> :  <Text style = {{alignSelf :'center' , padding : 5}}>{item}</Text>
}
       


        </View>
    ))
}

        </View>
        </ScrollView>

    )
}

export default Number;