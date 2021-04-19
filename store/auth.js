// import { request } from '../Services/common';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { User } from '../models/user';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { State } from 'react-native-gesture-handler';

interface AuthState {

  token: string;
}

let initialState: AuthState = {
  // user: null,
  token: '',
  // Currency: "",
  // Supplements_id: '',
  // no_of_items_in_cart: 0,
  // selected_lang:'',
  // langauge_Check : false,
};

// const getProfileDetails: any = createAsyncThunk(
//   'getProfileDetails',
//   async (data, { rejectWithValue }) => {
//     try {
//       let response = await request('get', '/common/my-profile-page');
//       return response.data;
//     } catch (e) {
//       return rejectWithValue(e.response.data);
//     }
//   },
// );


// const myCartData: any = createAsyncThunk(
//   'myCartData',
//   async (data, { rejectWithValue }) => {
//     try {
//       let response = await request('get', '/common/number_of_items_in_cart');

//       console.log("response.data =====" , response.data)
//       return response.data;
//     } catch (e) {
//       return rejectWithValue(e.response.data);
//     }
//   },
// );
// const getProfileDetails: any = createAsyncThunk(
//   'geProfileDetails',
//   async (data, thunkAPI) => {
//     const response: any = await request('get', '/doctors/get-details');
//     return response.data;
//   },
// );
// const logout: any = createAsyncThunk(
//   'logout',
//   async (data, { rejectWithValue }) => {
//     // const abc = await AsyncStorage.getItem('token');

//     console.log("data", data);
//     try {
//       let response = await request("post", "/auth/logout", data);
//       return response.data;
//     }
//     catch (e) {
//       return rejectWithValue(e.response.data)

//     }

//   }
// );

// const login: any = createAsyncThunk(
//   'login',
//   async (data, { rejectWithValue }) => {
//     try {
//       let response = await request('post', '/auth/login', data);
//       console.log(response.data)
//       return response.data;
//     } catch (e) {
//       console.log( "dxfvxcv",e.response.data)
//       return rejectWithValue(e.response.data);
//     }
//     // catch (e) {
//     //   return rejectWithValue(e.response.data)

//     // }
//   },
// );

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {

      state.token = "jay shah" 




     },
    logoutSuccess: (state) => {
      // state.user = null;
      state.token = "" 
    },

    setLangauge : (state, action) => {

      // console.log("action.payload", action.payload)
      //   state.selected_lang = action.payload;
      },

      langaugeCheck : (state, action) => {
    

      }
     ,
  
  },
  extraReducers: {
  

  },
});

export const { loginSuccess, logoutSuccess ,setLangauge , langaugeCheck } = slice.actions;
export default slice.reducer;
