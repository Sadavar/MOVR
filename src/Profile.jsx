// NavBar.js
import { useState } from 'react';
import './Profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
     <button className="toggle-btn" onClick={toggleNav}>
      <FontAwesomeIcon icon={faUser} size='2xl' />
      </button>
  
    <div className={`nav-bar ${isOpen ? 'active' : ''}`}>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      {/* <h1>fuck</h1>
      <FontAwesomeIcon icon={faUser} size='2xl' /> */}

      
    </div>
    </>
  );
};

export default NavBar;