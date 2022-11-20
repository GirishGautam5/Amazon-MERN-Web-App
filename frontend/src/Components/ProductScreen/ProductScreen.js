import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Rating from "@material-ui/lab/Rating";
import Navbar from "../Home/Navbar";
import "./ProductScreenStyles.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { detailsProduct } from "../../Redux/Actions/productActions";
import LoadingBox from "../LoadingBox/LoadingBox";
import MessageBox from "../MessageBox/MessageBox";
export default function ProductScreen(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);
  const { id } = useParams();
  //const product = products.find((p) => p._id === id);
  //const productId = props.match.params.id;
  const productDetails = useSelector((state) => state.productDetails);
  console.log(productDetails, "productdetails");
  const { loading, error, product } = productDetails;
  console.log(product, "product");
  useEffect(() => {
    dispatch(detailsProduct(id));
  }, [dispatch, id]);

  const addToCartHandler = () => {
    navigate(`/cart/${id}?qty=${qty}`);
  };
  return (
    <div className="product-screen">
      <Navbar />
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
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
                  <h1>{product?.name}</h1>
                </li>
                <li>
                  <Rating
                    name="half-rating-read"
                    defaultValue={product?.rating}
                    precision={0.5}
                    readOnly
                  />
                </li>
                <li>
                  <span className="brand"> Price: </span> ₹{product?.price}
                </li>
                <li>
                  <span className="brand"> Brand: </span> {product?.brand}
                </li>
                <li>
                  <span className="brand"> Model Name: </span>
                  {product?.ModelName}
                </li>
                {product?.OS && (
                  <li>
                    <span className="brand"> OS: </span>
                    {product?.OS}
                  </li>
                )}
              </ul>
            </div>
            <div className="product_col-3">
              <div className="product_card_body">
                <ul>
                  <li>
                    <div className="product_row_body">
                      <div>Price</div>
                      <div className="price">&#x20B9;{product?.price}</div>
                    </div>
                  </li>
                  <li>
                    <div className="product_row_body">
                      <div className="status">Status</div>
                      <div>
                        {product.countInStock > 0 ? (
                          <span className="success">In Stock</span>
                        ) : (
                          <span className="error">Unavailable</span>
                        )}
                      </div>
                    </div>
                  </li>
                  {product.countInStock > 0 && (
                    <>
                      <li>
                        <div className="row">
                          <div>Qty</div>
                          <div>
                            <select
                              value={qty}
                              onChange={(e) => setQty(e.target.value)}
                            >
                              {[...Array(product.countInStock).keys()].map(
                                (x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                )
                              )}
                            </select>
                          </div>
                        </div>
                      </li>
                      <li>
                        <button
                          onClick={addToCartHandler}
                          className="addtocart"
                        >
                          Add to Cart
                        </button>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
