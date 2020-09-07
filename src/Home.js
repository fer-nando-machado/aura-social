import React, { useState, useEffect } from "react"

import "./Home.css"

import Header from "./components/Header"
import BetaBanner from "./components/BetaBanner"
import Footer from "./components/Footer"
import InstagramAccess from "./components/InstagramAccess"
import InstagramError from "./components/InstagramError"
import InstagramStep from "./components/InstagramStep"
import InstagramMedia from "./components/InstagramMedia"

import debug from "./debug"

import api from "./external/api"

function Home({ query }) {
  const [step, setStep] = useState()
  const [error, setError] = useState()
  const [code, setCode] = useState()
  const [token, setToken] = useState()
  const [media, setMedia] = useState()

  useEffect(() => {
    if (!query) return
    if (query.code) setCode(query.code)
    else if (query.error) setError(query.error)
    else if (query.debug) setMedia(debug.media)
  }, [query])

  useEffect(() => {
    if (!code) return
    api
      .authorize(code)
      .then((token) => setToken(token))
      .catch((error) => setError(error))
  }, [code])

  useEffect(() => {
    if (!token) return

    api
      .fetchMedia(token)
      .then((media) => setMedia(media))
      .catch((error) => setError(error))
  }, [token])

  useEffect(() => {
    if (error) setStep(9)
    else if (media) setStep(3)
    else if (token) setStep(2)
    else if (code) setStep(1)
    else setStep(0)
  }, [error, code, token, media])

  if (step === undefined) return <></>
  return (
    <div className="Home">
      {step === 0 && <BetaBanner />}
      <Header inner={step > 0} />
      {
        {
          0: <InstagramAccess />,
          1: <InstagramStep message="Authorizing..." />,
          2: <InstagramStep message="Fetching media..." />,
          3: <InstagramMedia media={media} />,
          9: <InstagramError message={error} />,
        }[step]
      }
      <Footer />
    </div>
  )
}

export default Home
