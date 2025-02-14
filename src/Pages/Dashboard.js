import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getRequest, postRequest, putRequest } from "../services/api"; // Import postRequest function
import { country, login } from "../redux/user/userSlice";
import { useFormik } from "formik";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userData, setUserData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [countryData, setCountryData] = useState(null);
  const [stateData, setStateData] = useState(null);
  const [cityData, setCityData] = useState(null);
  const userDatas = useSelector((state) => state.user.user);
  const countrysData = useSelector((state) => state.user.country);

  const handleSubmit = async (values) => {
    console.log("values", values);
    try {
      const payload = {
        user_id: values.user_id, // Ensure user_id is correctly mapped
        ...values,
      };

      const response = await postRequest("/user-update", payload);
      if (response.status === 200 && response.success === 1) {
        toast.success("Profile updated successfully!");
        setShowModal(false);
        setUserData(values);
      } else {
        toast.error("Failed to update profile!");
      }
    } catch (error) {
      console.error("Profile update error:", error);
      toast.error("An error occurred while updating the profile!");
    }
  };

  // handle form validation
  const formik = useFormik({
    initialValues: {
      user_id: "", // Ensure user_id is included in initial values
      name: "",
      city: "",
      state: "",
      country: "",
      phone: "",
      address: "",
      email: "",
      user_name: "",
      profile_img: "",
      banner_img: "",
      bio: "",
    },
    validationSchema: Yup.object({
      user_id: Yup.number(),
      name: Yup.string().required("Name is required"),
      city: Yup.string(),
      state: Yup.string(),
      country: Yup.string(),
      phone: Yup.string(),
      address: Yup.string(),
      email: Yup.string().email("Invalid email address"),
      user_name: Yup.string(),
      profile_img: Yup.string(),
      banner_img: Yup.string(),
      bio: Yup.string(),
    }),
    onSubmit: handleSubmit,
    enableReinitialize: true,
  });

  // effect for fetching the user data
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

  // effect for fetching the country data
  useEffect(() => {
    // Fetch country data
    if (countrysData) {
      setCountryData(countrysData);
    } else {
      const fetchCountryData = async () => {
        // Fetch country details
        try {
          const response = await getRequest(`/country`);
          if (response.status === 200 && response.success === 1) {
            // Update Redux store with country details
            dispatch(country(response.data));
          }
        } catch (error) {
          console.error("User Details Error:", error);
        }
      };

      fetchCountryData();
    }
  }, [countrysData, dispatch]);

  // effect for fetching the state data
  useEffect(() => {
    if (userData?.country) {
      const fetchStateData = async () => {
        // Fetch state details
        try {
          const response = await getRequest(`/state/${countryData.id}`);
          if (response.status === 200 && response.success === 1) {
            setStateData(response.data);
          }
        } catch (error) {
          console.error("State data fetching Error:", error);
        }
      };

      fetchStateData();
    }
  }, [userData?.country, countryData]);

  // effect for fetching the city data
  useEffect(() => {
    if (userData?.state) {
      const fetchCityData = async () => {
        // Fetch city details
        try {
          const response = await getRequest(`/city/${userData?.state}`);
          if (response.status === 200 && response.success === 1) {
            setCityData(response.data);
          }
        } catch (error) {
          console.error("City data fetching Error:", error);
        }
      };

      fetchCityData();
    }
  }, [userData?.state]);

  // effect for fetching the state data based on selected country
  useEffect(() => {
    if (formik.values.country) {
      const fetchStateData = async () => {
        // Fetch state details
        try {
          const response = await getRequest(`/state/${formik.values.country}`);
          if (response.status === 200 && response.success === 1) {
            setStateData(response.data);
          }
        } catch (error) {
          console.error("State data fetching Error:", error);
        }
      };

      fetchStateData();
    } else {
      setStateData(null); // Clear state data if no country is selected
    }
  }, [formik.values.country]);

  // effect for fetching the city data based on selected state
  useEffect(() => {
    if (formik.values.state) {
      const fetchCityData = async () => {
        // Fetch city details
        try {
          const response = await getRequest(`/city/${formik.values.state}`);
          if (response.status === 200 && response.success === 1) {
            setCityData(response.data);
          }
        } catch (error) {
          console.error("City data fetching Error:", error);
        }
      };

      fetchCityData();
    } else {
      setCityData(null); // Clear city data if no state is selected
    }
  }, [formik.values.state]);

  const handleEditClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Update values when userDatas changes
  useEffect(() => {
    if (userDatas) {
      formik.setValues({
        user_id: userDatas.user_id || userDatas.id || "",
        name: userDatas.name || "",
        city: userDatas.city || "",
        state: userDatas.state || "",
        country: userDatas.country || "",
        phone: userDatas.phone || "",
        address: userDatas.address || "",
        email: userDatas.email || "",
        user_name: userDatas.user_name || "",
        profile_img: userDatas.profile_img || "",
        banner_img: userDatas.banner_img || "",
        bio: userDatas.bio || "",
      });
    }
  }, [userDatas]);

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
              <form onSubmit={formik.handleSubmit}>
                {/* <div className="mb-3">
                  <label htmlFor="user_id" className="form-label">
                    User ID
                  </label>
                  <input
                    type="number"
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
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.name && formik.errors.name ? (
                    <div className="text-danger">{formik.errors.name}</div>
                  ) : null}
                </div>
                <div className="mb-3">
                  <label htmlFor="city" className="form-label">
                    City
                  </label>
                  <select
                    className="form-select"
                    id="city"
                    name="city"
                    value={formik.values.city}
                    onChange={formik.handleChange}
                    disabled={!formik.values.state}
                  >
                    <option value="">Select City</option>
                    {cityData?.map((city) => (
                      <option key={city.id} value={city.id}>
                        {city.name}
                      </option>
                    ))}
                  </select>
                  {/* <input
                    type="text"
                    className="form-control"
                    id="city"
                    name="city"
                    value={formik.values.city}
                    onChange={formik.handleChange}
                  /> */}
                </div>
                <div className="mb-3">
                  <label htmlFor="state" className="form-label">
                    State
                  </label>
                  <select
                    className="form-select"
                    id="state"
                    name="state"
                    value={formik.values.state}
                    onChange={formik.handleChange}
                    disabled={!formik.values.country}
                  >
                    <option value="">Select State</option>
                    {stateData?.map((state) => (
                      <option key={state.id} value={state.id}>
                        {state.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="country" className="form-label">
                    Country
                  </label>
                  <select
                    className="form-select"
                    id="country"
                    name="country"
                    value={formik.values.country}
                    onChange={formik.handleChange}
                    disabled={!countryData}
                  >
                    <option value="">Select Country</option>
                    {countryData?.map((country) => (
                      <option key={country.id} value={country.id}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    name="phone"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
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
                    name="address"
                    value={formik.values.address}
                    onChange={formik.handleChange}
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
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
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
                    name="user_name"
                    value={formik.values.user_name}
                    onChange={formik.handleChange}
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
                    name="profile_img"
                    accept="image/*"
                    onChange={(event) => {
                      formik.setFieldValue(
                        "profile_img",
                        event.currentTarget.files[0]
                      );
                    }}
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
                    name="banner_img"
                    accept="image/*"
                    onChange={(event) => {
                      formik.setFieldValue(
                        "banner_img",
                        event.currentTarget.files[0]
                      );
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="bio" className="form-label">
                    Bio
                  </label>
                  <textarea
                    className="form-control"
                    id="bio"
                    name="bio"
                    rows={3}
                    value={formik.values.bio}
                    onChange={formik.handleChange}
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
