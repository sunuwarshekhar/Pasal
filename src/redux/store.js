import {combineReducers, configureStore} from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage';
import { 
    persistReducer, 
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from 'redux-persist';
import cartReducer from './cartRedux';
import userReducer from './userRedux';

const persistConfig = {
    key: 'root',
    storage,
  }

const rootReducer = combineReducers({ user: userReducer, cart: cartReducer });

const presistedReducer = persistReducer(
    persistConfig, 
    rootReducer
    )

export const store = configureStore({
    reducer: presistedReducer,
    middleware: ( getDefaultMiddleware)=> 
    getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            
        }
    })
})
export const persistor = persistStore(store);