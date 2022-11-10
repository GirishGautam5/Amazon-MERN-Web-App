import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Address from "./Components/Address/Address";
import Cart from "./Components/Cart/Cart";
import Home from "./Components/Home/Home";
import OrderSummary from "./Components/OrderSummary/OrderSummary";
import PaymentMethod from "./Components/PaymentMethod/PaymentMethod";
import ProductScreen from "./Components/ProductScreen/ProductScreen";
import Signup from "./Components/Signup/Signup";
import SignIn from "./Components/Signin/SignIn";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/product/:id" element={<ProductScreen />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart/:id" element={<Cart />} />
          <Route path="/signin/shipping" element={<Address />} />
          <Route path="/payment" element={<PaymentMethod />} />
          <Route path="/placeorder" element={<OrderSummary />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
