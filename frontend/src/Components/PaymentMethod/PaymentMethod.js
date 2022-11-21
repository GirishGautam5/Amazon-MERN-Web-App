import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { savePaymentMethod } from "../../Redux/Actions/cartActions";
import CheckoutSteps from "../CheckoutSteps/CheckoutSteps";
import Navbar from "../Home/Navbar";
import "./styles.css";

export default function PaymentMethod() {
  const [paymentMethod, setPaymentMethod] = useState("");
  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const navigate = useNavigate();
  if (!userInfo) {
    navigate("/signin");
  }
  // if (!shippingAddress.address) {
  //   navigate('/signin/shipping');
  // }
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    navigate("/placeorder");
  };
  // useEffect(()=>{
  //   if(paymentMethod !== ''){
  //     dispatch(savePaymentMethod(paymentMethod))
  //     //navigate('/placeorder');
  //   }
  // },[])
  return (
    <div className="payment">
      <Navbar />
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <form className="paymentform" onSubmit={submitHandler}>
        <div>
          <h1>Payment Method</h1>
        </div>
        <div>
          <div>
            <input
              type="radio"
              id="paypal"
              value="PayPal"
              name="paymentMethod"
              required
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></input>
            <label htmlFor="paypal">PayPal</label>
          </div>
        </div>
        <div>
          <div>
            <input
              type="radio"
              id="phonepay"
              value="PhonePay"
              name="paymentMethod"
              required
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></input>
            <label htmlFor="phonepay">PhonePay</label>
          </div>
        </div>
        <div>
          <div>
            <input
              type="radio"
              id="gpay"
              value="Google Pay"
              name="paymentMethod"
              required
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></input>
            <label htmlFor="gpay">Google Pay</label>
          </div>
        </div>
        <div>
          <div>
            <input
              type="radio"
              id="cod"
              value="Cash on Delivery"
              name="paymentMethod"
              required
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></input>
            <label htmlFor="cod">Cash On Delivery</label>
          </div>
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}
