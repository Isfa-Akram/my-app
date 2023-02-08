import { configureStore } from '@reduxjs/toolkit';
import navReducer from './slices/navSlice';

const store = configureStore({
  reducer: {
    //connected navigation to the store 
    nav: navReducer,
  },
});

export default store;