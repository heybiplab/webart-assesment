import React from "react";

function TrendingCourses() {
  return (
    <>
      <section className="onlineCourses bg-transparent">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="heading mx-auto text-center">
                <span>TRENDING COURSES</span>
                <h2>Explore our top rated course programs</h2>
              </div>
            </div>
          </div>
          <div className="row my-3 g-3">
            <div className="col-xl-4">
              <div className="item" style={{ border: "1px solid #00000033" }}>
                <div className="imgHolder">
                  <img src="/images/courses/img1.jpg" alt="" />
                  <div className="priceBox">Free</div>
                </div>
                <div className="content">
                  <span>Management</span>
                  <h5>Enhance your management abilities online</h5>
                  <div className="review">
                    <div>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <p>5.0 (250)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="item" style={{ border: "1px solid #00000033" }}>
                <div className="imgHolder">
                  <img src="/images/courses/img2.jpg" alt="" />
                  <div className="priceBox">$90</div>
                </div>
                <div className="content">
                  <span>Design</span>
                  <h5>Enhance your design skill abilities online</h5>
                  <div className="review">
                    <div>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <p>4.8 (150)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="item" style={{ border: "1px solid #00000033" }}>
                <div className="imgHolder">
                  <img src="/images/courses/img3.jpg" alt="" />
                  <div className="priceBox">Free</div>
                </div>
                <div className="content">
                  <span>Finance</span>
                  <h5>Achieve financial freedom through learning</h5>
                  <div className="review">
                    <div>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <p>4.9 (100)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TrendingCourses;
