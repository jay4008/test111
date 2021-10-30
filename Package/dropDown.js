import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  Image,
  View,
  Modal,
  Dimensions,
  FlatList,
  Alert,
} from 'react-native';
//  const getFilteredData: (items: IModalListInDto<object>[], autoSort: boolean, searchText: string) => IModalListInDto<object>[];
const { width, height } = Dimensions.get('window');
const DropDown = ({ multiSelect = false }) => {
  const [data, setData] = useState([
    {
      value: 'jay shah',
    },
    {
      value: 'Koushik paul',
    },
    {
      value: 'Niladri roy',
    },
    {
      value: 'Madhu Gupta',
    },
    {
      value: 'jay shah',
    },
    {
      value: 'Koushik paul',
    },
    {
      value: 'Niladri roy',
    },
    {
      value: 'Madhu Gupta',
    },
  ]);


  const [selectedData, setSelecteddata] = useState([])
  return (
    <View>
      <SafeAreaView>
        <SuggestionViewInput
          setSelecteddata={setSelecteddata}
          contentName={'jays shah'}
          data={multiSelect ? selectedData : selectedData}
          placeholder={'Please tap on it'}></SuggestionViewInput>
      </SafeAreaView>
    </View>
  );
};

const SuggestionViewInput = ({
  height = 70,
  setOnEdit,
  contentName = '',
  data = [],
  setData,
  iscall,
  placeholder = '',
  style,
  error = true,
  onFocus,
  onEndEditing,
  Value,
  setValue,
  setIndexPopUp,
  multiData = false,
  scrollEnabled = true,
  index = -1,
  removeIcon = '',
  editable = true,
  selectedData,
  setSelecteddata,
}) => {
  const [modal, setModal] = useState(false);
  const [dropDownData, setDropDownData] = useState([
    {
      label: 'bay shah',
      key: 'jay shah',
    },
    {
      label: 'aoushik Paul',
      key: 'Koushik Paul',
    },
    {
      label: 'Niladri roy',
      key: 'Niladri roy',
    },
    {
      label: 'Madhu gupta',
      key: 'Madhu gupta',
    },
  ]);

  const [forceRender, setForceRender] = useState(false);
  const [IsShow, setIsshow] = useState(false);
  const deleteItem = index => {
    if (editable) {
      let LocalData = data;
      LocalData.splice(index, 1);
      setData(LocalData);
      setForceRender(false);
    }
  };

  const [updateCount, setUpdateCount] = useState(0);
  useEffect(() => {
    if (!forceRender) {
      setUpdateCount(updateCount + 1)
      if (updateCount === 2) {
        setForceRender(true);
        setUpdateCount(0)
      }

    }
  }, [forceRender, updateCount]);
  return (
    <View style={{ zIndex: 1 }}>
      {contentName != '' && (
        <Text style={styles.contentName}>{contentName}</Text>
      )}
      <ScrollView
        keyboardShouldPersistTaps="handled"
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
        scrollEnabled={scrollEnabled}
        style={{
          backgroundColor: '#fff',
          padding: 10,
          paddingTop: 0,
          height: height,
          zIndex: 1,
          ...style,
        }}>
        <TouchableOpacity onPress={() => setModal(true)} activeOpacity={1}>
          {data?.length === 0 && (
            <Text style={{ paddingTop: 10 }}>{placeholder}</Text>
          )}

          <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 10 }}>
            {forceRender &&
              data.map((item, index) => (
                <View
                  key={index.toString()}
                  style={{
                    backgroundColor: '#D0D0D0',
                    marginRight: 15,
                    paddingVertical: 5,
                    paddingHorizontal: 10,
                    marginBottom: 5,
                    borderRadius: 5,
                  }}>
                  <Text style={styles.ItemTxt}>{item?.label}</Text>
                  {editable && (
                    <View style={{ position: 'absolute', top: -5, right: -5 }}>
                      <TouchableOpacity
                        style={{ height: 30, width: 30 }}
                        onPress={() => deleteItem(index)}>
                        <Image
                          style={{
                            marginLeft: 15,
                            height: 15,
                            width: 15,
                            marginBottom: 15,
                            backgroundColor: '#000',
                            resizeMode: 'contain',
                          }}
                          source={
                            removeIcon !== ''
                              ? removeIcon
                              : {
                                uri: 'https://icon-library.com/images/cancel-icon-transparent/cancel-icon-transparent-25.jpg',
                              }
                          }></Image>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
              ))}
          </View>
        </TouchableOpacity>
      </ScrollView>

      {error && (
        <Text style={{ ...styles.errorText }}>{'This field is mandatory'}</Text>
      )}

      {
        modal && <DropDownPicker selectedData={data} setDropDownData={setDropDownData} dropDownData={dropDownData} setSelecteddata={setSelecteddata} setModal={setModal} />
      }

    </View>
  );
};

