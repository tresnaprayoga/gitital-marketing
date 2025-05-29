import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='navbar'>
      <div className='navbar-logo'>
        <img src='/logo3.ico' alt='Logo Nuansa Technology'></img>
      </div>

      {/* Hamburger Icon */}
      <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span className='bar'></span>
        <span className='bar'></span>
        <span className='bar'></span>
      </div>

      {/* Menu Links */}
      <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <a href='#'>PROMO</a>
        <a href='#'>MENU</a>
        <a href='#'>GALERY</a>
        <a href='#'>KONTAK</a>
      </div>

      {/* <div className='navbar-buttons'>
        <button className='my-account-btn'>My Account</button>
        <button className='signup-btn'>Sign Up</button>
      </div> */}
    </div>
  );
};

export default Navbar;
