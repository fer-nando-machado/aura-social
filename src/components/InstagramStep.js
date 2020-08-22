import React from "react"

import "./InstagramStep.css"

function InstagramStep({ message }) {
  return (
    <div className="InstagramStep Content">
      <img src={`${process.env.REACT_APP_IMAGES}instagram.svg`} alt="" />
      <span>{message}</span>
    </div>
  )
}

export default InstagramStep
