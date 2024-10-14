import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.jpg";
import "../assets/css/navbar.css";

const navbar = () => {
  return (
    <div>
      <nav className="navbar ">
        <div className="container-fluid">
          <Link to={"/"}className="navbar-brand">
            <img
              src={logo}
              alt="Logo"
              width={30}
              height={24}
              className="d-inline-block align-text-top"
            />
            Bootstrap
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default navbar;
