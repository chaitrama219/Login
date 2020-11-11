import React, { Component } from "react";
import "./login.css";
import { Redirect } from "react-router-dom";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogged: false,
      login: {
        user_id: "",
        user_password: ""
      }
    };
  }
  handleChange = event => {
    let loginNew = { ...this.state.login };
    let val = event.target.value;
    loginNew[event.target.name] = val;
    this.setState({
      login: loginNew
    });
  };

  login = event => {
    event.preventDefault();
    let user_id = this.state.login.user_id;
    let user_password = this.state.login.user_password;
    if (user_id === "chaitra" && user_password === "123") {
      this.props.loginSuccess({ user_id, user_password })
      localStorage.setItem("token", "T");
      this.setState({
        islogged: true
      });
    }
  };
  render() {
    if (localStorage.getItem("token")) {
      return <Redirect to="/" />;
    }
    return (
      <div className="wrapper">
        <div >
          <form onSubmit={this.login} className="form-signin">
            <div className="row">
              <div className="form-wrapper">
                <input
                  className="col"
                  type="text"
                  name="user_id"
                  onChange={this.handleChange}
                  placeholder="Enter Username"
                />
                <input
                  type="password"
                  name="user_password"
                  onChange={this.handleChange}
                  placeholder="Enter Password"
                />
                <button className="button" type="submit" onSubmit={this.login}>
                  Login
                    </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default Login;