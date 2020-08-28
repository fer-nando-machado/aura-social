import React, { useState, useEffect } from "react"

import colors from "../external/colors"
import debug from "../debug"

import "./InstagramMedia.css"
import "./InstagramRays.scss"

function InstagramMedia({ media }) {
  const [index, setIndex] = useState(0) //useState(9)
  const [palette, setPalette] = useState([])
  const [aura, setAura] = useState()

  const username = media.username
  const urls = media.images
  const total = urls.length
  const inProgress = index < total
  const progress = Math.floor((index * 100) / total)

  async function fetchColor(img) {
    const rgb = colors.getPalette(img, 1)
    setPalette(palette.concat(rgb))
    //setPalette(debug.paletteRandomizer(100))
    setIndex(index + 1)
  }

  useEffect(() => {
    if (inProgress) return

    const gradient = palette
      .map((rgb) => ({ rgb: rgb, hsl: colors.rgb2hsl(rgb) }))
      .sort((a, z) => colors.sort3D(a.hsl, z.hsl))
      .map((color) => `rgb(${color.rgb.toString()})`)

    const conicGradient = new window.ConicGradient({
      stops: gradient.toString(),
      repeating: false,
    })

    setAura(`url(${conicGradient.dataURL})`)
  }, [palette, inProgress])

  return (
    <div className="InstagramMedia Content">
      {inProgress && (
        <>
          <img crossOrigin="anonymous" alt="" src={urls[index]} onLoad={(event) => fetchColor(event.target)} />
          <span>{progress}%</span>
        </>
      )}
      {!inProgress && <div className="aura rays" style={{ backgroundImage: aura }} />}@{username}
    </div>
  )
}

export default InstagramMedia
