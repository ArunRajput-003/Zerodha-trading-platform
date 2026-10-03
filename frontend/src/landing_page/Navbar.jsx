import React from "react";
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary border-bottom"
      data-bs-theme="light"
      style={{ height: "70px", backgroundColor: "#FFFFFF" }}
    >
      <div className="container-fluid">
        <div style={{ marginLeft: "15%" }}>
          <Link to="/"><img
            src="media/images/logo.svg"
            className="py-3"
            style={{ width: "25%" }}
          ></img></Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse  "
          id="navbarSupportedContent "
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">

            <li className="nav-item mx-2">
              <Link className="nav-link  px-3" aria-current="page" to="/signup">
                Signup
              </Link>
            </li>
             <li className="nav-item mx-2">
              <Link className="nav-link  px-3" aria-current="page" to="/login">
                Login
              </Link>
            </li>

            <li className="nav-item mx-2">
              <Link className="nav-link px-3" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item mx-2">
               <Link className="nav-link px-3" to="/products">
                Products
              </Link>
            </li>

            <li className="nav-item mx-2">
              <Link className="nav-link px-3" to="/pricing">
                Pricing
              </Link>
            </li>

            <li className="nav-item mx-2 ">
              <Link className="nav-link px-3" to="/support">
                Support
              </Link>
            </li>

          </ul>

        </div>

      </div>

      
    </nav>
  );
}

export default Navbar;
