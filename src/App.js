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
import { connect } from 'react-redux';
import * as actions from './actions';

function App(props) {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login loginSuccess={props.actions.loginSuccess} loginReducer={props.loginReducer} />
        </Route>
        <HomeRoute path="/homePage">
          <HomePage loginSuccess={props.actions.loginSuccess} loginReducer={props.loginReducer} logout={props.actions.logout} />
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



const mapStateToProps = state => (
  {
    ...state
  }
)
const mapDispatchToProps = dispatch => ({
  actions: {
    loginSuccess: (data) => {
      return dispatch(actions.loginSuccess(data))
    },
    logout: () => dispatch(actions.logout())
  }
})



export default connect(mapStateToProps, mapDispatchToProps)(App);
