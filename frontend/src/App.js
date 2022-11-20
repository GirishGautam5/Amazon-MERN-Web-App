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
import Successpage from "./Components/Success/Success";
import OrderHistoryScreen from "./Components/OrderHistory/OrderHistory";
import OrderDetails from "./Components/orderDetails/OrderDetails";
import SearchScreen from "./Components/Search/SearchScreen";

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
          <Route path="/success" element={<Successpage />} />
          <Route path="/orderhistory" element={<OrderHistoryScreen />} />
          <Route path="/order/:id" element={<OrderDetails />}></Route>
           <Route path="/search/name" element={<SearchScreen />} exact></Route>
            <Route
              path="/search/name/:name"
              element={<SearchScreen />}
              exact
            ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
