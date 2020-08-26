import React, { useState, useEffect } from "react"

import colors from "../external/colors"
import debug from "../debug"

import "./InstagramMedia.css"

function InstagramMedia({ media }) {
  const [index, setIndex] = useState(9) //useState(0)
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
    setPalette(debug.palette)
    setIndex(index + 1)
  }

  useEffect(() => {
    if (inProgress) return

    const str = palette
      .map(colors.rgb2hsl)
      // .filter(hsl => {
      //   const [h,s,l] = hsl
      //   console.log(hsl)
      //   return -0.7 < s && s < -0.2
      // })
      .sort(colors.sort3D)
      .map(colors.hsl2rgb)
      .map((rgb) => `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]}), transparent`)

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
