

import React, { useState } from "react";
import "../Portfolio/Portfolio.css";
import img1 from "../../../img/poert1.png";
import img2 from "../../../img/poert2.png";
import img3 from "../../../img/poert3.png";

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const images = [
    { src: img1 },
    { src: img2 },
    { src: img3 },
    { src: img1 },
    { src: img2 },
    { src: img3 },
  ];

  const openLightbox = (img) => {
    setSelectedImage(img);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setIsOpen(false);
  };

  return (
    <>
      <div className="portfolio">
        <div className="container">
          <h1 className="text-center text-uppercase fw-bold py-3">
            portfolio component
          </h1>
          <div className="line-star d-flex justify-content-center align-items-center">
            <div className="line me-3"></div>
            <i className="fa-solid fa-star"></i>
            <div className="line ms-3"></div>
          </div>

          <div className="pic">
            <div className="row">
              {images.map((image, i) => (
                <div className="col-md-4" key={i}>
                  <div className="position-relative my-3">
                    <div
                      className="imgcard"
                      onClick={() => openLightbox(image.src)}
                    >
                      <img
                        src={image.src}
                        className="w-100 rounded-3"
                        alt={`img-${i}`}
                      />
                      <div className="layer- d-flex justify-content-center align-items-center">
                        <i className="fa-solid fa-plus fa-6x text-light z-3"></i>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {isOpen && (
            <div className="lightbox-overlay" onClick={closeLightbox}>
              <div
                className="lightbox-content"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage}
                  alt="enlarged"
                  className="w-50 rounded-3"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
