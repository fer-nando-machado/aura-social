import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="Header">
      <img src={process.env.REACT_APP_IMAGES + "lotus.svg"} alt="" />
      <div>Aura SociaL</div>
    </div>
  )
}

export default Header;
