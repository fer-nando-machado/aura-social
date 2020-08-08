import React from 'react';
import './App.css';

function InstagramAccess({clientId, redirectUri}) {
  const url = "https://api.instagram.com/oauth/authorize?" +
  "client_id=" + process.env.REACT_APP_INSTAGRAM_CLIENT_ID +
  "&redirect_uri=" + process.env.REACT_APP_URL +
  "&scope=user_profile,user_media&response_type=code"

  return (
    <a href={url}>start</a>
  );

}

function App() {
  return (
    <div className="App">
      <InstagramAccess/>
    </div>
  );
}

export default App;
