// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import cowReducer from './features/cows/cowSlice';
import medicalExamReducer from './features/medicalExams/examsSlice'
import birthReducer from './features/birth/birthSlice'
import milkProductionReducer from './features/milkProduction/milkProdutionSlice'
export default configureStore({
  reducer: {
    cows: cowReducer,
    medicalExams:medicalExamReducer,
    births:birthReducer,
    milkProductions:milkProductionReducer
  },
});
