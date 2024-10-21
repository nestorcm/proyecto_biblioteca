import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/UPB.jpeg";
import "../assets/css/navbar.css";

const navbar = () => {
  return (
    <div>
      <nav className="navbar ">
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand">
            <img
              src={logo}
              alt="Logo"
              width={60}
              height={25}
              className="d-inline-block align-text-top"
            />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default navbar;
