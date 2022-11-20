import React, { useState } from "react";
import CheckoutSteps from "../CheckoutSteps/CheckoutSteps";
import Navbar from "../Home/Navbar";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress } from "../../Redux/Actions/cartActions";
export default function Address() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const { shippingAddress } = cart;
  if (!userInfo) {
    navigate("/signin");
  }
  const dispatch = useDispatch();
  const [fullName, setFullName] = useState(shippingAddress.fullName);
  const [phone, setPhone] = useState(shippingAddress.phone);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [flat, setFlat] = useState(shippingAddress.flat);
  const [area, setArea] = useState(shippingAddress.area);
  const [landmark, setLandmark] = useState(shippingAddress.landmark);
  const [city, setCity] = useState(shippingAddress.city);
  const [state, setState] = useState(shippingAddress.state);

  const deliveryAddress = (e) => {
    e.preventDefault();
    dispatch(
      saveShippingAddress({
        fullName,
        phone,
        postalCode,
        flat,
        area,
        landmark,
        city,
        state,
      })
    );
    navigate("/payment");
  };
  return (
    <div className="Address_Container">
      <Navbar />
      <CheckoutSteps step1 step2 />
      <div className="Address_main">
        <form className="Form_Container" onSubmit={deliveryAddress}>
          <h1>Shipping Address</h1>

          <div className="Input_Container">
            <p>Full Name</p>
            <input
              type="text"
              placeholder="Enter full name"
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
              required
            />
          </div>
          <div className="Input_Container">
            <p>Mobile Number</p>
            <input
              type="text"
              placeholder="Enter Mobile Number"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              required
            />
          </div>
          <div className="Input_Container">
            <p>Pincode</p>
            <input
              type="text"
              id="postalCode"
              placeholder="Enter postal code"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              required
            ></input>
          </div>
          <div className="Input_Container">
            <p>Flat, House no. Building, Company</p>
            <input
              type="text"
              placeholder="Enter Flat/House no"
              onChange={(e) => setFlat(e.target.value)}
              value={flat}
              required
            />
          </div>
          <div className="Input_Container">
            <p>Area, Street, Sector, Village</p>
            <input
              type="text"
              placeholder="Enter Area/Street"
              onChange={(e) => setArea(e.target.value)}
              value={area}
              required
            />
          </div>
          <div className="Input_Container">
            <p>Landmark</p>
            <input
              type="text"
              placeholder="Enter Landmark"
              onChange={(e) => setLandmark(e.target.value)}
              value={landmark}
            />
          </div>
          <div className="Input_Container">
            <p>Town/City</p>
            <input
              type="text"
              placeholder="Enter city"
              onChange={(e) => setCity(e.target.value)}
              value={city}
              required
            />
          </div>
          <div className="Input_Container">
            <p>State</p>
            <input
              type="text"
              placeholder="Enter State"
              onChange={(e) => setState(e.target.value)}
              value={state}
              required
            />
          </div>
          <button type="submit">Deliver to this Address</button>
        </form>
      </div>
    </div>
  );
}
