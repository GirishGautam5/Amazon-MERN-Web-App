import React from "react";
import { useStateValue } from "../../ContextAPI/StateProvider";
import CheckoutSteps from "../CheckoutSteps/CheckoutSteps";
import CurrencyFormat from "react-currency-format";
import Navbar from "../Home/Navbar";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { getTotalCartPrice } from "../../ContextAPI/Reducer";

export default function OrderSummary() {
  const [{ address, basket }] = useStateValue();
  const navigate = useNavigate()
  return (
    <div className="order_container">
      <Navbar />
      <CheckoutSteps step1 step2 step3 step4 />
      <div className="order_main">
        <div className="review_order">
          <h2>Review Your order</h2>
          <div className="Address_container">
            <h5>Shipping Address</h5>
            <div>
              <p>{address.fullName}</p>
              <p>{address.flat}</p>
              <p>{address.area}</p>
              <p>{address.landmark}</p>
              <p>
                {address.city} {address.state}
              </p>

              <p>Phone: {address.phone}</p>
            </div>
          </div>
          <div className="order_items">
          <h5>Your Order</h5>
          <div>
          {basket?.map((item) => (
            <div>
            <div className="product">
              <div className="product_img">
                <img src={item.image} alt="product" className="product_image" />
              </div>
              <div className="product_description">
                <h4>{item.title}</h4>
                <p>{item.price}</p>
              </div>
            </div>
            <div className="seperator" />
            </div>
          ))}
          </div>
          </div>
        </div>
        <div className="order_summary">
            <ul>
                <li>
                <h2>Order Summary</h2>
                </li>
                <li>
                    <div className="row">
                        <p>Items:</p>
                        <CurrencyFormat 
                            renderText={(value)=>(
                                <>
                                <p>{value}</p>
                                </>
                            )}
                            decimalScale={2}
                            value={getTotalCartPrice(basket)}
                            displayType="text"
                            thousandSeparator={true}
                            prefix={"₹"}
                            />
                    </div>
                </li>
                <li>
                  <div className="row">
                    <p>Delivery</p>
                    <p>0.00</p>
                  </div>
                </li>
                <li>
                  <div className="seperator_line" />
                </li>
                <li>
                  <div className="row">
                    <strong>Order Total</strong>
                    <strong>{100}</strong>
                  </div>
                </li>
                <li className="button_li">
              <button>Place Order</button>
                </li>
            </ul>
            {/* <ul>
                <li>
                <h2>Order Summary</h2>
                </li>
                <li>
                    <div className="row">
                        <div>Items:</div>
                        <div>
                            <CurrencyFormat 
                            renderText={(value)=>(
                                <>
                                <p>{value}</p>
                                </>
                            )}
                            decimalScale={2}
                            value={getTotalCartPrice(basket)}
                            displayType="text"
                            thousandSeparator={true}
                            prefix={"₹"}
                            />
                        </div>
                    </div>
                </li>
            </ul> */}
          {/* <CurrencyFormat
            renderText={(value) => (
              <>
                <p>
                  Subtotal ({basket?.length} items) : <strong>{value}</strong>
                </p>
                <small>
                  <input type="checkbox" />
                  <span>This order contains a gift.</span>
                </small>
              </>
            )}
            decimalScale={2}
            value={getTotalCartPrice(basket)}
            displayType="text"
            thousandSeparator={true}
            prefix={"₹"}
          />
          <button onClick={()=>navigate("/address")}>Proceed to Checkout</button> */}
        </div>
      </div>
    </div>
  );
}
