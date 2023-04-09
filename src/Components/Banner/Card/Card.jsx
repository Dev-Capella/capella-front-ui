import React from "react";
import "../banner.css";

export default function CardBanner({ banner }) {
  return (
    <div className=" h-full card-banner-container">
      <span className="card-banner-image-container">
        <img className="card-banner-image" src={banner?.imgUrl} />
      </span>

      <div className="card-summary">
        <span className="card-banner-left-text">{banner?.text}</span>

        <span className="card-banner-right-text">
          {banner?.buttonText}
          <i className="pi pi-angle-right" style={{ fontSize: "1rem" }}></i>
        </span>
      </div>
    </div>
  );
}
