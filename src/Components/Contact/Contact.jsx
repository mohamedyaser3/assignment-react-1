import React from "react";
import "../Contact/Contact.css";
export default function Contact() {
  return (
    <>
      <div className="contact">
        <div className=" container w-50">
          <h1 className="text-center text-uppercase fw-bold py-3">
            conatct section
          </h1>
          <div className="line-star d-flex justify-content-center align-items-center">
            <div className="line me-3"></div>
            <i class="fa-solid fa-star "></i>
            <div className="line ms-3"></div>
          </div>
          <div className="forms pt-5">
          <div className="mb-3 py-2">
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="UserName"
            />
          </div>
          <div className="mb-3 py-2">
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="UserAge"
            />
          </div>
          <div className="mb-3 py-2">
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="UserEmail"
            />
          </div>
          <div className="mb-3 py-2">
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="UserPassword"
            />
          </div>
          <button className="btn btn-success my-3">send Message</button>
          </div>
        </div>
      </div>
    </>
  );
}
