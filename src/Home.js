import React, {useState, useEffect} from 'react';

import Header from './Header';
import Footer from './Footer';
import InstagramAccess from './InstagramAccess';
import InstagramError from './InstagramError';

function Home({query}) {
  const [step, setStep] = useState(0);
  const [code, setCode] = useState();
  const [error, setError] = useState();
  const [token, setToken] = useState();

  useEffect(() => {
    if (query.error) {
      setError(query.error)
      setStep(steps.ERROR)
    }
    else if (query.code) {
      setCode(query.code)
      setStep(steps.AUTHORIZE)
    }
  }, [query]);

  useEffect(() => {
    if (!code) return

    const url = process.env.REACT_APP_API + "authorize";
    const data = {
      client_id: process.env.REACT_APP_INSTAGRAM_CLIENT_ID,
      redirect_uri: process.env.REACT_APP_URL,
      code: code,
    }

    const fetchData = async () => {
      const response = await fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json',},
            body: JSON.stringify(data),
      })
      const body = await response.json()

      if (body.user_id) {
        setToken(body.access_token)
        setStep(steps.PROCESS)
      } else {
        setError(body.error_message || "Unexpected error");
        setStep(steps.ERROR)
        console.warn(body)
      }
    }
    fetchData();

  }, [code]);


  useEffect(() => {
    if (!token) return

    console.log("// TODO...")

  }, [token]);

  return (
    <div>
      <Header className={step > steps.ACCESS ? "HeaderInner" : ""}/>
      {
        {
          0: <InstagramAccess />,
          1: <InstagramError message={error} />,
          2: <>Loading...</>,
          3: <>Ready to process</>,
        }[step]
      }
      <Footer/>
    </div>
  )
}

const steps = {
  ACCESS: 0,
  ERROR: 1,
  AUTHORIZE: 2,
  PROCESS: 3,
}

export default Home;
