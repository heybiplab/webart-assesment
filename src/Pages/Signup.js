import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { postRequest } from "../services/api";
import { useDispatch } from "react-redux";
import { setInitialStateData } from "../redux/user/userSlice";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // handle form submit
  const handleSubmit = async (values) => {
    const toastId = toast.loading("Signing up...");
    try {
      const result = await postRequest("/signup", values);

      if (result.status === 200 && result.success === 1) {
        console.log("Dispatching data to Redux:", values);
        dispatch(setInitialStateData(values));
        toast.dismiss(toastId);
        toast.success("Please verify your email!");
        // Reset form
        formik.resetForm();
        // Redirect to email verification page
        navigate("/email-verify");
      } else {
        toast.dismiss(toastId);
        if (result.errors) {
          result.errors.forEach((error) => {
            for (const key in error) {
              toast.error(error[key]);
            }
          });
        } else {
          toast.error("Signup failed!");
        }
      }
    } catch (error) {
      console.error("Signup Error:", error);
      toast.dismiss(toastId);
      toast.error("Signup failed!");
    }
  };

  // handle form validation
  const formik = useFormik({
    initialValues: {
      name: "",
      username: "",
      email: "",
      password: "",
      role: 0, // predefined role value for normal user
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      username: Yup.string().required("Username is required"),
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
          <h2 className="text-center mb-4">Sign Up</h2>
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                {...formik.getFieldProps("name")}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-danger">{formik.errors.name}</div>
              ) : null}
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                {...formik.getFieldProps("username")}
              />
              {formik.touched.username && formik.errors.username ? (
                <div className="text-danger">{formik.errors.username}</div>
              ) : null}
            </div>
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
                Sign Up
              </button>
            </div>
          </form>
          <p className="text-center mt-3">
            Already have an account?{" "}
            <Link to="/login" className="text-decoration-none">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
