import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  useLocation,
} from "react-router-dom";

import Home from './Home'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/">
          <HomeWithQueryParams />
        </Route>
      </Router>
    </div>
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

export default App;
