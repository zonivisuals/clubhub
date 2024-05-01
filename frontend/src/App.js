import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Home from './Components/Home.js';
import Navbar from './Components/Navbar.js';
import Clubs from './Components/Clubs.js';
import Login from './Components/login.js'
import Register from './Components/register.js'
import Contact from './Components/Contact.js'
import Events from './Components/Events.js'

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Events" element={<Events />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
