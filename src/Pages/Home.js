import React from "react";
import RecentBlog from "../Components/RecentBlog";
import OnlineCourses from "../Components/TrendingCourses";
import Testimonials from "../Components/Testimonials";
import WhatWeOffer from "../Components/WhatWeOffer";
import TrendingCourses from "../Components/TrendingCourses";
import TopCategories from "../Components/TopCategories";
import PartneredUniversities from "../Components/PartneredUniversities";

function Home() {
  return (
    <>
      <section className="homeBanner">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 offset-xl-5 col-12">
              <div className="content">
                <span>The future of education</span>
                <h1>
                  Over <span>10,000+</span> courses across various subjects
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Et ac donec
                  scelerisque elementum lectus id est. Varius hac ipsum aliquet
                  id
                </p>
                <button className="primBtn">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PartneredUniversities />
      <TopCategories />
      <OnlineCourses />
      <WhatWeOffer />
      <Testimonials />
      <TrendingCourses />
      <RecentBlog />
    </>
  );
}

export default Home;
