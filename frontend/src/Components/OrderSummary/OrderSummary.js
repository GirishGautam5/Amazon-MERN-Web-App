import React, { useEffect } from "react";
import CheckoutSteps from "../CheckoutSteps/CheckoutSteps";
import Navbar from "../Home/Navbar";
import "./styles.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../../Redux/Actions/orderActions";
import { ORDER_CREATE_RESET } from "../../Redux/Constants/orderConstants";
import LoadingBox from "../LoadingBox/LoadingBox";
import MessageBox from "../MessageBox/MessageBox";

export default function OrderSummary() {
  const cart = useSelector((state) => state.cart);
  const orderCreate = useSelector((state) => state.orderCreate);
  const { loading, success, error, order } = orderCreate;
  const toPrice = (num) => Number(num.toFixed(2));
  cart.itemsPrice = toPrice(
    cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0)
  );
  cart.shippingPrice = cart.itemsPrice > 100 ? toPrice(40) : toPrice(10);
  cart.taxPrice = toPrice(0.15 * cart.itemsPrice);
  cart.totalPrice = cart.itemsPrice + cart.shippingPrice;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const placeOrderHandler = () => {
    // TODO: dispatch place order action
    dispatch(createOrder({ ...cart, orderItems: cart.cartItems }));
  };
  useEffect(() => {
    if (success) {
      navigate("/success");
      dispatch({ type: ORDER_CREATE_RESET });
    }
  }, [dispatch, navigate, order, success]);
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
              <p>{cart.shippingAddress.fullName}</p>
              <p>{cart.shippingAddress.flat}</p>
              <p>{cart.shippingAddress.area}</p>
              <p>{cart.shippingAddress.landmark}</p>
              <p>
                {cart.shippingAddress.city} {cart.shippingAddress.state}
              </p>

              <p>Phone: {cart.shippingAddress.phone}</p>
            </div>
          </div>
          <div>
            <h5>Payment Method</h5>
            <p>{cart.paymentMethod}</p>
          </div>
          <div className="order_items">
            <h5>Your Order</h5>
            <div>
              {cart.cartItems?.map((item) => (
                <div>
                  <div className="product">
                    <div className="product_img">
                      <img
                        src={item.image}
                        alt="product"
                        className="product_image"
                      />
                    </div>
                    <div className="product_description">
                      <div className="min-30">
                        <Link to={`/product/${item.product}`}>
                          <h3 className="name-span">{item.name}</h3>
                        </Link>
                      </div>
                      <p>
                        {" "}
                        {item.qty} x ₹{item.price} = ₹{item.qty * item.price}
                      </p>
                      <p>{item.description}</p>
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
                <div>₹{cart.itemsPrice.toFixed(2)}</div>
              </div>
            </li>
            <li>
              <div className="row">
                <p>Delivery</p>
                <p>₹{cart.shippingPrice.toFixed(2)}</p>
              </div>
            </li>
            <li>
              <div className="seperator_line" />
            </li>
            <li>
              <div className="row">
                <strong>Order Total</strong>
                <strong>₹{cart.totalPrice.toFixed(2)}</strong>
              </div>
            </li>
            <li className="button_li">
              <button
                onClick={placeOrderHandler}
                disabled={cart.cartItems.length === 0}
              >
                Place Order
              </button>
            </li>
            <li>
              {loading && <LoadingBox></LoadingBox>}
              {error && <MessageBox variant="danger">{error}</MessageBox>}
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
