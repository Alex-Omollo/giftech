import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import SchoolsPage from './pages/SchoolsPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          {/* <Route path="/schools" element={<SchoolsPage />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;