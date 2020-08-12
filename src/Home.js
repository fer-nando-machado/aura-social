import React, {useState, useEffect} from 'react';

import {
  useLocation,
} from "react-router-dom";

import Header from './Header';
import Footer from './Footer';
import InstagramAccess from './InstagramAccess';
import InstagramToken from './InstagramToken';
import InstagramError from './InstagramError';

function Home() {
  const [step, setStep] = useState(0);
  const [code, setCode] = useState();
  const [error, setError] = useState();
  const query = useQuery();

  useEffect(() => {
    if (query.has("code") ) {
      setCode(query.get("code"));
      setStep(1)
    } else if (query.get("error")) {
      setError(query.get("error_description"));
      setStep(2)
    }
  }, [query]);

  return (
    <>
      <Header className={step > 0 ? "HeaderInner" : ""}/>
      {
        {
          0: <InstagramAccess />,
          1: <InstagramToken code={code} />,
          2: <InstagramError message={error} />,
        }[step]
      }
      <Footer/>
    </>
  )
}

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default Home;
