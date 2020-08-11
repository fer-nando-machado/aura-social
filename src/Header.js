import React from 'react';
import './Header.css';

function Header({className}) {
  return (
    <div className={`Header ${className}`}>
      <a href="/aura-social/">
        <img src={process.env.REACT_APP_IMAGES + "lotus.svg"} alt="" />
        <div className="HeaderTitle">Aura SociaL</div>
      </a>
    </div>
  )
}

export default Header;
