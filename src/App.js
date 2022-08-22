import React from 'react';
import { BrowserRouter as Router, Routes, Route }  from 'react-router-dom';
import Home from "./components/home/home";
import Login from "./components/login/login";
import Signup from "./components/signup/signup";

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
