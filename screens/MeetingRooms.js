import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Picker,
  Image,
  FlatList,
  LogBox,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import React, {useEffect, useState} from 'react';
import {RootState} from '../store';
import {useSelector, useDispatch} from 'react-redux';
import * as axios from 'axios';
const MeetingRooms = props => {
  const [data, setdata] = useState([]);
const [dataCheck ,setCheck]= useState(1)

const RowWiseChild = ({c1,c2}) =>{
  return(
    <View style = {{flexDirection :'row', alignItems :'center'}}>
<Text style={styles.Heading}> {c1}</Text>
<Text style={styles.norMtxt}> {c2}</Text>
    </View>
  )
}

  const renderItem = ({item, index}) => {
    return (
      <View>
        {
          <View style={styles.boxcontainer}>
            <RowWiseChild c1 = {"postId"} c2= {item.postId}/>
            <RowWiseChild c1 = {"id"} c2= {item.id}/>
            <RowWiseChild c1 = {"name"} c2= {item.name}/>
            <RowWiseChild c1 = {"email"} c2= {item.email}/>
            <RowWiseChild c1 = {"body"} c2= {item.body}/>
          
            
            {/* <Text style={styles.Heading}> {index + 1}</Text> */}
            {/* <Text style={styles.norMtxt}>postId  :{} </Text>
            <Text style={styles.norMtxt}>      :{item.id} </Text>
            <Text style={styles.norMtxt}>    :{item.name} </Text>
            <Text style={styles.norMtxt}>   :{item.email} </Text>
            <Text style={styles.norMtxt}>   :{item.body} </Text> */}
          </View>
        }
      </View>
    );
  };
  //

  const dataCall = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/comments?postId=1')
      .then(function (response) {
        console.log(response.data);
        setdata(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    dataCall();



    LogBox.ignoreAllLogs()
  }, []);

  return (
    <View style={{flex: 1}}>
      <TouchableOpacity style = {{padding : 8 , backgroundColor:  "#fff", marginHorizontal: 10,borderRadius : 5, borderColor :'blue', borderWidth : 1}} onPress = {() => [props.navigation.navigate('Number')]}>
        <Text style = {{textAlign :'center', color :"blue"}}>Check Number</Text>
      </TouchableOpacity>
      {/* <View
        style={{
          padding: 10,
          borderRadius: 5,
          borderColor: 'silver',
          borderWidth: 1,
          marginHorizontal: 10,
          marginVertical: 10,
        }}>
        <RNPickerSelect
          onValueChange={value => setCheck(value)
          
        
        }
          items={[
            {label: 'All', value: 1},
            {label: 'Completed', value: 2},
            {label: 'Pending', value: 3},
          ]}
        />
      </View> */}

      <FlatList
        ListHeaderComponent={
          <Text style={{fontSize: 16, fontWeight: 'bold', margin: 10}}>
            count {data.length} files
          </Text>
        }
        data={data}
        renderItem={renderItem}
        ></FlatList>
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
