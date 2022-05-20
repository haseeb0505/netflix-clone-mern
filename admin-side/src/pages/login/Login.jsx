import React from "react";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleclick = (e) => {
    e.preventdeafult();
  };
  return (
    <div className="Login">
      <form action="" className="loginform">
        <input
          type="text"
          className="loginInput"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="loginInput"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="loginButton" onClick={handleclick}>
          Login
        </button>
      </form>
    </div>
  );
}
