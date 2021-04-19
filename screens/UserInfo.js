import React, {useEffect, useState} from 'react';

import {
  Modal,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
const winWidth = Dimensions.get('window').width;
import * as Animatable from 'react-native-animatable';
const UserInfo = ({
  setdata,
  setShowModal,


}) => {



  const [name , setname]= useState("")
  const [Address , setaddress]= useState("")
  const [City, setcity]= useState("")
  const [Phone, setphone]= useState("")
  const dispatch = useDispatch();
 const [starIndex , setStartIndex] = useState( -1)

 const onsubmit = () =>{
  if(name.length <= 0){
    Alert.alert("Name cant empty")
    return
  }
  if(name.length <= 2){
    Alert.alert("Name must 3 character long")
    return
  }

  if(Address.length <= 0){
    Alert.alert("Address cant empty")
    return
  }

  if(City.length <= 0){
    Alert.alert("City cant empty")
    return
  }

  if(Phone.length <= 0){
    Alert.alert("Phone cant empty")
    return
  }



  let data = {
    name : name,
    Address : Address,
    City : City ,
    phone : Phone
  }

  setdata(data)


  setShowModal(false)
 }
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Modal
          // onTouchCancel={true}
          animationType={'slide'}
          transparent={true}
          style={styles.modalContainer}
          visible={true}
          onRequestClose={() => {
            // handleModal();
            setShowModal(false);
          }}>
          <Animatable.View
            style={styles.modal}
            iterationCount={1}
            animation={'zoomIn'}
            duration={1000}>
            <View style={styles.modalView}>
              <View style={styles.HeaderTxtView}>
                <Text style={styles.HeaderTxt}>{'Enter the following fileds'}</Text>
                <TouchableOpacity
                  style={styles.cancelBtn}
                  onPress={() => setShowModal(false)}
                  //   onPress={() =>
                  // setShowShippingModal(false)
                  //   }
                >
                  {/* <Image
                    style={styles.btnCancel}
                    source={require('../../assets/icons/cancelModal.png')}></Image> */}
                </TouchableOpacity>
              </View>
            <View style = {{paddingBottom : 10,paddingHorizontal : 10}}>
    
    <TextInput style = {{ borderColor :"silver", borderWidth : 1, padding : 10, borderRadius : 5 , marginTop : 10}} placeholder = {'Enter name'} value = {name} onChangeText = {(txt) => setname(txt)}></TextInput>
    <TextInput style = {{ borderColor :"silver", borderWidth : 1, padding : 10, borderRadius : 5 , marginTop : 10}} placeholder = {'Enter Address'}value = {Address} onChangeText = {(txt) => setaddress(txt)}></TextInput>
    <TextInput style = {{ borderColor :"silver", borderWidth : 1, padding : 10, borderRadius : 5 , marginTop : 10}} placeholder = {'Enter City'}value = {City} onChangeText = {(txt) => setcity(txt)}></TextInput>
    <TextInput style = {{ borderColor :"silver", borderWidth : 1, padding : 10, borderRadius : 5 , marginTop : 10}} placeholder = {'Enter Phone'}value = {Phone} onChangeText = {(txt) => setphone(txt)}></TextInput>



        </View>
        <TouchableOpacity style = {{padding : 8 ,marginVertical: 10, backgroundColor:  "#fff", marginHorizontal: 10,borderRadius : 5, borderColor :'blue', borderWidth : 1}} onPress = {()=> onsubmit()}>
        <Text style = {{textAlign :'center', color :"blue"}}>Submit</Text>
      </TouchableOpacity>
{/* <CusButtom text = {'Submit'} BTNstyle = {{marginHorizontal : 10, marginBottom : 10}}></CusButtom> */}
            </View>
          </Animatable.View>
    
        </Modal>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {},
  deliveryTypeTxt: {
    fontSize: 13,
    color: 'black',
    fontWeight: 'bold',
  },

  deliveryTxtAll: {
    fontSize: 13,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#696969',
    marginTop: 30,
  },
  countryTxt: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00D8AD',
  },
  cancelBtn: {
    // marginRight: winWidth - 80,
    position: 'absolute',
    right: 20,
    height: 25,
    width: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rateBtnTxt: {
    color: '#0378F8',
  },
  HeaderTxt: {
    color: '#fff',
    fontSize: 16,
    width: '100%',
    // fontFamily :'roboto-thin',
    textAlign: 'center',
  },
  btnImg: {
    height: 25,
    width: 25,
    resizeMode: 'stretch',
  },
  btnCancel: {
    height: 20,
    width: 20,
    marginLeft: 20,
    // marginBottom: 20,
    resizeMode: 'stretch',
  },
  line: {
    height: 0.5,
    backgroundColor: '#818181',
    width: '100%',
    marginVertical: 5,
  },
  contentTxt: {
    color: '#818181',
    width: '95%',
    fontSize: 13,
    lineHeight: 17,
    letterSpacing: 1,
  },
  checkBoxTxt: {
    color: '#818181',
    fontSize: 14,
  },
  modalView: {
    borderRadius: 10,
    width: winWidth - 20,

    backgroundColor: '#ffffff',
  },

  contentView: {
    padding: 10,
    height: Dimensions.get('window').height * 0.8,
  },
  selectAllCheckBoxStyle: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  HeaderTxtView: {
    backgroundColor: '#4785ff',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  modalContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(105,105,105, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelView: {
    flex: 1,
  },
  text: {
    color: '#3f2949',
    marginTop: 10,
  },
});

export default UserInfo;
