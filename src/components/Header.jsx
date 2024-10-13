import React from 'react';
import logo from '../assets/jfLogo.png'; // Adjust the path to your logo image

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <img src={logo} alt="My Portfolio Logo" />
      </div>

    </header>
  );
}

export default Header;
