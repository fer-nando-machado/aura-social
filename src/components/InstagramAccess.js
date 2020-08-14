import React from "react"
import "./InstagramAccess.css"

function InstagramAccess() {
  const url =
    "https://api.instagram.com/oauth/authorize" +
    "?client_id=" +
    process.env.REACT_APP_INSTAGRAM_CLIENT_ID +
    "&redirect_uri=" +
    process.env.REACT_APP_URL +
    "&scope=user_profile,user_media&response_type=code"

  return (
    <a className="InstagramAccess Link" href={url}>
      <img src={`${process.env.REACT_APP_IMAGES}instagram.svg`} alt="Continue with Instagram" />
      <span>Continue with Instagram</span>
    </a>
  )
}

export default InstagramAccess
