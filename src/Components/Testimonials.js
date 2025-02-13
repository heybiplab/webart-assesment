import React from "react";

function Testimonials() {
  return (
    <>
      <section className="testimonials">
        <div className="container">
          <div className="row g-5">
            <div className="col-xl-12">
              <div className="d-flex justify-content-between align-items-center flex-wrap">
                <div className="heading">
                  <span>TESTIMONIALS</span>
                  <h2>Discover our impact through testimonials</h2>
                </div>
                <div className="someSillyPoints">
                  <div>
                    <h3>15K+</h3>
                    <p>Total students enrolled</p>
                  </div>
                  <div
                    style={{
                      paddingLeft: "20px",
                      marginLeft: "20px",
                      borderLeft: "1px solid #0000004D",
                    }}
                  >
                    <h3>5K+</h3>
                    <p>Global job placement</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="imgHolder">
                <img src="/images/testimonials/img1.jpg" alt="" />
              </div>
            </div>
            <div className="col-xl-6 my-xl-auto mt-3">
              <div className="content">
                <h4>“I really enjoyed the online course”</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Ultrices sed pharetra
                  varius et semper vitae sed. Quis quis egestas nisi semper
                  eget. Amet tristique urna nec ornare ornare orci senectus.
                  Amet ipsum pulvinar molestie amet posuere porttitor nunc vel
                  arcu. Aenean adipiscing quam
                </p>
                <h5>Ronald Osinski</h5>
                <p className="mb-0">Student's guardians</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
