import { configureStore, getDefaultMiddleware,combineReducers } from '@reduxjs/toolkit';
import meetingReducer from "./meeting";


import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const middleware = [...getDefaultMiddleware({
    serializableCheck: false
}
)];


const rootReducer = combineReducers({
    // auth: authReducer,
    meeting: meetingReducer,
    // details:detailsReducer,
    // treatment:treatmentReducer,
    // productDetails:productDetails

})

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['meeting', ], //Things u want to persist
    // blacklist: ['medGlobalSearch','brands','rapidResponse','news','notifications'], //Things u dont
  };
  
  // Middleware: Redux Persist Persisted Reducer
  const persistedReducer = persistReducer(persistConfig, rootReducer);


const store =  configureStore({
    reducer: persistedReducer,
    middleware
});

let persistor = persistStore(store);

export type RootState = ReturnType<typeof persistedReducer>
export type AppDispatch = typeof store.dispatch

export default store;
export {
    persistor,
};
