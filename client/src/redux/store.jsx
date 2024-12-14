// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import cowReducer from './features/cows/cowSlice';
import medicalExamReducer from './features/medicalExams/examsSlice'
export default configureStore({
  reducer: {
    cows: cowReducer,
    medicalExams:medicalExamReducer
  },
});
