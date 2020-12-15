import { createStore } from 'redux';
import rootReducer from './rootReducer';
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';

const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware()]
});
  
export default store;

