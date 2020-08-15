import React from "react"

import "./InstagramStep.css"

function InstagramStep({ message, retry }) {
  return (
    <div className="InstagramStep">
      {message}
      {retry && (
        <p>
          <a className="Link" href="/aura-social/">
            <span>Try Again</span>
          </a>
        </p>
      )}
    </div>
  )
}

export default InstagramStep
