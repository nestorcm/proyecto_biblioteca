import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/UPB.jpeg";
import "../assets/css/navbar.css";

const Navbar = () => {
  const navigate = useNavigate(); // Para redirigir al usuario después de cerrar sesión

  const handleLogout = () => {
    // Lógica para cerrar sesión
    localStorage.removeItem('user'); // Eliminar el usuario de localStorage
    sessionStorage.removeItem('user'); // Eliminar el usuario de sessionStorage
    console.log("Logout");
    navigate('/'); // Redirigir a la página de inicio
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
