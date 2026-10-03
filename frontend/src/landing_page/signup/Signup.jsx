import "./signup.css";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  ToastContainer,
  toast,
} from "react-toastify";

const Signup = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });

  const {
    email,
    password,
    username,
  } = inputValue;

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
      position: "bottom-right",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !username || !password) {
      handleError(
        "Please fill all the fields"
      );
      return;
    }

    try {
      const { data } = await axios.post(
        "https://zerodha-trading-platform-fpy2.onrender.com",
        {
          email,
          password,
          username,
        },
        {
          withCredentials: true,
        }
      );

      console.log("Signup response:", data);

      const {
        success,
        message,
      } = data;

      if (success) {
        handleSuccess(
          message || "Signup successful"
        );

        setTimeout(() => {
          window.location.replace(
            "YOUR_DEPLOYED_DASHBOARD_URL/dashboard"
          );
        }, 1000);

      } else {
        handleError(
          message || "Signup failed"
        );
      }

    } catch (error) {
      console.error(
        "Signup error:",
        error
      );

      handleError(
        error.response?.data?.message ||
        "Unable to signup"
      );
    }
  };

  return (
    <div className="signup-page">

      <div className="signup-form-container">

        <h2>Signup Account</h2>

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
            <label htmlFor="username">
              Username
            </label>

            <input
              type="text"
              id="username"
              name="username"
              value={username}
              placeholder="Enter your username"
              onChange={handleOnChange}
              autoComplete="username"
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
              autoComplete="new-password"
            />
          </div>

          <button type="submit">
            Submit
          </button>

          <span>
            Already have an account?{" "}
            <Link to="/login">
              Login
            </Link>
          </span>

        </form>

        <ToastContainer />

      </div>

    </div>
  );
};

export default Signup;