import React from "react";
import Navbar from "./Navbar";
import ProductCard from "./ProductCard";
import "./homestyles.css";
import Footer from "../Footer/Footer";
import data from "../../data";

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
      {data.products.map((product)=>(
        <ProductCard key={product.id} product={product}/>
      ))}
      </div>
      <Footer />
    </div>
  );
}
