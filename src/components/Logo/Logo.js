import React from 'react';

import burgerLogo from '../../assets/images/burger-logo.png';
import './Logo.css';

const logo = () => (
  <div className="logo">
    <img src={burgerLogo} alt="My Burger" />
  </div>
);

export default logo;
