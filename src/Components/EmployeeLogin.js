import React from "react";
import "../CSS/EmployeeLogin.css";
// import "./Student.js"

class EmployeeLogin extends React.Component {
  // state = {  }
  render() {
    return (
      <div className="logCard">
        <div className="container" id="container">
          <div className="form-container sign-up-container">
            <form className="form-signIn" action="">
              <h1>Create Account</h1>
              <div className="social-container">
                <a href="#" className="social">
                  <i className="fa fa-facebook" />
                </a>
                <a href="#" className="social">
                  <i className="fa fa-google" />
                </a>
                <a href="#" className="social">
                  <i className="fa fa-linkedin" />
                </a>
              </div>
              <span>or use your email for registration</span>
              <input type="text" name="name" placeholder="Name" />
              <input type="email" name="email" placeholder="Email" />
              <input type="password" name="password" placeholder="Password" />
              <button onClick={console.log("hhheefs")}>SignUp</button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form action="#">
              <h1>Sign In</h1>
              <div className="social-container">
                <a href="#" className="social">
                  <i className="fa fa-facebook" />
                </a>
                <a href="#" className="social">
                  <i className="fa fa-google" />
                </a>
                <a href="#" className="social">
                  <i className="fa fa-linkedin" />
                </a>
              </div>
              <span>or use your account</span>
              <input type="email" name="email" placeholder="Email" />
              <input type="password" name="password" placeholder="Password" />
              <a className="forgot" href="#">Forgot Your Password</a>
              <button>Sign In</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>
                  To keep connected with us please login with your personal info
                </p>
                <button className="ghost" id="signIn">
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello, Employee!</h1>
                <p>Enter your details and start managing :) </p>
                <button className="ghost" id="signUp">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EmployeeLogin;
