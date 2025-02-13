import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const userDatas = useSelector((state) => state.user.user);

  useEffect(() => {
    // Fetch user data
    if (userDatas) {
      setUserData(userDatas);
    } else {
      toast.error("Please login first!");
      // Redirect to login page
      navigate("/login");
    }
  }, [userDatas]);

  const handleEditClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log("Form submitted");
    setShowModal(false);
  };

  return (
    <div className="min-vh-100 bg-light">
      <div className="container py-5">
        <div className="card shadow-lg">
          <img
            src={userData?.banner_img || "/placeholder.svg"}
            className="card-img-top"
            alt="User Banner"
            style={{ height: "200px", objectFit: "cover" }}
          />
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h1 className="card-title">{userData?.name}</h1>
              <button className="btn btn-primary" onClick={handleEditClick}>
                <i className="fa-solid fa-pen-to-square" /> Edit Profile
              </button>
            </div>
            <p className="card-text">{userData?.bio}</p>
            <div className="row g-3">
              <div className="col-md-6">
                <h5>User Details</h5>
                <ul className="list-group">
                  <li className="list-group-item">
                    <strong>Username:</strong> {userData?.user_name}
                  </li>
                  <li className="list-group-item">
                    <strong>Email:</strong> {userData?.email}
                  </li>
                  <li className="list-group-item">
                    <strong>Phone:</strong> {userData?.phone}
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <h5>Location</h5>
                <ul className="list-group">
                  <li className="list-group-item">
                    <strong>Address:</strong> {userData?.address}
                  </li>
                  <li className="list-group-item">
                    <strong>City:</strong> {userData?.city}
                  </li>
                  <li className="list-group-item">
                    <strong>State:</strong> {userData?.state}
                  </li>
                  <li className="list-group-item">
                    <strong>Country:</strong> {userData?.country}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      <div
        className={`modal ${showModal ? "show" : ""}`}
        style={{ display: showModal ? "block" : "none" }}
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Profile</h5>
              <button
                type="button"
                className="btn-close"
                onClick={handleCloseModal}
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                {/* <div className="mb-3">
                  <label htmlFor="user_id" className="form-label">
                    User ID
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="user_id"
                    defaultValue={userData?.user_id}
                    readOnly
                  />
                </div> */}
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    defaultValue={userData?.name}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="city" className="form-label">
                    City
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="city"
                    defaultValue={userData?.city}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="state" className="form-label">
                    State
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="state"
                    defaultValue={userData?.state}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="country" className="form-label">
                    Country
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="country"
                    defaultValue={userData?.country}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    defaultValue={userData?.phone}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    defaultValue={userData?.address}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    defaultValue={userData?.email}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="user_name" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="user_name"
                    defaultValue={userData?.user_name}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="profile_img" className="form-label">
                    Profile Image
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="profile_img"
                    accept="image/*"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="banner_img" className="form-label">
                    Banner Image
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="banner_img"
                    accept="image/*"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="bio" className="form-label">
                    Bio
                  </label>
                  <textarea
                    className="form-control"
                    id="bio"
                    rows={3}
                    defaultValue={userData?.bio}
                  ></textarea>
                </div>
                <div className="text-end">
                  <button
                    type="button"
                    className="btn btn-secondary me-2"
                    onClick={handleCloseModal}
                  >
                    Close
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {showModal && <div className="modal-backdrop fade show"></div>}
    </div>
  );
};

export default Dashboard;
