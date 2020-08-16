import React, { useState } from "react"

import colors from "../external/colors"

import "./InstagramMedia.css"

function InstagramMedia({ urls }) {
  const total = urls.length
  const [index, setIndex] = useState(0)
  const [color, setColor] = useState("rgb(255,255,255)")

  async function fetchColors(event) {
    const color = await colors.getColor(event.target)
    setColor(`rgb(${color[0]}, ${color[1]}, ${color[2]})`)
    if (index + 1 < total) setIndex(index + 1)
  }

  function getProgress() {
    return Math.floor(((index + 1) * 100) / total)
  }

  return (
    <div className="InstagramMedia">
      {index < total && (
        <img
          src={urls[index]}
          onLoad={(event) => fetchColors(event)}
          style={{ border: `3px dashed ${color}` }}
          alt=""
          crossOrigin="anonymous"
        />
      )}
      <span>{getProgress()}%</span>
    </div>
  )
}

export default InstagramMedia
