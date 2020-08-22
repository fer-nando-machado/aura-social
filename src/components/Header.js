import React from "react"
import "./Header.css"

function Header({ inner }) {
  const className = "Header " + (inner ? "HeaderInner" : "")

  return (
    <div className={className}>
      <a href="/aura-social/">
        <img src={`${process.env.REACT_APP_IMAGES}lotus.svg`} alt="" />
      </a>
      <div className="HeaderTitle">Aura SociaL</div>
    </div>
  )
}

export default Header
