// import { request } from '../Services/common';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { User } from '../models/user';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { State } from 'react-native-gesture-handler';

interface meetingState {
  // user: User | null;
  token: string;
  totalroom: Number;
  freeroom:Number;
  totalBuilding : Number;
  totalMeeting : Number;
  goingOn : number;
  rooms:[] |null;
}

let initialState: meetingState = {
  totalroom : 20,
 freeroom : 5,
  totalBuilding : 4, 
  totalMeeting : 100,
  goingOn: 10,
rooms:[
    {
        name : "punjab",
        building : 8, 
        flor: 2
    },
    {
        name : "tamil nadu",
        building : 8, 
        flor: 2
    }
    ,{
        name : "Kaveri",
        building : 8, 
        flor: 2
    }
    ,{
        name : "Aryabatt",
        building : 8, 
        flor: 2
    }
]|[]
  // Currency: "",
  // Supplements_id: '',
  // no_of_items_in_cart: 0,
  // selected_lang:'',
  // langauge_Check : false,
};
const slice = createSlice({
  name: 'meeting',
  initialState,
  reducers: {
    SetRoom: (state, action) => {

    state.rooms = action.payload




     },

     SetRoomNewData: (state, action) => {
        let data = state.rooms
        data.splice(action.payload ,1 )

        state.rooms = data

        // state.freeroom = state.freeroom -1 
    
    
    
    
         },
      
  
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

export const { SetRoom, SetRoomNewData } = slice.actions;
// export { getProfileDetails, login, logout ,myCartData , };
export default slice.reducer;
