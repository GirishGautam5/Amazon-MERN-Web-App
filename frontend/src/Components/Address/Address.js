import React, { useState } from "react";
import { useStateValue } from "../../ContextAPI/StateProvider";
import CheckoutSteps from "../CheckoutSteps/CheckoutSteps";
import Navbar from "../Home/Navbar";
import { useNavigate } from "react-router-dom";
import "./styles.css";
export default function Address() {
    const [{address}, dispatch] = useStateValue();
  const [fullName, setFullName] = useState(address.fullName);
  const [phone, setPhone] = useState(address.phone);
  const [postalCode, setPostalCode] = useState(address.postalCode);
  const [flat, setFlat] = useState(address.flat);
  const [area, setArea] = useState(address.area);
  const [landmark, setLandmark] = useState(address.landmark);
  const [city, setCity] = useState(address.city);
  const [state, setState] = useState(address.state);
  const navigate = useNavigate();
  const deliveryAddress =(e)=>{
    e.preventDefault();
    dispatch({
        type: 'ADD_ADDRESS',
        item: {
            fullName,
            phone,
            postalCode,
            flat,
            area,
            landmark,
            city,
            state,
        }
    })
navigate("/payment")
  }
  return (
    <div className="Address_Container">
      <Navbar />
      <CheckoutSteps step1 step2 />
      <div className="Address_main">
        <div className="Form_Container">
          <div className="Input_Container">
            <p>Full Name</p>
            <input
              type="text"
              placeholder="Enter full name"
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
            />
          </div>
          <div className="Input_Container">
            <p>Mobile Number</p>
            <input
              type="text"
              placeholder="Enter Mobile Number"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
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
            />
          </div>
          <div className="Input_Container">
            <p>Area, Street, Sector, Village</p>
            <input
              type="text"
              placeholder="Enter Area/Street"
              onChange={(e) => setArea(e.target.value)}
              value={area}
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
            />
          </div>
          <div className="Input_Container">
            <p>State</p>
            <input
              type="text"
              placeholder="Enter State"
              onChange={(e) => setState(e.target.value)}
              value={state}
            />
          </div>
          <button onClick={deliveryAddress}>Deliver to this Address</button>
        </div>
      </div>
    </div>
  );
}
