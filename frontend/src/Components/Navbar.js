// Components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../WebsitePngs/logo.png';
import './Styles/Navbar.css';

function Navbar() {
  const scrollToClubs = () => {
    const clubsSection = document.getElementById('clubs-section');
    if (clubsSection) {
      clubsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='navbar'>
      <div id='left-nav'>
        <Link to="/"><img src={logo} width={150} alt="Logo"/></Link>
      </div>
      <div id='mid-nav'>
        <Link to="/">Home</Link>
        <a onClick={scrollToClubs}><button>Clubs</button></a>
        <Link to="/events">Events</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div id='right-nav'>
        <Link id='register' to="/register">Register</Link>
        <Link id='login' to="/login">Login</Link>
      </div>
    </div>
  );
}

export default Navbar;
