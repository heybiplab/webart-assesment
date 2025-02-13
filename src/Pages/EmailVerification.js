import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { postRequest } from "../services/api";

const EmailVerification = () => {
  const navigate = useNavigate();
  const initialStateData = useSelector((state) => state.user.initialStateData);
  const [validInitialState, setValidInitialState] = useState(null);

  // Check if the initialStateData is valid
  useEffect(() => {
    if (initialStateData) {
      setValidInitialState(initialStateData);
    } else {
      toast.error("Please signup first!");
      navigate("/signup");
    }
  }, [initialStateData, navigate]);

  const handleSubmit = async (values) => {
    const toastId = toast.loading("Verifying email...");
    try {
      const result = await postRequest("/email-verify", values);
      if (result.status === 200 && result.success === 1) {
        toast.dismiss(toastId);
        toast.success("Email verified successfully!");
        // Reset form
        formik.resetForm();
        // Redirect to login page
        navigate("/login");
      } else {
        toast.dismiss(toastId);
        if (result.errors) {
          result.errors.forEach((error) => {
            for (const key in error) {
              toast.error(error[key]);
            }
          });
        } else {
          toast.error("Email verification failed!");
        }
      }
    } catch (error) {
      console.error("Email Verification Error:", error);
      toast.dismiss(toastId);
      toast.error("Email verification failed!");
    }
  };

  // Handle form validation
  const formik = useFormik({
    initialValues: {
      email: "",
      otp: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      otp: Yup.string().required("OTP is required"),
    }),
    onSubmit: handleSubmit,
  });

  // Set the user email in the email field
  useEffect(() => {
    if (validInitialState?.email) {
      formik.setFieldValue("email", validInitialState.email);
    }
  }, [validInitialState]);

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
          <h2 className="text-center mb-4">Email Verification</h2>
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                required
                disabled
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-danger">{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="OTP"
                required
                {...formik.getFieldProps("otp")}
              />
              {formik.touched.otp && formik.errors.otp ? (
                <div className="text-danger">{formik.errors.otp}</div>
              ) : null}
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Verify Email
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;
