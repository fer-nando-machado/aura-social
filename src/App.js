import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  useLocation,
} from "react-router-dom";

import Header from './Header';
import Footer from './Footer';
import InstagramAccess from './InstagramAccess';
import InstagramToken from './InstagramToken';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/">
          <Home />
        </Route>
      </Router>

      <Footer/>
    </div>
  );
}

function Home() {
  let query = useQuery();

  if (query.has("code")) {
    const code = query.get("code");

    return (
      <>
        <Header className="HeaderInner"/>
        <InstagramToken code={code} />
      </>
    )
  }

  if (query.has("error")) {
    return (
      <>
        <Header className="HeaderInner"/>
        Access denied. Click <a className="Link" href="/aura-social/">here</a> to try again.
      </>
    )
  }

  return (
    <>
      <Header/>
      <InstagramAccess />
    </>
  )
}

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default App;
