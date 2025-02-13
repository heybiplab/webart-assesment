import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../redux/user/userSlice";

function Navbar() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src="/images/logo.png" alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav col justify-content-center">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  About us
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Courses
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/" className="dropdown-item">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="dropdown-item">
                      Another action
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <button className="cartBtn" data-cart="0">
                <i className="fa-solid fa-cart-shopping"></i>
              </button>
              {user ? (
                <>
                  <li className="nav-item mx-3">
                    <span className="nav-link">Hello, {user.name}</span>
                  </li>
                  <li className="nav-item mx-3">
                    <button
                      className="btn btn-link nav-link"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item mx-3">
                    <Link to="/login" className="nav-link">
                      Login
                    </Link>
                  </li>
                  <li
                    className="nav-item ps-3"
                    style={{ borderLeft: "1px solid #0000004D" }}
                  >
                    <Link to="/signup" className="nav-link">
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
