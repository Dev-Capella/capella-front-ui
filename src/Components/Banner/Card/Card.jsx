import React from "react";
import "../banner.css";

export default function CardBanner({ banner }) {
  return (
    <div className=" h-full card-banner-container">
      <span className="card-banner-image-container">
        <img className="card-banner-image" src={`http://localhost:9000${banner.gallery.medias[0].absolutePath}`} />
      </span>

      <div className="card-summary">
        <span className="card-banner-left-text">{banner?.name}</span>

        <span className="card-banner-right-text">
          {banner?.text}
          <i className="pi pi-angle-right" style={{ fontSize: "1rem" }}></i>
        </span>
      </div>
    </div>
  );
}
