import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import Dashboard from "./components/dashboard/dashboard";
import Login from "./components/login/login";
import "./App.css";

const App = () => {
  const [authenticated, setAuthentication] = useState(false);
  const makeLogin = (token) => {
    sessionStorage.setItem("token", token);
    setAuthentication(true);
  };
  return (
    <Router>
      <div>
        <Header
          setAuthentication={(val) => setAuthentication(val)}
          authenticated={authenticated}
        />
        <Switch>
          <Route path="/console">
            <Dashboard setAuthentication={(val) => setAuthentication(val)} />
          </Route>
          <Route path="/">
            <Login onLogin={makeLogin} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
