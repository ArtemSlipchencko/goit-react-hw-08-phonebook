import { createStore } from 'redux';
import rootReducer from './rootReducer';
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {persistStore} from 'redux-persist';

export const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware()]
});
  
export const persistor = persistStore(store);

