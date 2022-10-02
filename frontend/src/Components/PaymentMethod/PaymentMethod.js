import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../../ContextAPI/StateProvider";
import CheckoutSteps from "../CheckoutSteps/CheckoutSteps";
import Navbar from "../Home/Navbar";
import "./styles.css";

export default function PaymentMethod() {
  const [paymentMethod, setPaymentMethod] = useState("PayPal");
  const [{address}, dispath] = useStateValue();
  console.log(address)
  const navigate = useNavigate();
  if(!address){
    navigate("/address")
  }
  const continuehandler=(e)=>{
    e.preventDefault()
    navigate('/placeorder')
  }
  return (
    <div className="payment_container">
      <Navbar />
      <CheckoutSteps step1 step2 step3 />
      <div className="payment_body">
        <div className="form_container">
          <div className="input_container">
            <div>
            <h1>Payment Method</h1>
            </div>
           <div className="input_radio">
           <input
              type="radio"
              id="paypal"
              value="PayPal"
              name="paymentMethod"
              required
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></input>
            <label htmlFor="paypal">PayPal</label>
           </div>
           <div className="input_radio">
           <input
              type="radio"
              id="stripe"
              value="Stripe"
              name="paymentMethod"
              required
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></input>
            <label htmlFor="stripe">Stripe</label>
           </div>
           
          </div>
          <button onClick={continuehandler}>Continue</button>
        </div>
      </div>
    </div>
  );
}
