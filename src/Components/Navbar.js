import React from "react";
import PropTypes from "prop-types";
import { Dark_Mode } from "../App";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg" style={props.styling}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" style={props.styling}>
          {props.Website_Name}
        </Link>
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/"
                style={props.styling}
              >
                {props.Home}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About" style={props.styling}>
                {props.About}
              </Link>
            </li>
          </ul>

          <div className="form-check form-switch mx-3">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onChange={Dark_Mode}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              {props.Text}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  Website_Name: PropTypes.string,
};
Navbar.defaultProps = {
  Home: "Home",
  About: "About",
};
