import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  useLocation,
} from "react-router-dom";

import Home from './Home'

function Routes() {
  return (
    <Router>
      <Route path="/">
        <HomeWithQueryParams />
      </Route>
    </Router>
  );
}

function HomeWithQueryParams() {
  const query = useQuery();
  const params = {
    error: query.get("error_description"),
    code: query.get("code")
  }
  return (
    <Home query={params}/>
  )
}

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default Routes;
