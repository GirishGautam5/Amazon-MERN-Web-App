import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import "./navbarstyles.css";
export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <img src="./amazon_logo1.png" className="navbar-logo" alt="amazon" />
      </Link>
      <div className="navbar-search">
        <input type="text" className="search-input" />
        <SearchIcon className="search-icon" />
      </div>
      <div className="navbar-nav">
        <div className="navbar-options">
          <span className="option-firstline">Hello Guest</span>
          <span className="option-secondline">Sign In</span>
        </div>
        <div className="navbar-options">
          <span className="option-firstline">Returns</span>
          <span className="option-secondline">& Orders</span>
        </div>
        <div className="navbar-basket">
          <ShoppingBasketIcon className="option-secondline option-basket" />
          <spac className="option-secondline basket-count">0</spac>
        </div>
      </div>
    </div>
  );
}
