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
import ImagePicker from 'react-native-image-crop-picker';
import UserInfo from './UserInfo';
const MeetingRooms = props => {
  const [filedShow, setFiled] = useState(true);
  const [data, setdata] = useState({})
const {height , width} = Dimensions.get('window').width
const RowChild = ({ch1,ch2})=>{
  return(
    <View style = {{flexDirection: 'row',alignItems :'center'}}>
    <Text style = {{padding : 5 , width : 150}}>{ch1} </Text> 
    <Text style = {{padding : 5}}>: {ch2} </Text>
    </View>

  )
}



const opengalllery = () =>{

  ImagePicker.openPicker({
    width: 300,
    height: 400,
    cropping: true
  }).then(image => {
    console.log(image);
  });
}


const openCamera = () =>{

  ImagePicker.openCamera({
    width: 300,
    height: 400,
    cropping: true,
  }).then(image => {
    console.log(image);
  });
}




const options = () =>{

  Alert.alert(  
    'Alert Title',  
    'My Alert Msg',  
    [  
        {text: 'Camera', onPress: () => openCamera()},  
        {  
            text: 'Gallery',  
            onPress: () =>opengalllery(),  
          
        },  
        {text: 'Cancel', onPress: () => console.log('OK Pressed')},  
    ],  
    {cancelable: false}  
)  
}

  return (
    <View style={{height :height , width :width, backgroundColor:  "#fff",}}>
     {
       filedShow && <UserInfo setdata= {setdata} setShowModal= {setFiled}/>
     }
     
    

 <TouchableOpacity onPress = {() => options()} style = {{padding : 8 , backgroundColor:  "#fff", marginHorizontal: 10,borderRadius : 5, borderColor :'blue', borderWidth : 1}} >
        <Text style = {{textAlign :'center', color :"blue"}}>Upload Image</Text>
      </TouchableOpacity>
    
      {
!filedShow &&
      <View style = {{ marginVertical: 20, backgroundColor:  "#fff",}}>

<RowChild ch1 = {"name"} ch2 = {data.name} />
<RowChild ch1 = {"Address"} ch2 = {data.Address} />
<RowChild ch1 = {"City"} ch2 = {data.City} />
<RowChild ch1 = {"phone"} ch2 = {data.phone} />
</View>
    } 
    <TouchableOpacity onPress = {() => props.navigation.navigate('NextPage', data)} style = {{padding : 8 , backgroundColor:  "#fff", marginHorizontal: 10,borderRadius : 5, borderColor :'blue', borderWidth : 1}} >
        <Text style = {{textAlign :'center', color :"blue"}}>Submit</Text>
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
  Heading: {
    fontSize: 18,
    color: '#000',
    width : 100,
  },
  norMtxt: {
    color: '#647789',
    fontSize: 17,
    width : "70%"
  },
});
