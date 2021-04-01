// import { request } from '../Services/common';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { User } from '../models/user';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { State } from 'react-native-gesture-handler';

interface AuthState {
  // user: User | null;
  token: string;
  // Supplements_id: string;
  // Currency: string;
  // no_of_items_in_cart: number;
  // selected_lang :string;
  // langauge_Check : boolean;
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
        // state.langauge_Check =  !state.langauge_Check;

      }
     ,
    // increaseCart: (state, action) => {
    //   state.no_of_items_in_cart = state.no_of_items_in_cart + 1;
    // },

    // decreaseCart: (state, action) => {
    //   state.no_of_items_in_cart = state.no_of_items_in_cart - 1;
    // },
    // setCart: (state, action) => {
    //   state.no_of_items_in_cart = 1;
    // },

    // setCartValuesCheckout: (state, action) => {
    //   console.log("action" , action.payload)
    //   state.no_of_items_in_cart = state.no_of_items_in_cart - Number(action.payload);
    // },
    // setUserDetails: (state, action) => {
    //   let userFields = action.payload;
    //   let userDetails: any = { ...state.user };
    //   for (const [key, value] of Object.entries(userFields)) {
    //     userDetails[key] = value;
    //   }login
    //   state.user = new User(userDetails);
    // },
  },
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed
//     [getProfileDetails.fulfilled]: (state, action) => {
//       console.log(" dadddddd", action.payload.data.customer_details)
//       state.user = new User(action.payload.data.customer_details);
//     },
//     [getProfileDetails.rejected]: (state, action) => {
//       // state.user = new User(action.payload);
//     },
//     [login.fulfilled]: (state, action) => {
//       state.user = new User(action.payload.data.user_details);
//       state.Supplements_id = action.payload.data.Supplements_id;
//       state.Currency = action.payload.data.currency;
//       state.no_of_items_in_cart = Number(action.payload.data.no_of_items_in_cart);
//       AsyncStorage.setItem('token', action.payload.data.token);
//     },
//     [login.rejected]: (state, action) => {
//       // console.log("fail",action)
//     },
//     [logout.fulfilled]: (state, action) => {

//       state.user = null
//       state.Supplements_id = action.payload.data.Supplements_id;

//     },
//     [logout.rejected]: (state, action) => {
//       state.user = null

//     }
// ,
//     [myCartData.fulfilled]: (state, action) => {
//       // state.user = null

//       console.log("action.payload", action.payload)
//       state.no_of_items_in_cart = action.payload.message.noOfItemsInCart;
//     },
//     [myCartData.rejected]: (state, action) => {
    
//       console.log("action.payload", action.payload)
//       // state.user = new User(action.payload);
//     },

  },
});

export const { loginSuccess, logoutSuccess ,setLangauge , langaugeCheck } = slice.actions;
// export { getProfileDetails, login, logout ,myCartData , };
export default slice.reducer;
