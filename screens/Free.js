import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Picker,
  Alert,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import React, {useState, useEffect} from 'react';
import {RootState} from '../store';
import {useSelector, useDispatch} from 'react-redux';
import {SetRoom, SetRoomNewData} from '../store/meeting';
const Free = props => {
  const dispatch = useDispatch();
  const [indexx, setindex] = useState(-1);
  const [roomdata, setRoomData] = useState([
    {
      name: 'punjab',
      building: 8,
      flor: 2,
    },
    {
      name: 'tamil nadu',
      building: 8,
      flor: 2,
    },
    {
      name: 'Kaveri',
      building: 8,
      flor: 2,
    },
    {
      name: 'Aryabatt',
      building: 8,
      flor: 2,
    },
  ]);
  
  const rooms = useSelector((state: RootState) => state.meeting.rooms);

  const setdata = () => {
    dispatch(SetRoom(roomdata));
  };

  const dataSetRedux = () => {
    dispatch(SetRoomNewData(1));
    Alert.alert('meeting is set for you .. thank you for chossing us');
    props.navigation.goBack();
  };
  useEffect(() => {
    if(rooms === undefined)
    setdata();
  }, []);

  console.log('roomsrooms', rooms);

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
        <Text style={{textAlign: 'center'}}> Please select a room</Text>
      </View>
      { rooms &&
        rooms.map((item, index) => (
          <TouchableOpacity onPress={() => setindex(index)}>
            <View
              style={
                index === indexx
                  ? styles.boxcontainerselecet
                  : styles.boxconteineruns
              }>
              <Text style={styles.Heading}>{item.name}
              </Text>
    <Text style={styles.norMtxt}>{"building"} {item.building}
              </Text>
              <Text style={styles.norMtxt}>{"floor"} {item.flor}
              </Text>
            </View>
          </TouchableOpacity>
        ))}

      <TouchableOpacity
        onPress={() => dataSetRedux()}
        style={{
          backgroundColor: '#2B79D6',
          borderRadius: 10,
          padding: 10,
          marginHorizontal: 10,
          marginTop: 10,
        }}>
        <Text style={{textAlign: 'center', color: '#fff'}}>Add a meeting</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Free;

const styles = StyleSheet.create({
  boxcontainerselecet: {
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
  boxconteineruns: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    margin: 10,
    borderColor: 'silver',
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 5,
  },
});
