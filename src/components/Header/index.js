import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { CgProfile } from "react-icons/cg";
import { FaCartShopping } from "react-icons/fa6";

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Navbar className='header-bg-container' expand="md">
      <Navbar.Brand className='logo-container'>
        <img
          className="logo"
          src="https://s3-alpha-sig.figma.com/img/7220/1328/eefc66cd70960daab6449206c3540858?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IZj9rZ8pk0DIPcS2gKzcDeslH6xchJ--XbU~C~owkS5n12psMSHEc5JLnmtBqZj7Vn~PDRKvvfd3LMAAqOLeS8rUSTIaBpqfw1IH~RarF6TEPIpWDQcLG4mPhvhaGl52L0aF7TV5uyRtFDsS3r0eqIy6sM8vBwxGiPHU0NUoV9ryEbIuJz4StnWANiDRBUP5-niwgRODOkPjFHOLb-2mnal4LB9Gz104NjhXPLD4qI-l79aNCrAfVhZAMCsyksp6liOQ5gM1cl-KIp2J0o6gs6SOhmmHmrjz25yGvb9mNGsWoUxa25a6sLeVS4mYChjxGFOL0rsZ-GZ663dYfGLLNg__"
          alt="Chaperone Logo"
          width="50"
        />
        <span className="logo-name">Chaperone</span>
      </Navbar.Brand>
      
      <Navbar.Toggle 
        onClick={handleToggle}
        aria-expanded={isExpanded}
        className='toggle'
      >
        {isExpanded ? (
          <ImCross className='toggle-icon'/>
        ) : (
          <GiHamburgerMenu className='toggle-icon'/>
        )}
      </Navbar.Toggle>
      
      <Navbar.Collapse  className={`${isExpanded ? 'expanded' : ''}`}>
        <Nav className="me-auto">
          <Nav className='header-items'>
             Home
          </Nav>
          <Nav className='plants'>
             Plants & Pots
          </Nav>
          <Nav className='header-items'>
             Tools
          </Nav>
          <Nav className='header-items'>
            Our Services
          </Nav>
          <Nav className='header-items'>
            Blog
          </Nav>
          <Nav className='header-items'>
            Our Story
          </Nav>
          <Nav className='header-items'>
            FAQS
          </Nav>
        </Nav>
        <Nav className='profile'>
        <div>
            {!isExpanded && <CgProfile className='profile-icon'/>} 
             <p className='profile-text'>Profile</p>
          </div>
          <div>
            {!isExpanded && <FaCartShopping className='profile-icon'/>} 
            <p className='profile-text'>Cart</p>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
