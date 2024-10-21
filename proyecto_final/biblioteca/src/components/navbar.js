import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/UPB.jpeg";
import "../assets/css/navbar.css";

const Navbar = () => {
  const handleLogout = () => {
    // Lógica para cerrar sesión
    console.log("Logout");
  };

  return (
      <div>
        <nav className="navbar">
          <div className="container-fluid d-flex justify-content-between align-items-center">

            <Link to={"/"} className="navbar-brand">
              <img
                  src={logo}
                  alt="Logo"
                  className="logo"
              />
            </Link>
            <button className="btn btn-light" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </nav>
      </div>
  );
};

export default Navbar;

