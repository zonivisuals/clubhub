import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Home from './Components/Home.js';
import Navbar from './Components/Navbar.js';
import Clubs from './Components/Clubs.js';
import Login from './Components/login.js'
import Register from './Components/register.js'

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
