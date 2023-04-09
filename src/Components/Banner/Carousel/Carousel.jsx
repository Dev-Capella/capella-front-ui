"use client";
import React, { useState, useEffect } from "react";
import { Carousel } from "primereact/carousel";
import { ProductService } from "../service";
import "../banner.css";

export default function ProductCarousel() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    ProductService.getProductsSmall().then((data) => {
      setProducts(data);
    });
  }, []);

  const productTemplate = () => {
    return (
      <div className="border-round m-2 text-center main-banner">
        <div className="mb-3">
          <img
            src={
              "https://n11scdn.akamaized.net/a1/1180_440/23/03/23/56/28/67/39/34/28/30/68/10/64005024216372460092.jpg"
            }
            className="w-full shadow-2"
          />
          <div className="banner-info">
            <div className="banner-info-text">
              <p className="title">
                500 TL ve Üzerine 60 TL 1.000 TL ve Üzerine 110 TL
              </p>
              <p className="desc">İndirim Kuponu Hesabında</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Carousel
      value={products}
      numVisible={1}
      numScroll={1}
      className="custom-carousel"
      circular
      autoplayInterval={3000}
      itemTemplate={productTemplate}
    />
  );
}
