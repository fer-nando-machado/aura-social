import React from 'react';

import './InstagramError.css';

function InstagramError({message}) {
  return (
    <div className="InstagramError">
      <p>{message}</p>
      <p><a className="Link" href="/aura-social/"><span>Try Again</span></a></p>
    </div>
  )
}

export default InstagramError;
