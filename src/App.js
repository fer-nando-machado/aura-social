import React from 'react';
import './App.css';

function InstagramAccess({id, redirect}) {
  const url = "https://api.instagram.com/oauth/authorize?" +
  "client_id=" + id +
  "&redirect_uri=" + redirect +
  "&scope=user_profile,user_media&response_type=code"

  return (
    <a className="InstagramAccess" href={url}>
      <img src="/aura-social/instagram.svg" alt="" />
      <span>Continue with Instagram</span>
    </a>
  );
}

function Header() {
  return (
    <div className="Header">Aura SociaL</div>
  )
}

function App() {
  return (
    <div className="App">
      <Header/>
      <InstagramAccess
        id={process.env.REACT_APP_INSTAGRAM_CLIENT_ID}
        redirect={process.env.REACT_APP_URL} />
    </div>
  );
}

export default App;
