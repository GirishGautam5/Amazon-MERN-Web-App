import React from "react";
import Rating from "@material-ui/lab/Rating";
import "./ProductCardstyles.css";
import { Link } from "react-router-dom";

export default function ProductCard(props) {
  const { product } = props;
  const { _id, image, name, price, rating } = product;
  return (
    <div className="product-card">
      <div className="product-image">
        <Link to={`/product/${_id}`}>
          <img src={image} alt="phone" />
        </Link>
      </div>

      <div className="description">
        <Link to={`/product/${_id}`}>
          <h5>{name}</h5>
        </Link>
        <Rating
          name="half-rating-read"
          defaultValue={rating}
          precision={0.5}
          readOnly
        />
        <p>{price}</p>
        {/* <button onClick={addToCart}>Add to Cart</button> */}
      </div>
    </div>
  );
}
