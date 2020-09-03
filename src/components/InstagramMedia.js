import React, { useState, useEffect } from "react"

import colors from "../external/colors"

import "./InstagramMedia.css"
import "./InstagramRays.scss"

function InstagramMedia({ media }) {
  const [settings, setSettings] = useState()
  const [target, setTarget] = useState()
  const [dateFrom, setDateFrom] = useState()
  const [dateTo, setDateTo] = useState()

  const [index, setIndex] = useState(0)
  const [palette, setPalette] = useState([])
  const [aura, setAura] = useState()

  async function fetchColor(img) {
    const rgb = colors.getPalette(img, 1)
    setPalette(palette.concat(rgb))
    if (index < target.total) {
      setIndex(index + 1)
    }
  }

  useEffect(() => {
    const min = dateToString(media.images[0].date)
    const max = dateToString(media.images[media.images.length - 1].date)

    setSettings({
      min: min,
      max: max,
    })
    setDateFrom(min)
    setDateTo(max)
  }, [media])

  useEffect(() => {
    if (!dateFrom || !dateTo) return

    const from = new Date(dateFrom)
    const to = new Date(dateTo)
    to.setDate(to.getDate() + 1)

    const images = media.images.filter((img) => {
      return from <= img.date && img.date <= to
    })

    const total = images.length
    setTarget({
      images: images,
      total: total,
    })

    setIndex(0)
    setPalette([])
    setAura(null)
  }, [media, dateFrom, dateTo])

  useEffect(() => {
    if (!target || !index || !palette || !target.total || index < target.total) return

    const gradient = palette
      .map((rgb) => ({ rgb: rgb, hsl: colors.rgb2hsl(rgb) }))
      .sort((a, z) => colors.sort3D(a.hsl, z.hsl))
      .map((color) => `rgb(${color.rgb.toString()})`)

    const conicGradient = new window.ConicGradient({
      stops: gradient.toString(),
      repeating: false,
    })

    setAura(`url(${conicGradient.dataURL})`)
  }, [target, index, palette])

  if (!target) return <div className="InstagramMedia Content" />

  const complete = index === target.total
  const progress = Math.floor((index * 100) / target.total) + "%"

  return (
    <div className="InstagramMedia Content">
      <div className="InstagramFilter">
        <p>Select the period you wish to scan an aura from:</p>
        <input
          type="date"
          value={dateFrom}
          min={settings.min}
          max={dateTo}
          onChange={(e) => (e.target.value > dateTo ? setDateFrom(dateTo) : setDateFrom(e.target.value))}
        />
        {" to "}
        <input
          type="date"
          value={dateTo}
          min={dateFrom}
          max={settings.max}
          onChange={(e) => (e.target.value < dateFrom ? setDateTo(dateFrom) : setDateTo(e.target.value))}
        />
      </div>

      <div className="InstagramAura">
        {!complete && (
          <>
            <img
              crossOrigin="anonymous"
              alt=""
              src={target.images[index].url}
              onLoad={(event) => fetchColor(event.target)}
            />
            <span>{progress}</span>
          </>
        )}
        {complete && <div className={`aura ${aura ? "rays" : ""}`} style={{ backgroundImage: aura }} />}
      </div>

      <div className="InstagramShare">@{media.username}</div>
    </div>
  )
}

function dateToString(date) {
  return date.toISOString().slice(0, 10)
}

export default InstagramMedia
