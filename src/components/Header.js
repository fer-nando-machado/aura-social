import React from 'react';
import './Header.css';

function Header({inner}) {
  const className = "Header " + (inner ? "HeaderInner" : "")

  return (
    <div className={className}>
      <img src={`${process.env.REACT_APP_IMAGES}lotus.svg`} alt="Aura Social" />
      <div className="HeaderTitle">Aura SociaL</div>
    </div>
  )
}

export default Header;
