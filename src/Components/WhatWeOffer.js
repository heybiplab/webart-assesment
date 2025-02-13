import React from "react";

function WhatWeOffer() {
  return (
    <>
      <section className="whatWeOffer">
        <div className="container">
          <div className="row gx-5">
            <div className="col-xl-6">
              <div className="imgGroup">
                <div className="imgHolder">
                  <img src={"/images/what-we-offer/img1.jpg"} alt="" />
                </div>
                <div className="imgHolder two">
                  <img src={"/images/what-we-offer/img2.jpg"} alt="" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 my-auto">
              <div className="heading">
                <span>WHAT WE OFFER</span>
                <h2>Accelerate growth with effective learning</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Senectus placerat sit
                  lectus semper orci amet diam commodo vel. Laoreet
                </p>
              </div>
              <div className="content">
                <ul>
                  <li>
                    <i className="fa-regular fa-circle-check"></i>Comprehensive
                    course library
                  </li>
                  <li>
                    <i className="fa-regular fa-circle-check"></i>Collaborative
                    learning environment
                  </li>
                  <li>
                    <i className="fa-regular fa-circle-check"></i>Personalized
                    learning paths
                  </li>
                  <li>
                    <i className="fa-regular fa-circle-check"></i>Career support
                    & online guidance
                  </li>
                </ul>
                <div className="bootLegCTA">
                  <p>Still have questions? We're here to help</p>
                  <button className="primBtn">Get started</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhatWeOffer;
