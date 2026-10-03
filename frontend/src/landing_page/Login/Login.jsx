import "./login.css";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  ToastContainer,
  toast,
} from "react-toastify";

const Login = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleError = (message) => {
    toast.error(message, {
      position: "bottom-left",
    });
  };

  const handleSuccess = (message) => {
    toast.success(message, {
      position: "bottom-left",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      handleError("Please enter email and password");
      return;
    }

    try {
      const { data } = await axios.post(
        "https://zerodha-trading-platform-fpy2.onrender.com",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );

      console.log("Login response:", data);

      const { success, message } = data;

      if (success) {
        handleSuccess(
          message || "Login successful"
        );

        /*
          IMPORTANT:
          Frontend runs on port 5173.
          Dashboard runs on port 3000.

          Therefore we must leave the frontend
          React application and open the dashboard
          React application.
        */

        setTimeout(() => {
          window.location.replace(
             "https://zerodha-trading-dashboard.netlify.app/dashboard"
          );
        }, 1000);

      } else {
        handleError(
          message || "Invalid email or password"
        );
      }

    } catch (error) {
      console.error("Login error:", error);

      handleError(
        error.response?.data?.message ||
        "Unable to login. Please check the backend."
      );
    }
  };

  return (
    <div className="login-page">

      <div className="login-form-container">

        <h2>Login Account</h2>

        <form onSubmit={handleSubmit}>

          <div>
            <label htmlFor="email">
              Email
            </label>

            <input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={handleOnChange}
              autoComplete="email"
            />
          </div>

          <div>
            <label htmlFor="password">
              Password
            </label>

            <input
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={handleOnChange}
              autoComplete="current-password"
            />
          </div>

          <button type="submit">
            Submit
          </button>

          <span>
            Don't have an account?{" "}
            <Link to="/signup">
              Signup
            </Link>
          </span>

        </form>

        <ToastContainer />

      </div>

    </div>
  );
};

export default Login;