import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    // TODO: sign in action
  };
  return (
    <div className="form-area">
      <div className="logo">
        <Link to="/">
          <img className="Logo" src="./amazon_logo.png" alt="amazon" />
        </Link>
      </div>
      <div className="form">
        <form onSubmit={submitHandler}>
          <ul className="form-container">
            <li>
              <h2>Sign-In</h2>
            </li>
            {/* <li>
          {loading && <div>Loading...</div>}
          {error && <div>{error}</div>}
        </li> */}
            <li>
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                required
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </li>
            <li>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </li>
            <li>
              <button type="submit" className="button primary">
                Signin
              </button>
            </li>
            <li>New to amazona?</li>
            <li>
              <Link to="/signup" className="button secondary text-center">
                Create your amazona account
              </Link>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}
