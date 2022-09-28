import React, { useState } from "react";
import "./styles.css";
import { Link, useNavigate } from "react-router-dom";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const loginHandler = (e)=>{
    e.preventDefault();
    navigate('/')
  }
  const signupHandler = ()=>{
    navigate('/signup')
  }
  return (
    <div className="Login">
      <Link to="/">
        <img className="Logo" src="./amazon_logo.png" alt="amazon" />
      </Link>
      <div className="Form-Container">
        <h1>Sign in</h1>
        <form>
          <p>Email</p>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p>Password</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="login-Button" onClick={loginHandler}>
            Sign In
          </button>
        </form>
        <p>By continuing, you agree to Amazon's <span>Conditions of Use</span> and <span>Privacy Policy</span></p>
      </div>
      <button className="signup-Button" onClick={signupHandler}>Create your Amazon Account</button>
    </div>
  );
}
