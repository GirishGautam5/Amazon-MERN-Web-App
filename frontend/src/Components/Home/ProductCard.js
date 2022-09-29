import React from "react";
import Rating from "@material-ui/lab/Rating";
import "./ProductCardstyles.css";
import { useStateValue } from "../../ContextAPI/StateProvider";

export default function ProductCard(props) {
  const {id,image,title,price,rating} = props;
  const [{basket}, dispatch] = useStateValue();
  console.log(basket,'basket')
  const addToCart=(e)=>{
    e.preventDefault();
    dispatch({
      type: 'ADD_ITEM_TO_CART',
      item: {
        id,
        title,
        price,
        image,
        rating,
      }
    })
  }
  return (
    <div className="product-card">
      <div className="product-image">
        <img
          src={image}
          alt="phone"
        />
      </div>
      <div className="description">
        <h5>{title}</h5>
        <Rating
          name="half-rating-read"
          defaultValue={rating}
          precision={0.5}
          readOnly
        />
        <p>{price}</p>
        <button onClick={addToCart}>Add to Cart</button>
      </div>
    </div>
  );
}
