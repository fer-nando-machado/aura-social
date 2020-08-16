import React, { useState, useEffect } from "react"

import "./Home.css"

import Header from "./components/Header"
import Footer from "./components/Footer"
import InstagramAccess from "./components/InstagramAccess"
import InstagramStep from "./components/InstagramStep"

import api from "./external/api"

function Home({ query }) {
  const [step, setStep] = useState(0)
  const [error, setError] = useState()
  const [code, setCode] = useState()
  const [token, setToken] = useState()

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

    // TODO Fetching... Processing...
    // api
    //   .fetchMedia(token)
    //   .then((response) => console.log(response))
    //   .catch((error) => setError(error))
  }, [token])

  useEffect(() => {
    if (error) setStep(9)
    else if (token) setStep(2)
    else if (code) setStep(1)
  }, [error, code, token])

  return (
    <div className="Home">
      <Header inner={step > 0} />
      {
        {
          0: <InstagramAccess />,
          1: <InstagramStep message="Authorizing..." />,
          2: <InstagramStep message="Processing..." />,
          9: <InstagramStep message={error} retry={true} />,
        }[step]
      }
      <Footer />
    </div>
  )
}

export default Home
