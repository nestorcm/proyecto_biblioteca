import React from "react";
import Navbar from "../components/navbar";

const See_Appointments = () => {


  return (
    <div>
      <Navbar />
      <h3 className="text-center my-4">VER CITAS</h3>

      {/* Contenedor de las dos columnas */}
      <div className="container">
        <div className="row justify-content-around">
          
          {/* Columna de citas pendientes */}
          <div className="col-12 col-md-5 pb-3 mb-2" style={{ backgroundColor: "lightblue" }}>
            <h4 className="text-center py-2">Citas pendientes</h4>
            <ul className="list-group">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Cita 1 
                <button className="btn btn-primary" >Ver cita</button>
              </li>
              {/* Aquí puedes agregar más citas */}
            </ul> 
          </div>
          
          {/* Columna de citas aprobadas */}
          <div className="col-12 col-md-5 pb-3 mb-2" style={{ backgroundColor: "lightgreen" }}>
            <h4 className="text-center py-2">Citas aprobadas</h4>
            <ul className="list-group">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Cita 1 
                <button className="btn btn-danger">Ver cita</button>
              </li>
              {/* Aquí puedes agregar más citas */}
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default See_Appointments;
