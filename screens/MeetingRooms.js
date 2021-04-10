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
  const renderItem = ({item, index}) => {
    return (
      <View>
        {


dataCheck === 1 ? true : (dataCheck === 2 ? true === item.completed :  false === item.completed )&&
          <View style={styles.boxcontainer}>
            {item.completed !== false && (
              <Image
                style={{
                  height: 15,
                  width: 15,
                  resizeMode: 'contain',
                  position: 'absolute',
                  right: 15,
                  top: 15,
                }}
                source={require('../image/check.png')}></Image>
            )}

            <Text style={styles.Heading}> {index + 1}</Text>
            <Text style={styles.norMtxt}>{item.title} </Text>
            <Text style={styles.norMtxt}>
              {item.completed === false ? 'Pending' : 'Completed'}{' '}
            </Text>
          </View>
        }
      </View>
    );
  };
  //

  const dataCall = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos')
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
      <View
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
      </View>

      <FlatList
        ListHeaderComponent={
          <Text style={{fontSize: 16, fontWeight: 'bold', margin: 10}}>
            count {data.length} files
          </Text>
        }
        data={data}
        renderItem={renderItem}></FlatList>
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
  },
  norMtxt: {
    color: '#647789',
    fontSize: 15,
  },
});
