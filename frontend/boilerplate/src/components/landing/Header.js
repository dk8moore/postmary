
import React from 'react';

function Header() {
    console.log("Test Header");

  return (
    <header className="header">
      <div className="container">
        <div className="logo">My SaaS</div>
        <nav className="nav">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
          <button className="login-button">Login</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
