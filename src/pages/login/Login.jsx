import React from "react";
import "./Login.scss";

export default function Login() {
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>SignIn</h1>
          <input type="email" placeholder="Email or Phone Number" />
          <input type="password" placeholder="Password" />
          <button className="loginButton">SignIn</button>
          <span>
            New to Netflix? <b>SignUp Now.</b>
          </span>
          <small>
            this page is protected by reCAPTCHA and the Google Privacy Policy
            and Terms of Service apply <b>Learn More</b>
          </small>
        </form>
      </div>
    </div>
  );
}
