import React from "react";
// import "./styles.css";
import Login from "./login";
import HomePage from "./homePage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import HomeRoute from "./homeroute";
 
export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <HomeRoute path="/homePage">
          <HomePage />
        </HomeRoute>
        <Route exact path="/">
          <Redirect exact from="/" to="HomePage" />
        </Route>
        <Route path="*">
          <Redirect from="/" to="HomePage" />
        </Route>
      </Switch>
    </Router>
  );
}