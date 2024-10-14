import React from "react";
import Navbar from "../components/navbar";
import "../assets/css/login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="back">
      <Navbar />
      <div className="div-center">
        <div className="content ">
          <h3 className="center text-center">
            BIENVENIDO AL PORTAL DE
            <br></br>
            BIBLIOTECA UPB
          </h3>

          <hr />
          <form>
            <div className="form-group text-center">
              <label htmlFor="exampleInputEmail1">Correo electrónico</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Correo electrónico"
              />
            </div>
            <div className="form-group text-center">
              <label htmlFor="exampleInputPassword1">Contraseña</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="*****"
              />
            </div>
            <div className="row align-items-start my-3 mx-1">
              <button type="submit" className="col btn btn-danger">
                <Link to={"/cita"} 
                style={{textDecoration:"none", color: "white"}}>
                Iniciar sesión
                </Link>
                
              </button>
            </div>
            <hr />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
