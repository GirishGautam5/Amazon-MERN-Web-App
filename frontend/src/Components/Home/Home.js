import React from "react";
import Navbar from "./Navbar";
import ProductCard from "./ProductCard";
import "./homestyles.css";

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="home_banner">
        <img className="home_image" src="./banner.jpg" alt="banner" />
        <img
          className="home-image"
          src="./mobile_banner.jpg"
          alt="Mobile Banner"
        />
      </div>
      <div className="products_row">
        <ProductCard
          image={
            "https://m.media-amazon.com/images/I/413u56t+CiL._AC_SY200_.jpg"
          }
          title={"One plus Nord"}
          price={10000}
          rating={4.5}
        />
        <ProductCard
          image={
            "https://m.media-amazon.com/images/I/413u56t+CiL._AC_SY200_.jpg"
          }
          title={"One plus Nord"}
          price={150000}
          rating={3}
        />
        <ProductCard
          image={
            "https://m.media-amazon.com/images/I/413u56t+CiL._AC_SY200_.jpg"
          }
          title={"One plus Nord"}
          price={200100}
          rating={3.5}
        />
        <ProductCard
          image={
            "https://m.media-amazon.com/images/I/413u56t+CiL._AC_SY200_.jpg"
          }
          title={"One plus Nord"}
          price={21000}
          rating={2.5}
        />
      </div>
    </div>
  );
}
