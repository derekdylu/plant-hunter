import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Game from './Containers/Game';
import Terms from './Containers/Terms';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Game />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </Router>
      
    </>
  );
}

export default App;
