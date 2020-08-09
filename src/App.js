import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  useLocation,
} from "react-router-dom";

import Header from './Header';
import Footer from './Footer';
import InstagramAccess from './InstagramAccess';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/aura-social">
            <Routes />
          </Route>
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}


function Routes() {
  let { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        <Header/>
        <InstagramAccess />
      </Route>
      <Route path={`${path}/auth`}>
        <Header className="HeaderInner"/>
        <Auth />
      </Route>
    </Switch>
  );
}

function Auth() {
 let query = useQuery();
 console.log(query.get("code"))
  return (
    <div>
      <h2>auth</h2>
    </div>
  );
}

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default App;
