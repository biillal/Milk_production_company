// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './pages/Welcome';
import CowRegistration from './pages/CowRegistration';
import Births from './pages/Births';
import { CreateMedicalExam } from './pages/MedicalExam/CreateMedicalExam';
import MedicalExamination from './pages/MedicalExam/MedicalExamination';
import MilkProduction from './pages/MilkProduction';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <div className=" ">
       <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/cow-registration" element={<CowRegistration />} />
          <Route path="/medical-exam" element={<MedicalExamination />} />
          <Route path='/medical-exam/:Cow_number/cows' element={<CreateMedicalExam />} />
          <Route path="/birth-records" element={<Births />} />
          <Route path="/milk-production" element={<MilkProduction />} />
        </Routes>

      </Router>
    </div>
  );
};

export default App;
