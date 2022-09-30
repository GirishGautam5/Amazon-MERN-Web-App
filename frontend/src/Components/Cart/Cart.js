import React from "react";
import { useStateValue } from "../../ContextAPI/StateProvider";
import Navbar from "../Home/Navbar";
import CurrencyFormat from "react-currency-format";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import { getTotalCartPrice } from "../../ContextAPI/Reducer";

export default function Cart() {
  const navigate = useNavigate();
  const [{ basket }, dispatch] = useStateValue();
  console.log(basket, "basket");
  const removeItem=(e,id)=>{
    e.preventDefault();
    dispatch({
      type: 'REMOVE_ITEM_FROM_CART',
      id: id,
    })
  }
  return (
    <div className="cart">
      <Navbar />
      <div className="cart_body">
        <div className="shopping_cart">
          <h2>Shopping Cart</h2>
          {basket?.map((item) => (
            <div>
            <div className="product">
              <div className="product_img">
                <img src={item.image} alt="product" className="product_image" />
              </div>
              <div className="product_description">
                <h4>{item.title}</h4>
                <p>{item.price}</p>
                <button onClick={(e)=>removeItem(e,item.id)}>Remove</button>
              </div>
            </div>
            <div className="seperator" />
            </div>
          ))}
        </div>
        <div className="subtotal">
          <CurrencyFormat
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
          <button onClick={()=>navigate("/address")}>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
}
