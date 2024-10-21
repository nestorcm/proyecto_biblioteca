import React from "react";
import Navbar from "../components/navbar";
import Carousel from "../components/carousel";
import "../assets/css/home.css"; // Asegúrate de importar tu archivo CSS
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Carousel />

      <div className="container text-center my-4">
        <div className="h3 p mb-3">BIENVENIDO</div>
      </div>

      {/* Aquí va los botones */}
      <div className="container text-center my-4">
        <div className="row align-items-start ">
          <div className="col btn btn-danger custom-button mx-1 mb-3">
            Museo <br></br> Virtual
          </div>
          <div className="col btn btn-danger custom-button mx-1 mb-3">
            Libros <br></br> Recomendados
          </div>
          <div className="col btn btn-danger custom-button mx-1 mb-3">
            Colecciones <br></br> Físicas
          </div>
          <Link
            to={"/iniciar-sesion"}
            style={{ textDecoration: "none", color: "white" }}
            className="col btn btn-danger custom-button mx-1 mb-3"
          >
            Agenda <br></br> Capacitación
          </Link>
        </div>
        <div className="row align-items-start">
          <div className="col btn btn-danger custom-button mx-1 mb-3">
            Servicios <br></br> generales
          </div>
          <div className="col btn btn-danger custom-button mx-1 mb-3 py-3">
            Culturízate{" "}
          </div>
          <div className="col btn btn-danger custom-button mx-1 mb-3 py-3">
            Conócenos{" "}
          </div>
          <Link
            to={"/actualizar-links"}
            style={{ textDecoration: "none", color: "white" }}
            className="col btn btn-danger custom-button mx-1 mb-3"
          >
            Actualizar <br></br> links
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
