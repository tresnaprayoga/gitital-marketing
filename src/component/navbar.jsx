import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='navbar-digital-marketing'>
      <div className='navbar-logo-digital-marketing'>
        <img src='/logo3.ico' alt='Logo Nuansa Technology'></img>
      </div>

      {/* Hamburger Icon */}
      <div className={`hamburger-digital-marketing ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span className='bar'></span>
        <span className='bar'></span>
        <span className='bar'></span>
      </div>

      {/* Menu Links */}
      <div className={`links-digital-marketing ${isMenuOpen ? 'active' : ''}`}>
        <a href='#'>PROMO</a>
        <a href='#'>MENU</a>
        <a href='#'>GALERY</a>
        <a href='#'>KONTAK</a>
      </div>
    </div>
  );
};

export default Navbar;
