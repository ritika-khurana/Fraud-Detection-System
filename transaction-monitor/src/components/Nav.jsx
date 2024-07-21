// Navbar.js
import React from 'react';
import { FaSearch, FaPencilAlt } from 'react-icons/fa';

const Nav = () => {
  return (
    <nav className="nav2">
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <FaSearch className="search-icon" />
      </div>
      <div className="nav-buttons">
        <div className="nav-button">
          <FaPencilAlt className="icon" />
          <p>Write</p>
        </div>
        <div className="nav-signin">Sign In</div>
        <div className="nav-signup">Sign Up</div>
      </div>
    </nav>
  );
};

export default Nav;