const DropDownPicker = ({ setModal, setSelecteddata, dropDownData, selectedData, setDropDownData }) => {
  const [data, setData] = useState(dropDownData);
  const [alphabet, setAlphbet] = useState([
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ]);

  useEffect(() => {
    setData(dropDownData);
  }, [dropDownData])
  const [tempData, setTempdata] = useState([]);

  const [number, setNumber] = useState([
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
  ]);
  const [searchedOption, setSearchOption] = useState(true);
  const [forcerender, setForceRender] = useState(true);

  const [dataUpdate, setdataUpdate] = useState(false);
  useEffect(() => {
    if (dataUpdate) {
      setData(data);
      setdataUpdate(false);
    }
  }, [dataUpdate])



  useEffect(() => {
    if (searchTxt === "")
      setData(dropDownData);
  }, [searchTxt])
  const [searchTxt, setSearchTxt] = useState("")
  const filterSearch = (searchTxt) => {
    if (searchTxt === "") {
      setData(dropDownData);
      return
    }
    let new_data = dropDownData.filter((listItem) => {
      console.log(listItem?.label, listItem?.label?.toLowerCase().includes(searchTxt.toLowerCase()));
      return listItem?.label?.toLowerCase().includes(searchTxt.toLowerCase());
    }
    );

    if (searchTxt === "") {
      new_data = dropDownData
    }
    if (new_data.length === dropDownData.length) {
      if (searchTxt === "") {
        return
      }
      filterSearch();
      setdataUpdate(true);

    }
    console.log("new_datanew_data", new_data);
    setData(new_data);
    setdataUpdate(true);
  };
  useEffect(() => {
    //   let data =  dropDownData.sort( (a, b) => {
    //         {let value= a.label - b.label; console.log(value); return value}
    //     });
    //    ;

    // console.log(
    //   ' dropDownData.sort(function(a, b){return a.label-b.label})',
    // dropDownData.sort(function (a, b) {
    //   return a.label - b.label;
    // }),
    // );
    // setDropDownData(
    //   dropDownData.sort((a, b) =>
    //     a.label > b.label ? 1 : b.label > a.label ? -1 : 0,
    //   ),
    // );
  });

  useEffect(() => {
    setTempdata(selectedData);

  }, [])
  const renderItem = ({ item, index }) => {
    let Icon = tempData.includes(item)
    return (
      <TouchableOpacity
        key={index.toString()}
        style={{
          flexDirection: 'row',
          width: width - 30,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
        onPress={() => {
          let data = tempData;
          console.log('data', data);
          data.push(item);
          setTempdata(data);
          setSelecteddata(data);
          setForceRender(false);
        }}>
        <Text
          style={{ width: width - 100, paddingLeft: 20, paddingVertical: 10 }}>
          {item.label}
        </Text>
        {Icon && (
          <Image
            source={{
              uri: 'https://messengernews.fb.com/wp-content/uploads/2018/08/checkmark.png',
            }}
            style={{ height: 20, width: 20, resizeMode: 'contain' }}></Image>
        )}
      </TouchableOpacity>
    );
  };
  return (
    <Modal>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TextInput
          style={{
            borderColor: 'silver',
            borderRadius: 10,
            borderWidth: 1,
            marginHorizontal: 10,
            marginTop: 10,
            height: 40,
            paddingHorizontal: 10,
            width: width - 100,
          }}
          value={searchTxt}
          onChangeText={(searchTxt) => {
            filterSearch(searchTxt);
            setSearchTxt(searchTxt);
          }}
          placeholder={'Search...'}
        />
        <TouchableOpacity onPress={() => setModal(false)}>
          <Image
            style={{
              height: 30,
              width: 30,
              marginRight: 10,

              backgroundColor: '#000',
              resizeMode: 'contain',
            }}
            source={{
              uri: 'https://icon-library.com/images/cancel-icon-transparent/cancel-icon-transparent-25.jpg',
            }}></Image>
        </TouchableOpacity>
      </View>
      <View
        style={{
          position: 'absolute',
          width: 20,
          height: height,
          top: 60,
          right: 0,
          backgroundColor: '#fff',
        }}>
        {!searchedOption &&
          alphabet.map((item, index) => (
            <TouchableOpacity>
              <Text>{item}</Text>
            </TouchableOpacity>
          ))}

        {searchedOption &&
          number.map((item, index) => (
            <TouchableOpacity>
              <Text>{item}</Text>
            </TouchableOpacity>
          ))}
      </View>
      {
        !dataUpdate && <FlatList
          renderItem={renderItem}
          data={data}
          extraData={[tempData, data]}
          ListFooterComponent={() => (
            <View
              style={{
                flexDirection: 'row',
                width: width,
                alignItems: 'center',
                marginBottom: 200,
                marginTop: 50,
                justifyContent: 'space-evenly',
              }}>
              {/* <TouchableOpacity onPress = {() => {
    setForceRender(false)
    setTempdata(dropDownData)
} } style = {{width : width/2 - 30 , alignItems :'center', justifyContent :'center',padding : 10 , borderColor :'silver' , borderWidth : 1, borderRadius : 10}}>
    <Text>Select All</Text>
    
</TouchableOpacity> */}

              <TouchableOpacity
                onPress={() => setTempdata([])}
                style={{
                  width: width - 100,
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 10,
                  borderColor: 'silver',
                  borderWidth: 1,
                  borderRadius: 10,
                }}>
                <Text>Clear All</Text>
              </TouchableOpacity>
            </View>
          )}></FlatList>
      }

      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 50,
          right: 40,
          backgroundColor: 'silver',
          height: 60,
          width: 60,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 30,
        }}
        onPress={() => setSearchOption(!searchedOption)}>
        <Text style={{ fontSize: 10, color: '#fff', fontWeight: 'bold' }}>
          {searchedOption ? 'Alphabet' : 'Number'}{' '}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          if (tempData.length === 0) {
            Alert.alert('Alert', 'Please select aleast one item');
          } else {
            setModal(false)
          }
        }}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 10,
          borderTopColor: 'silver',
          borderTopWidth: 1,
          borderBottomColor: 'silver',
          borderBottomWidth: 1,
        }}>
        <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Done</Text>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  contentName: {
    color: '#1F306E',
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    paddingHorizontal: 15,
  },
  SuggestionInput: {
    marginBottom: 30,
    backgroundColor: '#F7F7F7',
    color: 'silver',
    fontSize: 14,
    paddingVertical: 0,
  },
  errorText: {
    fontSize: 10,
    color: '#FE0000',
    marginTop: 5,
    paddingHorizontal: 15,
  },
});
export default DropDown;
