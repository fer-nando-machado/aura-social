import React, { useState, useEffect } from "react"
import Slider from "@material-ui/core/Slider"

import colors from "../external/colors"

import "./InstagramMedia.css"
import "./InstagramRays.scss"

function InstagramMedia({ media }) {
  const [target, setTarget] = useState()

  const [dates, setDates] = useState([])
  const [marks, setMarks] = useState([])
  const [range, setRange] = useState([])

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
    const min = media.images[0].date.slice(0, 4)
    const max = media.images[media.images.length - 1].date.slice(0, 4)

    const dates = []
    for (let y = 0, year = min; year <= max; year++, y++) {
      dates.push(
        ...Array.from({ length: 12 }, (_, i) => {
          return {
            value: i + y * 12,
            date: new Date(year, i, 1),
            label: year,
            option: `${("0" + (i + 1)).slice(-2)} / ${year}`,
          }
        })
      )
    }

    const marks = dates.filter((d) => d.value % 12 === 0)
    marks.push({
      value: dates.length,
      label: dates[dates.length - 1].label + 1,
    })
    setDates(dates)
    setMarks(marks)
    setRange([0, dates.length - 1])
  }, [media])

  useEffect(() => {
    if (!range || !range.length) return

    const from = dates[range[0]].date
    const to = dates[range[1]].date
    to.setMonth(to.getMonth() + 1)

    const images = media.images.filter((img) => {
      const date = new Date(img.date)
      return from <= date && date <= to
    })

    const total = images.length
    setTarget({
      images: images,
      total: total,
    })

    setIndex(0)
    setPalette([])
    setAura(null)
  }, [media, dates, range])

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
        <Slider
          value={range}
          onChange={(_, value) => setRange(value)}
          marks={marks}
          valueLabelDisplay="auto"
          valueLabelFormat={(value) => dates[value].option}
          getAriaValueText={(value) => dates[value].option}
          min={0}
          max={dates.length - 1}
        />
      </div>

      <div className="InstagramAura">
        {!complete && (
          <>
            <img
              crossOrigin="anonymous"
              alt=""
              src={`${target.images[index].url}&${Math.random()}`}
              onLoad={(event) => fetchColor(event.target)}
            />
            <span>{progress}</span>
          </>
        )}
        {complete && target.total === 0 && <span className="empty">nothing to scan there</span>}
        {complete && <div className={`aura ${aura ? "rays" : ""}`} style={{ backgroundImage: aura }} />}
      </div>

      <div className="InstagramShare">@{media.username}</div>
    </div>
  )
}

export default InstagramMedia
