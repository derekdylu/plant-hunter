import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Game from './Containers/Game';
import Terms from './Containers/Terms';

function App() {
  return (
    <>
    <Router future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
      <Routes>
        <Route path="/" element={<Game />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </Router>
      
    </>
  );
}

export default App;
