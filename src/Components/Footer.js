import React from "react";
import AnEarlyCTA from "./AnEarlyCTA";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <AnEarlyCTA />
      <section className="footer">
        <div className="container-fluid">
          <div className="row gy-xl-0 gy-5">
            <div className="col-xl-3">
              <img src="/images/logo-white.png" className="footerLogo" alt="" />
              <p className="desc">
                Lorem ipsum dolor sit amet consectetur. Ultrices sed pharetra
                varius et semper
              </p>
              <div className="social">
                <p>Follow us on:</p>
                <ul>
                  <li>
                    <i className="fa-brands fa-instagram"></i>
                  </li>
                  <li>
                    <i className="fa-brands fa-linkedin-in"></i>
                  </li>
                  <li>
                    <i className="fa-brands fa-facebook-f"></i>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3">
              <h5>Popular courses</h5>
              <ul className="links">
                <li>
                  <Link to="/">Design</Link>
                </li>
                <li>
                  <Link to="/">Finance</Link>
                </li>
                <li>
                  <Link to="/">Management</Link>
                </li>
                <li>
                  <Link to="/">Development</Link>
                </li>
              </ul>
            </div>
            <div className="col-xl-3">
              <h5>Quick links</h5>
              <ul className="links">
                <li>
                  <Link to="/">About us</Link>
                </li>
                <li>
                  <Link to="/">Our course</Link>
                </li>
                <li>
                  <Link to="/">Career</Link>
                </li>
                <li>
                  <Link to="/">Instructor</Link>
                </li>
              </ul>
            </div>
            <div className="col-xl-3">
              <h5>Get in touch</h5>
              <ul className="links">
                <li>20 Cooper square, New York, NY 10003, USA</li>
                <li>Call us: +888 1234 5678</li>
                <li>Mail us: info@example.com</li>
              </ul>
            </div>
          </div>
          <div
            className="mt-5 mb-4"
            style={{ borderTop: "1px solid #FFFFFF33" }}
          />
          <div className="footer-bottom">
            <p>
              Designed by <span>Abcddesign company</span>
            </p>
            <p>
              Powered by <span>Graphics design llp</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
