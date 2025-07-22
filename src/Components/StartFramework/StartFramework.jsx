import React from "react";
import "../StartFramework/StartFramework.css";
import imgs from "../../../img/avataaars.svg";
export default function StartFramework() {
  return (
    <>
      <section className="overflow-auto">
        <div className="container">
          <div className="img text-center">
            <img src={imgs} className="w-25" alt="avatar" />
            <div className="content">
              <h1 className="text-center text-uppercase text-light fw-bold mt-5">
                start Framework
              </h1>
              <div className="line-sta d-flex justify-content-center align-items-center">
                <div className="line me-3"></div>
                <i class="fa-solid fa-star text-light"></i>
                <div className="line ms-3"></div>
              </div>
              <p className="text-light py-3">
                Graphic Artist - Web Designer - Illustrator
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
