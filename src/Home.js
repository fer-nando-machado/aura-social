import React, { useState, useEffect } from "react"

import "./Home.css"

import Header from "./components/Header"
import Footer from "./components/Footer"
import InstagramAccess from "./components/InstagramAccess"
import InstagramError from "./components/InstagramError"

function Home({ query }) {
  const [step, setStep] = useState(0)
  const [code, setCode] = useState()
  const [error, setError] = useState()
  const [token, setToken] = useState()

  useEffect(() => {
    if (!query) return

    if (query.code) {
      setCode(query.code)
      setStep(steps.AUTHORIZE)
    } else if (query.error) {
      setError(query.error)
      setStep(steps.ERROR)
    }
  }, [query])

  useEffect(() => {
    if (!code) return

    const url = process.env.REACT_APP_API + "authorize"
    const data = {
      client_id: process.env.REACT_APP_INSTAGRAM_CLIENT_ID,
      redirect_uri: process.env.REACT_APP_URL,
      code: code,
    }

    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        })
        const body = await response.json()
        if (body.user_id) {
          setToken(body.access_token)
          setStep(steps.PROCESS)
        } else {
          throw body
        }
      } catch (error) {
        setError(error.error_message || "Unexpected error")
        setStep(steps.ERROR)
        console.warn(error)
      }
    }
    fetchData()
  }, [code])

  useEffect(() => {
    if (!token) return

    console.log("// TODO...")
  }, [token])

  return (
    <div className="Home">
      <Header inner={step > steps.ACCESS} />
      {
        {
          0: <InstagramAccess />,
          1: <InstagramError message={error} />,
          2: <div>Authorizing...</div>,
          3: <div>Processing...</div>,
        }[step]
      }
      <Footer />
    </div>
  )
}

const steps = {
  ACCESS: 0,
  ERROR: 1,
  AUTHORIZE: 2,
  PROCESS: 3,
}

export default Home
