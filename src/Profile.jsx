// NavBar.js
import { useState } from 'react';
import './Profile.css';
import Selina from './assets/selina.png'
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
        <ul className='nav-list'>
            <a href="#" className="selina-circle" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={Selina} alt="Logo" className="nav-logo" style={{ width: '150px', height: '150px' }} />
            </a>
            <li><a href="#"><h1>Selina Liu</h1></a></li>
        </ul>
    </div>
    </>
  );
};
export default NavBar;