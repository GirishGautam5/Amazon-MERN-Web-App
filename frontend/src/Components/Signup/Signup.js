import React, { useState } from 'react'
import "./styles.css";
import { Link, useNavigate } from "react-router-dom";
export default function Signup() {
    const [name,setName] = useState('');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
    const signInHandler = ()=>{
      navigate('/login')
    }
  return (
    <div className="Login">
    <Link to="/">
      <img className="Logo" src="./amazon_logo.png" alt="amazon" />
    </Link>
    <div className="Form-Container">
      <h1>Create Account</h1>
      <form>
      <p>Your Name</p>
        <input
          type="text"
          value={name}
          placeholder="First and last Name"
          onChange={(e) => setName(e.target.value)}
        />
        <p>Email</p>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p>Password</p>
        <input
          type="password"
          value={password}
          placeholder="Atleast 6 charecters"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="signup-button">
          Create Account in Amazon
        </button>
      </form>
      <p>By continuing, you agree to Amazon's <span>Conditions of Use</span> and <span>Privacy Policy</span></p>
    </div>
    <button className="login-button" onClick={signInHandler}>Sign In</button>
  </div>
  )
}
