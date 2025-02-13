import React from "react";
import { Link } from "react-router-dom";

function RecentBlog() {
  return (
    <>
      <section className="recentBlog">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="heading">
                <span>RECENT EDUCATION BLOG</span>
                <h2>How to enhance your learning experience</h2>
              </div>
            </div>
          </div>
          <div className="row my-3 gx-5 gy-3">
            <div className="col-xl-4">
              <div className="item">
                <div className="content">
                  <span>By Willie Mueller</span>
                  <h5>Why education should be a lifelong journey</h5>
                  <div
                    className="my-4"
                    style={{ borderTop: "1px solid #fff" }}
                  />
                  <Link to="/" className="clearLink">
                    Read More <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
                <img src="/images/blogs/img1.jpg" alt="" />
              </div>
            </div>
            <div className="col-xl-4">
              <div className="item">
                <div className="content">
                  <span>By John Terry</span>
                  <h5>Essential skills every student needs to thrive</h5>
                  <div
                    className="my-4"
                    style={{ borderTop: "1px solid #fff" }}
                  />
                  <Link to="/" className="clearLink">
                    Read More <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
                <img src="/images/blogs/img2.jpg" alt="" />
              </div>
            </div>
            <div className="col-xl-4">
              <div className="item">
                <div className="content">
                  <span>By Samuel Mark</span>
                  <h5>How etchnology is revolutionizing education</h5>
                  <div
                    className="my-4"
                    style={{ borderTop: "1px solid #fff" }}
                  />
                  <Link to="/" className="clearLink">
                    Read More <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
                <img src="/images/blogs/img3.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default RecentBlog;
