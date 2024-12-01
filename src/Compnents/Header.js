import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import './Header.css'; 
import b from './Logo.png';

function Header() {
  return (
    <div className="header-container">
      <img src={b} alt="Logo" width={80} />
      <div className="icon-container">
        <FontAwesomeIcon icon={faShoppingCart} className="icon" />
        <FontAwesomeIcon icon={faUser} className="icon" />
      </div>
    </div>
  );
}

export default Header;
