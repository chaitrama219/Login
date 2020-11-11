import React, { Component } from "react";
import { Redirect, Switch, Route, Link } from "react-router-dom";
import { withRouter } from "react-router";
import "./home.css";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogout: false
    };
    const { loginReducer } = this.props;
    if (loginReducer && loginReducer.userDetails && loginReducer.userDetails.user_id) {
      localStorage.removeItem("token");
    }
  }


  signOut = () => {
    this.props.logout()
    localStorage.removeItem("token");
    this.setState({
      islogout: true
    });
  };
  render() {
    const { loginReducer } = this.props;

    if (this.state.islogout) {
      return <Redirect to="/login" />;
    }
    return (
      <div>
        {loginReducer && loginReducer.userDetails && loginReducer.userDetails.user_id ? loginReducer.userDetails.user_id : "User Not Found"}
        <button onClick={this.signOut} href="#">
          Sign Out
            </button>

      </div>
    );
  }
}

export default withRouter(HomePage);