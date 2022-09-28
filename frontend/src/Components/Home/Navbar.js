import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link, useNavigate } from "react-router-dom";
import "./navbarstyles.css";
import { useStateValue } from "../../ContextAPI/StateProvider";
export default function Navbar() {
  const navigate = useNavigate();
  const [{basket}] = useStateValue()
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
          <div className="navbar-options">
            <span className="option-firstline">Hello Guest</span>
            <span className="option-secondline">Sign In</span>
          </div>
          <div className="navbar-options">
            <span className="option-firstline">Returns</span>
            <span className="option-secondline">& Orders</span>
          </div>
          <div className="navbar-basket" onClick={()=> navigate('/cart')}>
            <ShoppingBasketIcon className="option-secondline option-basket" />
            <span className="option-secondline basket-count">{basket?.length}</span>
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
