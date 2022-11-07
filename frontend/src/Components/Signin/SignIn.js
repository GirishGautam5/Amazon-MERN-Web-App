import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { signin } from "../../Redux/Actions/userActions";
import LoadingBox from "../LoadingBox/LoadingBox";
import MessageBox from "../MessageBox/MessageBox";
import "./styles.css";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;
  const navigation = useRef(useNavigate());
const { search } = useLocation();
const searchSplit = search.split('=')[1];
const redirect = search ? `/${searchSplit}`: '/';
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
    // TODO: sign in action
  };
  useEffect(() => {
    if (userInfo) {
    navigation.current(redirect);
    }
    }, [userInfo, navigation, redirect])
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
            <li>
            {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
            </li>
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
            <li>New to amazon?</li>
            <li>
              <Link to="/signup" className="button secondary text-center">
                Create your amazon account
              </Link>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}
