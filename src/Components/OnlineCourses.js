import React from "react";

function OnlineCourses() {
  return (
    <>
      <section className="onlineCourses">
        <div className="container">
          <div className="row">
            <div className="heading">
              <span>ONLINE LEARNING</span>
              <h2>Top online courses</h2>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-xl-4">
              <div className="item">
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
                  <hr />
                  <button className="primBtn mt-2">Add To Cart</button>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="item">
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
                  <hr />
                  <button className="primBtn mt-2">Add To Cart</button>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="item">
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
                  <hr />
                  <button className="primBtn mt-2">Add To Cart</button>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="item">
                <div className="imgHolder">
                  <img src="/images/courses/img1.jpg" alt="" />
                  <div className="priceBox">$99</div>
                </div>
                <div className="content">
                  <span>Development</span>
                  <h5>Drive personal success with development courses</h5>
                  <div className="review">
                    <div>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <p>4.6 (280)</p>
                  </div>
                  <hr />
                  <button className="primBtn mt-2">Add To Cart</button>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="item">
                <div className="imgHolder">
                  <img src="/images/courses/img1.jpg" alt="" />
                  <div className="priceBox">$85</div>
                </div>
                <div className="content">
                  <span>Software</span>
                  <h5>Transform your skills with software learning</h5>
                  <div className="review">
                    <div>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <p>4.9 (580)</p>
                  </div>
                  <hr />
                  <button className="primBtn mt-2">Add To Cart</button>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="item">
                <div className="imgHolder">
                  <img src="/images/courses/img1.jpg" alt="" />
                  <div className="priceBox">$80</div>
                </div>
                <div className="content">
                  <span>Design</span>
                  <h5>Create visual masterpieces with design skills</h5>
                  <div className="review">
                    <div>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <p>5.0 (190)</p>
                  </div>
                  <hr />
                  <button className="primBtn mt-2">Add To Cart</button>
                </div>
              </div>
            </div>
            <div className="col-xl-12 mt-5 text-center">
              <button className="primBtn dark mt-2 px-5">
                We help you locate the perfect tutor. Browse our all courses
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OnlineCourses;
