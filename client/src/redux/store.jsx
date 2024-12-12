// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import cowReducer from './features/cows/cowSlice';

export default configureStore({
  reducer: {
    cows: cowReducer,
  },
});
