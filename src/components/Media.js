import React, { useState } from 'react';
// import './App.css';
// import card from './project.module.css';
import './MediaStyle.css';

function Project() {
  // State for mobile menu visibility
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  // Function to toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuVisible(!isMobileMenuVisible);
  }

  return (
    <div className="App">
      {/* Header */}
      <header>
        {/* Logo */}
        <div className="logo">
          {/* Add logo image or text */}
          <p>Onclick</p>

        </div>

        {/* Navigation */}
        <nav className={`navigation ${isMobileMenuVisible ? 'show-menu' : ''}`}>
          {/* Add navigation links */}
          <div className="menu">
          
            <ul className="home">
              <li>Home</li>
              <li>Services</li>
              <li>Contact</li>
              <li>About Us</li>
              </ul>
           
           
              <ul className="login">
                <li>Login</li>
                <li>Sign Up</li>
                </ul>
             
              </div>

        </nav>

        {/* Mobile menu toggle */}
        <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          {/* Add mobile menu icon */}
        </div>
      </header>

      {/* Section below header */}
      <section className="main-section">
        {/* Left side */}
        <div className="left-side">
            <h2>Let's bring your team together in onclick</h2>
            <p>We help you to manage all of your Work and daily task in office</p>
            <div className='btn'>
            <button>Get Started</button>
            </div>
            
          {/* Add text and button */}
        </div>

        {/* Right side */}
        <div className="right-side">
          {/* Add image */}
          <img src='https://i.pinimg.com/originals/b3/31/1d/b3311d7b4caee74ea8e64778e193ab38.png' alt='time management'/>
        </div>
      </section>
    </div>
  );
}

export default Project;
