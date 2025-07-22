import React from "react";
import "../About/About.css";
export default function About() {
  return (
    <>
      <div className="aboutnav py-5">
        <div className="container py-5">
          <h1 className="text-center text-light text-uppercase fw-bold">
            about component
          </h1>
          <div className="line-sta d-flex justify-content-center align-items-center mt-3">
            <div className="line me-3"></div>
            <i class="fa-solid fa-star text-light"></i>
            <div className="line ms-3"></div>
          </div>
          <div className="row text-light px-5 mt-3">
            <div className="col-md-6 ps-md-5">
              <div className="content">
                <p>
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
            </div>
            <div className="col-md-6 ps-md-5">
              <div className="content">
                <p>
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
