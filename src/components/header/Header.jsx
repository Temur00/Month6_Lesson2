import React from 'react';
import { logo } from '../../assets';
import './Header.scss';

const Header = () => {
  return (
    <div>
      <img src={logo} alt="" />
      <h1>Header component</h1>
    </div>
  );
};

export default Header;
