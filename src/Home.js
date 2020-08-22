import React, { useState, useEffect } from "react"

import "./Home.css"

import Header from "./components/Header"
import Footer from "./components/Footer"
import InstagramAccess from "./components/InstagramAccess"
import InstagramError from "./components/InstagramError"
import InstagramStep from "./components/InstagramStep"
import InstagramMedia from "./components/InstagramMedia"

import api from "./external/api"

function Home({ query }) {
  const [step, setStep] = useState(0)
  const [error, setError] = useState()
  const [code, setCode] = useState()
  const [token, setToken] = useState()
  const [media, setMedia] = useState()

  useEffect(() => {
    if (!query) return
    if (query.code) setCode(query.code)
    else if (query.error) setError(query.error)
    else if (query.debug) setMedia(debugMedia)
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
  }, [error, code, token, media])

  return (
    <div className="Home">
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

const debugMedia = {
  username: "fernandomach7do",
  images: [
    "https://scontent.cdninstagram.com/v/t51.29350-15/117176521_328948601576332_3580294707538157938_n.jpg?_nc_cat=107&_nc_sid=8ae9d6&_nc_ohc=MrefkDnMkCwAX9q9ctk&_nc_ht=scontent.cdninstagram.com&oh=6a68c0a41d35c55d49dfba363b374090&oe=5F5EA1B8",
    "https://scontent.cdninstagram.com/v/t51.29350-15/116152103_3278136882252701_7056569430226544631_n.jpg?_nc_cat=111&_nc_sid=8ae9d6&_nc_ohc=JNEgFwB3VC4AX97cSVx&_nc_ht=scontent.cdninstagram.com&oh=e14b9679f494be0c7b81f672d2f37bce&oe=5F62225F",
    "https://scontent.cdninstagram.com/v/t51.29350-15/116029059_181243413436806_7740132137588175238_n.jpg?_nc_cat=108&_nc_sid=8ae9d6&_nc_ohc=WYwhX7P6QHoAX_hVBXc&_nc_ht=scontent.cdninstagram.com&oh=f14c4d420e5ba0d3375bb4b28699f2e7&oe=5F5FE652",
    "https://scontent.cdninstagram.com/v/t51.29350-15/109713109_148663446831905_8162988032588923998_n.jpg?_nc_cat=102&_nc_sid=8ae9d6&_nc_ohc=NiGNTvzLiVcAX_Rpjv-&_nc_ht=scontent.cdninstagram.com&oh=4fdb1e4701c3d65e3de63b99fe34763b&oe=5F5EF3E8",
    "https://scontent.cdninstagram.com/v/t51.29350-15/109330312_2728078110769959_2121900022953024726_n.jpg?_nc_cat=102&_nc_sid=8ae9d6&_nc_ohc=Cy0-VX1jDIAAX-7KZFv&_nc_ht=scontent.cdninstagram.com&oh=56448025b24a62c0a625d73034f81fe6&oe=5F601C0A",
    "https://scontent.cdninstagram.com/v/t51.29350-15/106495309_272734894070833_3238430162469291771_n.jpg?_nc_cat=101&_nc_sid=8ae9d6&_nc_ohc=d6_099FGWXwAX9jda9_&_nc_ht=scontent.cdninstagram.com&oh=71acc19822bc7f3907792f4b5c341006&oe=5F5E6346",
    "https://scontent.cdninstagram.com/v/t51.2885-15/105991651_2541224309541227_7424953594867359384_n.jpg?_nc_cat=110&_nc_sid=8ae9d6&_nc_ohc=cAKp9eRFBmkAX_Wi9zA&_nc_ht=scontent.cdninstagram.com&oh=9702c1ecfec2eb6becc05423d09d6a35&oe=5F5E8343",
    "https://scontent.cdninstagram.com/v/t51.2885-15/101783451_555154281862559_5628238671235761802_n.jpg?_nc_cat=100&_nc_sid=8ae9d6&_nc_ohc=0b7Uu_HkFDwAX-Dg2KB&_nc_ht=scontent.cdninstagram.com&oh=08c6fcb3bc303099c5a0854895828088&oe=5F5EEDBC",
    "https://scontent.cdninstagram.com/v/t51.2885-15/100971995_2747750818793457_6405836337224637861_n.jpg?_nc_cat=109&_nc_sid=8ae9d6&_nc_ohc=h9LFsx2Zb74AX-Ae7fm&_nc_ht=scontent.cdninstagram.com&oh=4988b85c07a0b5c3b309bcdac499566f&oe=5F5E6FEF",
    "https://scontent.cdninstagram.com/v/t51.2885-15/94422693_657440651492515_2880693995765655165_n.jpg?_nc_cat=104&_nc_sid=8ae9d6&_nc_ohc=xNBUS8mdu_YAX8gZbhE&_nc_ht=scontent.cdninstagram.com&oh=e7f50f97554b7fee778ddb477f0344fb&oe=5F622910",
  ],
}

export default Home
