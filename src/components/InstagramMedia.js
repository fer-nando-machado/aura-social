import React, { useState, useEffect } from "react"

import colors from "../external/colors"

import "./InstagramMedia.css"

function InstagramMedia({ media }) {
  const [index, setIndex] = useState(0)
  const [palette, setPalette] = useState([])
  const [aura, setAura] = useState()

  //const username = media.username
  const urls = media.images
  const total = urls.length
  const inProgress = index < total
  const progress = Math.floor((index * 100) / total)

  async function fetchColor(img) {
    const rgbPalette = colors.getPalette(img, 1)
    setPalette(palette.concat(rgbPalette))
    setIndex(index + 1)
  }

  useEffect(() => {
    if (inProgress) return

    const str = palette
      .map(colors.rgb2hsl)
      .sort(colors.sort3D)
      .map(colors.hsl2rgb)
      //.map((rgb) => `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]}), transparent`)
      .map((rgb) => `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`)

    console.log(str)
    setAura(`conic-gradient(${str})`)
  }, [palette, inProgress])

  return (
    <div className="InstagramMedia Content">
      {inProgress && (
        <>
          <img crossOrigin="anonymous" alt="" src={urls[index]} onLoad={(event) => fetchColor(event.target)} />
          <span>{progress}%</span>
        </>
      )}

      {!inProgress && <div className="aura" style={{ backgroundImage: aura }} />}
    </div>
  )
}

export default InstagramMedia
