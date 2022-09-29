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
          id={1}
          image={
            "https://m.media-amazon.com/images/I/413u56t+CiL._AC_SY200_.jpg"
          }
          title={"One plus Nord"}
          price={10000}
          rating={4.5}
        />
        <ProductCard
          id={2}
          image={
            "https://m.media-amazon.com/images/I/41CkKbseMGL._AC_SY200_.jpg"
          }
          title={"Samsung S20"}
          price={15000}
          rating={3}
        />
        <ProductCard
          id={3}
          image={
            "https://m.media-amazon.com/images/I/41ZGJxnJu1S._AC_SY200_.jpg"
          }
          title={"Samsung M32"}
          price={12000}
          rating={3.5}
        />
        <ProductCard
          id={4}
          image={
            "https://m.media-amazon.com/images/I/41d69zua5LL._AC_SY200_.jpg"
          }
          title={"One plus Nord Smart Watch"}
          price={20000}
          rating={2.5}
        />
      </div>
    </div>
  );
}
