import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/newlogo.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-section">
        <img src={logo} alt="Library Logo" className="logo-img" />
        <h2 className="logo-text"></h2>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/add">Add Book</Link></li>
        <li><Link to="/list">View Books</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
