import React from "react";
import { Link, useParams } from "react-router-dom";
import data from "../../data";
import Navbar from "../Home/Navbar";
import "./ProductScreenStyles.css";
export default function ProductScreen(props) {
  const { id } = useParams();
  const product = data.products.find((x) => x.id === Number(id));
  console.log(product, "product");
  if (!product) {
    return <div> Product Not Found</div>;
  }
  const addToCart = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <Navbar />
      <Link to="/">Back to result</Link>
      <div className="product_row product_row_top">
        <div className="product_col-2">
          <img
            className="products-image"
            src={product.image}
            alt={product.name}
          />
        </div>
        <div className="product_col-1">
          <ul>
            <li>
              <h1>{product.title}</h1>
            </li>
            <li>{product.rating}</li>
            <li>Price : ${product.price}</li>
            <li>
              Description:
              <p>{product.description}</p>
            </li>
          </ul>
        </div>
        <div className="product_col-3">
          <div className="product_card_body">
            <ul>
              <li>
                <div className="product_row_body">
                  <div>Price</div>
                  <div className="price">${product.price}</div>
                </div>
              </li>
              <li>
                <div className="product_row_body">
                  <div>Status</div>
                  <div>
                    {product.countInStock > 0 ? (
                      <span className="success">In Stock</span>
                    ) : (
                      <span className="error">Unavailable</span>
                    )}
                  </div>
                </div>
              </li>
              <li>
                <button onClick={addToCart}>Add to Cart</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
