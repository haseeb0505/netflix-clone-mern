import React from "react";
import { Link } from "react-router-dom";
import { login } from "../../authContext/apiCalls";
import { AuthContext } from "../../authContext/AuthContext";
import "./Login.scss";
export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassWord] = React.useState("");
  const { dispatch } = React.useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);
  };
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
          <input
            type="email"
            placeholder="Email or Phone Number"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassWord(e.target.value)}
          />
          <button className="loginButton" onClick={handleLogin}>
            SignIn
          </button>
          <Link to="/register" className="Link">
            <span>
              New to Netflix? <b>SignUp Now.</b>
            </span>
          </Link>

          <small>
            this page is protected by reCAPTCHA and the Google Privacy Policy
            and Terms of Service apply <b>Learn More</b>
          </small>
        </form>
      </div>
    </div>
  );
}
