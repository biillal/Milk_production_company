// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './pages/Welcome';
import CowRegistration from './pages/CowRegistration';
import MedicalExamination from './pages/MedicalExamination';
import Births from './pages/Births';

const App = () => {
  return (
    <div className=" ">
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/cow-registration" element={<CowRegistration />} />
          <Route path="/medical-exam" element={<MedicalExamination />} />
          <Route path="/birth-records" element={<Births />} />
        </Routes>

      </Router>
    </div>
  );
};

export default App;
