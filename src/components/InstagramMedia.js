import React, { useState } from "react"

import colors from "../external/colors"

import "./InstagramMedia.css"

function InstagramMedia({ media }) {
  const [index, setIndex] = useState(0)

  //const username = media.username
  const urls = media.images
  const total = urls.length
  const inProgress = index < total
  const progress = Math.floor((index * 100) / total)

  async function fetchColor(img) {
    const color = await colors.getDominantColor(img)
    console.log(color)
    setIndex(index + 1)
  }

  return (
    <div className="InstagramMedia Content">
      {inProgress && (
        <img crossOrigin="anonymous" alt="" src={urls[index]} onLoad={(event) => fetchColor(event.target)} />
      )}
      <img src={`${process.env.REACT_APP_IMAGES}instagram.svg`} alt="" className={inProgress ? "hidden" : ""} />
      <span>{progress}%</span>
    </div>
  )
}

export default InstagramMedia
