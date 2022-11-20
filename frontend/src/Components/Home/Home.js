import React, { useEffect } from "react";
import Navbar from "./Navbar";
import ProductCard from "./ProductCard";
import "./homestyles.css";
import Footer from "../Footer/Footer";
import LoadingBox from "../LoadingBox/LoadingBox";
import MessageBox from "../MessageBox/MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../Redux/Actions/productActions";

export default function Home() {
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts({}));
  }, [dispatch]);
  return (
    <div className="home">
      <Navbar />
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          <div className="home_banner">
            <img className="home_image" src="./banner.jpg" alt="banner" />
            <img
              className="home-image"
              src="./mobile_banner.jpg"
              alt="Mobile Banner"
            />
          </div>
          <div className="products_row">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      )}
      {/* <Footer /> */}
    </div>
  );
}
