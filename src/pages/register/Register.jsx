import React from "react";
import "./Register.scss";

export default function Register() {
  const [email, setEmail] = React.useState("");
  const [password, setPassWord] = React.useState("");
  const emailRef = React.useRef();
  const passwordRef = React.useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
  const handleFinish = () => {
    setPassWord(passwordRef.current.value);
  };
  console.log(email, password);
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <button className="loginButton">SignIn</button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="Email Address" ref={emailRef} />
            <button className="register" onClick={handleStart}>
              Get Started
            </button>
          </div>
        ) : (
          <form className="input">
            <input type="password" placeholder="Password" ref={passwordRef} />
            <button className="register" onClick={handleFinish}>
              Login
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
