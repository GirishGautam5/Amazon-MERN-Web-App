import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link, useNavigate } from "react-router-dom";
import "./navbarstyles.css";
import { useSelector } from "react-redux";
export default function Navbar() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="navContent">
        <Link to="/" className="">
          <img src="./amazon_logo1.png" className="navbar-logo" alt="amazon" />
        </Link>
        <div className="navbar-search">
          <input type="text" className="search-input" />
          <div className="search">
            <SearchIcon className="search-icon" />
          </div>
        </div>
        <div className="navbar-nav">
          <div className="navbar-options" onClick={() => navigate("/signin")}>
            <span className="option-firstline">Hello Guest</span>
            <span className="option-secondline">Sign In</span>
          </div>
          <div className="navbar-options">
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
      <div className="navbar-mobilesearch">
        <input type="text" className="search-input" />
        <div className="search">
          <SearchIcon className="search-icon" />
        </div>
      </div>
    </div>
  );
}
