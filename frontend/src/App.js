import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Game from './Containers/Game';
import Terms from './Containers/Terms';
import Stats from './Containers/Stats';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Game />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/stats" element={<Stats />} />
      </Routes>
    </Router>
      
    </>
  );
}

export default App;
