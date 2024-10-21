import React from "react";
import Navbar from "../components/navbar";
import "../assets/css/login.css";
const Updatelinks = () => {
  return (
    <div className="back">
      <Navbar />
      <div className="div-center">
        <div className="text-center my-4">
          <h3>Actualizar Links</h3>
        </div>

        <form className="container d-flex flex-column align-items-center my-5">
          <div className="col-12 mb-3">
            <div className="input-group">
              <input
                  type="text"
                  className="form-control"
                  id="inlineFormInputGroupMuseoVirtual"
                  placeholder="Link de museo virtual"
              />
              <button className="btn btn-danger input-group-text">
                Actualizar
              </button>
            </div>
          </div>

          <div className="col-12 mb-3">
            <div className="input-group">
              <input
                  type="text"
                  className="form-control"
                  id="inlineFormInputGroupLibros"
                  placeholder="Link de libros recomendados"
              />
              <button className="btn btn-danger input-group-text">
                Actualizar
              </button>
            </div>
          </div>

          <div className="col-12 mb-3">
            <div className="input-group">
              <input
                  type="text"
                  className="form-control"
                  id="inlineFormInputGroupColecciones"
                  placeholder="Link de colecciones físicas"
              />
              <button className="btn btn-danger input-group-text">
                Actualizar
              </button>
            </div>
          </div>

          <div className="col-12 mb-3">
            <div className="input-group">
              <input
                  type="text"
                  className="form-control"
                  id="inlineFormInputGroupCulturizate"
                  placeholder="Link de culturízate"
              />
              <button className="btn btn-danger input-group-text">
                Actualizar
              </button>
            </div>
          </div>

          <div className="col-12 mb-3">
            <div className="input-group">
              <input
                  type="text"
                  className="form-control"
                  id="inlineFormInputGroupConocenos"
                  placeholder="Link de conócenos"
              />
              <button className="btn btn-danger input-group-text">
                Actualizar
              </button>
            </div>
          </div>

          <div className="col-12 mb-3">
            <div className="input-group">
              <input
                  type="text"
                  className="form-control"
                  id="inlineFormInputServiciosGenerales"
                  placeholder="Link de servicios generales"
              />
              <button className="btn btn-danger input-group-text">
                Actualizar
              </button>
            </div>
          </div>

        </form>
      </div>

      {/*forms ?
        Falta servicios generales?*/}
    </div>
  );
};

export default Updatelinks;
