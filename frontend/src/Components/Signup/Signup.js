import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../Redux/Actions/userActions";
import LoadingBox from "../LoadingBox/LoadingBox";
import MessageBox from "../MessageBox/MessageBox";
export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigation = useRef(useNavigate());
  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userRegister;
  // const { search } = useLocation();
  // const searchSplit = search.split("=")[1];
  // const redirect = search ? searchSplit : "/";
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';
  console.log(redirectInUrl,'searchsplit')
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password and confirm password are not match");
    } else {
      dispatch(register(name, email, password));
    }
  };
  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [userInfo, navigation, redirect]);
  return (
    <div className="Login">
      <Link to="/">
        <img className="Logo" src="./amazon_logo.png" alt="amazon" />
      </Link>
      <div className="Form-Container">
        <h1>Create Account</h1>
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        <form onSubmit={submitHandler}>
          <p>Your Name</p>
          <input
            type="text"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
          <p>Email</p>
          <input
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <p>Password</p>
          <input
            type="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <p>Confirm Password</p>
          <input
            type="password"
            value={confirmPassword}
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button type="submit" className="signup-button">
            Create Account in Amazon
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's <span>Conditions of Use</span>{" "}
          and <span>Privacy Policy</span>
        </p>
        <div>
          Already have an account?
          <Link
            to={`/signin?redirect=${redirect}`}
            className="button secondary text-center"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
