import React, { useState, useEffect } from "react"

import "./Home.css"

import Header from "./components/Header"
import Footer from "./components/Footer"
import InstagramAccess from "./components/InstagramAccess"
import InstagramStep from "./components/InstagramStep"
import InstagramMedia from "./components/InstagramMedia"

import api from "./external/api"

function Home({ query }) {
  const [step, setStep] = useState(0)
  const [error, setError] = useState()
  const [code, setCode] = useState()
  const [token, setToken] = useState()
  const [username, setUsername] = useState()
  const [mediaURLs, setMediaURLs] = useState()

  useEffect(() => {
    if (!query) return
    if (query.code) setCode(query.code)
    else if (query.error) setError(query.error)
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
      .then((response) => {
        setMediaURLs(response.images)
        setUsername(response.username)
      })
      .catch((error) => setError(error))
  }, [token])

  useEffect(() => {
    if (error) setStep(9)
    else if (username) setStep(3)
    else if (token) setStep(2)
    else if (code) setStep(1)
  }, [error, code, token, username])

  return (
    <div className="Home">
      <Header inner={step > 0} />
      {
        {
          0: <InstagramAccess />,
          1: <InstagramStep message="Authorizing..." />,
          2: <InstagramStep message="Fetching media..." />,
          3: <InstagramMedia urls={mediaURLs} />,
          9: <InstagramStep message={error} retry={true} />,
        }[step]
      }
      <Footer />
    </div>
  )
}

export default Home
