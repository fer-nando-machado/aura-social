import React, { useState, useEffect } from 'react';

function InstagramToken({code}) {
  const [token, setToken] = useState();

  useEffect(() => {
    const url = process.env.REACT_APP_API + "authorize";
    const data = {
      client_id: process.env.REACT_APP_INSTAGRAM_CLIENT_ID,
      redirect_uri: process.env.REACT_APP_URL,
      code: code,
    }

    async function fetchData() {
      const response = await fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json',},
            body: JSON.stringify(data),
      })
      const body = await response.json()
      console.log(body)
      setToken(body.user_id || body.error_message)
    }

    fetchData();
  }, [code]);

  return (
    <div className="InstagramToken">
      {token === undefined ? "Loading..." : token}
    </div>
  )
}

export default InstagramToken;
