import React from "react";
import "../Footer/Footer.css";
export default function Footer() {
  return (
    <>
      <footer>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-4">
              <div className="">
                <div className="location text-light text-center">
                  <h2 className="text-uppercase">location</h2>
                  <p>2215 John Daniel Drive</p>
                  <p>Clark, MO 65243</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="">
                <div className="sochil text-light text-center">
                  <h2 className="text-uppercase">around the wep</h2>
                  <div className="icon py-2">
                    <i class="fa-brands fa-facebook mx-2"></i>
                    <i class="fa-brands fa-twitter mx-2"></i>
                    <i class="fa-brands fa-linkedin mx-2"></i>
                    <i class="fa-solid fa-globe mx-2"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="">
                <div className="about text-light text-center">
                  <h2 className="text-uppercase">about freelancer</h2>
                  <p>
                    Freelance is a free to use, licensed Bootstrap theme created
                    by Route
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyright text-light text-center py-3">
        <p>Copyright © Your Website 2021</p>
      </div>
    </>
  );
}
