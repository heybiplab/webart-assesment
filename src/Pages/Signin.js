import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { postRequest, getRequest } from "../services/api";
import { useDispatch } from "react-redux";
import { login } from "../redux/user/userSlice";

const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handle form submit
  const handleSubmit = async (values) => {
    const toastId = toast.loading("Signing in...");
    try {
      const result = await postRequest("/login", values);

      if (result.status === 200 && result.success === 1) {
        // Store token in localStorage
        localStorage.setItem("token", result.token);

        // Fetch user details
        try {
          const userDetails = await getRequest(
            `/user-details/${result.data.user_id}`
          );
          if (userDetails.status === 200 && userDetails.success === 1) {
            // Update Redux store with user details
            dispatch(login(userDetails.data));

            toast.dismiss(toastId);
            toast.success("Login successful!");

            // Reset form
            formik.resetForm();

            // Redirect to dashboard
            navigate("/dashboard");
          }
        } catch (error) {
          console.error("User Details Error:", error);
          toast.dismiss(toastId);
          toast.error("Failed to fetch user details!");
        }
      } else {
        toast.dismiss(toastId);
        if (result.errors) {
          result.errors.forEach((error) => {
            for (const key in error) {
              toast.error(error[key]);
            }
          });
        } else {
          toast.error("Login failed!");
        }
      }
    } catch (error) {
      console.error("Login Error:", error);
      toast.dismiss(toastId);
      toast.error("Login failed!");
    }
  };

  // Handle form validation
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
    }),
    onSubmit: handleSubmit,
  });

  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center"
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      }}
    >
      <div
        className="card shadow-lg"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <div className="card-body p-5">
          <h2 className="text-center mb-4">Sign In</h2>
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-danger">{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                {...formik.getFieldProps("password")}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-danger">{formik.errors.password}</div>
              ) : null}
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Sign In
              </button>
            </div>
          </form>
          <p className="text-center mt-3">
            Don't have an account?{" "}
            <Link to="/signup" className="text-decoration-none">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
