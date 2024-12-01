import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import CrimeAndThirills from './Pages/CrimeAndThirills';
import Faritails from './Pages/Faritails';
import Firiction from './Pages/Firiction';
import Litrature from './Pages/Litrature';
import Mystery from './Pages/Mystery';
import Horror from './Pages/Horror';

import UCrimeAndThirills from './Pages/UCrimeAndThirills';
import UFaritails from './Pages/UFaritails';
import UFiriction from './Pages/UFiriction';
import ULitrature from './Pages/ULitrature';
import UMystery from './Pages/UMystery';
import UHorror from './Pages/UHorror';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CrimeAndThirills" element={<CrimeAndThirills />} />
        <Route path="/Faritails" element={<Faritails />} />
        <Route path="/Firiction" element={<Firiction />} />
        <Route path="/Litrature" element={<Litrature />} />
        <Route path="/Mystery" element={<Mystery />} />
        <Route path="/Horror" element={<Horror />} />

        <Route path="/UCrimeAndThirills" element={<UCrimeAndThirills />} />
        <Route path="/UFaritails" element={<UFaritails />} />
        <Route path="/UFiriction" element={<UFiriction />} />
        <Route path="/ULitrature" element={<ULitrature />} />
        <Route path="/UMystery" element={<UMystery />} />
        <Route path="/UHorror" element={<UHorror />} />
      </Routes>
    </Router>
  );
}

export default App;
