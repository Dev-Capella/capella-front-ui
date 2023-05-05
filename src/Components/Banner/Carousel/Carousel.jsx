"use client";
import React, { useState, useEffect } from "react";
import { Carousel } from "primereact/carousel";
import { ProductService } from "../service";
import "../banner.css";

export default function ProductCarousel({carousel}) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    ProductService.getProductsSmall().then((data) => {
      setProducts(data);
    });
  }, []);
  
  const productTemplate = (item) => {
    return (
      <div className="border-round m-2 text-center main-banner" >
        <div className="mb-3">
          <img
            src={
              `http://localhost:9000${item.gallery.medias[0].absolutePath}`
            }
            alt="carousel"
            className="w-full shadow-2"
          />
          <div className="banner-info">
            <div className="banner-info-text">
              <p className="title">
                {item.name}
              </p>
              <p className="desc">{item.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Carousel
      value={carousel}
      numVisible={1}
      numScroll={1}
      className="custom-carousel"
      circular
      autoplayInterval={3000}
      itemTemplate={productTemplate}
    />
  );
}
