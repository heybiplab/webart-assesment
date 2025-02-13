import React from "react";

function TopCategories() {
  return (
    <>
      <section className="topCategories">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="heading mx-auto text-center">
                <span>TOP CATEGORIES</span>
                <h2>Master technology with top tech courses</h2>
              </div>
            </div>
          </div>
          <div className="row my-3 g-3">
            <div className="col-xl col-6">
              <div className="item">
                <div className="imgHolder">
                  <img src="/images/icons/soft-dev.png" alt="" />
                </div>
                <h5>Software development</h5>
                <p>10 courses</p>
              </div>
            </div>
            <div className="col-xl col-6">
              <div className="item">
                <div className="imgHolder">
                  <img src="/images/icons/graph-desn.png" alt="" />
                </div>
                <h5>Graphic design</h5>
                <p>08 courses</p>
              </div>
            </div>
            <div className="col-xl col-6">
              <div className="item">
                <div className="imgHolder">
                  <img src="/images/icons/anim.png" alt="" />
                </div>
                <h5>Animation & 3D modeling</h5>
                <p>05 courses</p>
              </div>
            </div>
            <div className="col-xl col-6">
              <div className="item">
                <div className="imgHolder">
                  <img src="/images/icons/finance.png" alt="" />
                </div>
                <h5>Finance & accounting</h5>
                <p>11 courses</p>
              </div>
            </div>
            <div className="col-xl col-6">
              <div className="item">
                <div className="imgHolder">
                  <img src="/images/icons/pol-sci.png" alt="" />
                </div>
                <h5>Political science</h5>
                <p>05 courses</p>
              </div>
            </div>
          </div>
          <div className="row mt-3 g-5">
            <div className="col-xl-6 col-12">
              <div className="infoBox bgImage">
                <div className="content col-xl-8">
                  <h5>Get started with popular courses fast</h5>
                  <button className="primBtn">View Sources</button>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-12">
              <div className="infoBox">
                <div className="content col-xl-6">
                  <h5>Upgrade your skills online!</h5>
                  <button className="primBtn dark">Apply Now</button>
                </div>
                <div className="imgHolder">
                  <img src="/images/other/img2.jpg" alt="" />
                  <div className="playAndTitle">
                    <button className="playBtn">
                      <i className="fa-solid fa-play"></i>
                    </button>
                    <p>Acquire essential skills quickly</p>
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

export default TopCategories;
