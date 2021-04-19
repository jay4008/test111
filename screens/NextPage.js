import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Picker,
  Image,
  FlatList,
  LogBox,
  Alert,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';

const NextPage = (props) => {
  const RowChild = ({ch1, ch2}) => {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{padding: 5, width: 150}}>{ch1} </Text>
        <Text style={{padding: 5}}>: {ch2} </Text>
      </View>
    );
  };


  useEffect(() =>{
    console.log(props.route.params.Address)
  },[])

  return (
    <View style = {{backgroundColor:  "#fff", flex :1}}>
        <Image source = {require('../image/check.png')} style = {{marginTop: 50 , height : 100, width :100 ,resizeMode :'contain', alignSelf :'center'}}>

        </Image>
      <View style={{marginVertical: 20, backgroundColor: '#fff'}}>

        <RowChild ch1={'name'} ch2={props.route.params.name} />
        <RowChild ch1={'Address'} ch2={props.route.params.Address} />
        <RowChild ch1={'City'} ch2={props.route.params.City} />
        <RowChild ch1={'phone'} ch2={props.route.params.phone} />
      </View>
    </View>
  );
};

export default NextPage;
