import React, { useEffect } from "react";
import Navbar from "../Home/Navbar";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { detailsOrder } from "../../Redux/Actions/orderActions";
import "./orderDetailsstyles.css";

export default function OrderDetails() {
  const { id } = useParams();
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const navigate = useNavigate();
  if (!userInfo) {
    navigate("/signin");
  }
  const orderDetails = useSelector((state) => state.orderDetails);
  const cart = useSelector((state) => state.cart);
  const toPrice = (num) => Number(num.toFixed(2));
  cart.itemsPrice = toPrice(
    cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0)
  );
  cart.shippingPrice = cart.itemsPrice > 100 ? toPrice(40) : toPrice(10);
  cart.taxPrice = toPrice(0.15 * cart.itemsPrice);
  cart.totalPrice = cart.itemsPrice + cart.shippingPrice;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsOrder(id));
  }, [dispatch, id]);

  return (
    <div className="order_Details_container">
      <Navbar />
      <div className="orderDetails">
        <h2>Order Details</h2>
        <div className="orderView">
          <div className="order_Address_container">
            <h3>Shipping Address</h3>
            <div>
              <p>{orderDetails?.order?.shippingAddress?.fullName}</p>
              {/* <p>{orderDetails?.order?.shippingAddress?.flat}</p> */}
              <p>{orderDetails?.order?.shippingAddress?.postalCode}</p>
              <p>{orderDetails?.order?.shippingAddress?.landmark}</p>
              <p>{orderDetails?.order?.shippingAddress?.city}</p>

              <p>{orderDetails?.order?.shippingAddress?.state}</p>
            </div>
          </div>
          <div className="order_payment">
            <h3>Payment Method</h3>
            <p>{orderDetails?.order?.paymentMethod}</p>
          </div>
          <div className="orderdetails_summary">
            <h3>Order Summary</h3>

            <div className="row">
              <p>Items:</p>
              <div>₹{orderDetails?.order?.itemsPrice?.toFixed(2)}</div>
            </div>

            <div className="row">
              <p>Delivery:</p>
              <p>₹{orderDetails?.order?.shippingPrice?.toFixed(2)}</p>
            </div>

            <div className="seperator_line" />

            <div className="row">
              <strong>Order Total:</strong>
              <strong>₹{orderDetails?.order?.totalPrice?.toFixed(2)}</strong>
            </div>
          </div>
        </div>
        <div className="order_Details_items">
          <div>
            {orderDetails?.order?.orderItems?.map((item) => (
              <div>
                <div className="order_Details_product">
                  <div className="product_img">
                    <img
                      src={item.image}
                      alt="product"
                      className="product_image"
                    />
                  </div>
                  <div className="product_description">
                    <div>
                      <Link to={`/product/${item.product}`}>{item.name}</Link>
                    </div>
                    <p>
                      {" "}
                      {item.qty} x ₹{item.price} = ₹{item.qty * item.price}
                    </p>
                    <p>{item.description}</p>
                  </div>
                  <div>
                    <button
                      className="order_again"
                      onClick={() => {
                        navigate(`/product/${item.product}`);
                      }}
                    >
                      <span className="order_span"> Buy it Again</span>
                    </button>
                  </div>
                </div>
                <div className="seperator" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
