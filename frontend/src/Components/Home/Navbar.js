import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import "./navbarstyles.css";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../../Redux/Actions/userActions";
import SearchBox from "../Search/SearchBox";
import SearchBoxMobile from "../Search/SearchBoxMobile";
const amazon = require("./amazon_logo1.png");
export default function Navbar(props) {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signoutHandler = () => {
    userInfo ? 
    dispatch(signout()) : navigate("/signin");
  };
  return (
    <div className="navbar">
      <div className="navContent">
        <Link to="/" className="">
          <img src={amazon} className="navbar-logo" alt="amazon" />
        </Link>
       
          <SearchBox />
         
        <div className="navbar-nav">
          
          <div className="navbar-options" onClick={() =>{signoutHandler()} }>
            <span className="option-firstline">{`${'Hello,'} ${userInfo ? userInfo.name : 'Guest'}`}</span>
            <span className="option-secondline">{`${userInfo ? 'Sign Out' : 'Sign In'}`}</span>
          </div>
          <div className="navbar-options" onClick={() => {navigate('/orderhistory')}}>
           
            <span className="option-firstline">Returns</span>
            <span className="option-secondline">& Orders</span>
           
          </div>
          <div className="navbar-basket" onClick={() => navigate("/cart")}>
            <ShoppingBasketIcon className="option-secondline option-basket" />
            <span className="option-secondline basket-count">
              {cartItems.length > 0 ? cartItems.length : 0}
            </span>
          </div>
        </div>
      </div>
      <div>
        <SearchBoxMobile />
      </div>

    </div>
  );
}
