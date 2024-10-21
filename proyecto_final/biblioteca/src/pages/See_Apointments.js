import React, { useState } from "react";
import Navbar from "../components/navbar";
import Accordion from "../components/accordion";
import Swal from 'sweetalert2';

const See_Appointments = () => {
  const [citasPendientes, setCitasPendientes] = useState([
    {
      id: 1,
      tipoCita: 'Asesoría Legal',
      tipoUsuario: 'Cliente',
      nombre: 'Juan Pérez',
      profesion: 'Abogado',
      virtual: 'Sí',
      descripcion: 'Consulta sobre contratos.',
    },
  ]);

  const [citasAprobadas, setCitasAprobadas] = useState([
    // Puedes dejar esto vacío si no quieres que aparezca nada al inicio
  ]);

  const handleConfirmarCita = (citaId) => {
    const citaConfirmada = citasPendientes.find(cita => cita.id === citaId);

    setCitasPendientes(citasPendientes.filter(cita => cita.id !== citaId));
    setCitasAprobadas([...citasAprobadas, citaConfirmada]);

    Swal.fire({
      icon: 'success',
      title: 'Cita confirmada',
      text: 'Has confirmado esta cita correctamente.',
    });
  };

  const handleNegarCita = (citaId) => {
    Swal.fire({
      title: 'Ingrese motivo de cancelación',
      input: 'textarea',
      inputLabel: 'Motivo',
      inputPlaceholder: 'Escribe el motivo aquí...',
      showCancelButton: true,
      confirmButtonText: 'Enviar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        setCitasPendientes(citasPendientes.filter(cita => cita.id !== citaId));
        Swal.fire('Cita cancelada', `Motivo: ${result.value}`, 'success');
      }
    });
  };

  return (
      <div style={{backgroundColor: '#e0e0e0', minHeight: '100vh'}}>
        <Navbar/>
        <div className={'justify-content-center align-items-center'}>
          <div className={"p-2 my-5 mx-3"}
               style={{
                 borderRadius: "30px", borderColor: '#2c2b2b',
                 backgroundColor: "white"
               }}>
            <h3 className="text-center my-2">VER CITAS</h3>

            <div className="container">
              <div className="row justify-content-around">
                {/* Columna de citas pendientes */}
                <div className="col-12 col-md-5 pb-3 mb-2">
                  <h4 className="text-center py-2">Citas pendientes</h4>
                  {citasPendientes.length === 0 ? (
                      <p className="text-center">¡Citas programadas!</p>
                  ) : (
                      citasPendientes.map((cita) => (
                          <Accordion key={cita.id} title={`Cita de ${cita.nombre} (${cita.tipoCita})`}>
                            <p><strong>Tipo de cita:</strong> {cita.tipoCita}</p>
                            <p><strong>Tipo de usuario:</strong> {cita.tipoUsuario}</p>
                            <p><strong>Profesión:</strong> {cita.profesion}</p>
                            <p><strong>Virtual:</strong> {cita.virtual}</p>
                            <p><strong>Descripción:</strong> {cita.descripcion}</p>
                            <div className="form-group">
                              <label htmlFor={`assignOfficer${cita.id}`}>Asignar funcionario:</label>
                              <select id={`assignOfficer${cita.id}`} className="form-select">
                                <option value="Funcionario 1">Funcionario 1</option>
                                <option value="Funcionario 2">Funcionario 2</option>
                                <option value="Funcionario 3">Funcionario 3</option>
                              </select>
                            </div>
                            <div className="d-flex justify-content-between mt-3">
                              <button
                                  className="btn btn-success"
                                  onClick={() => handleConfirmarCita(cita.id)}
                              >
                                Confirmar
                              </button>
                              <button className="btn btn-danger" onClick={() => handleNegarCita(cita.id)}>
                                Negar cita
                              </button>
                            </div>
                          </Accordion>
                      ))
                  )}
                </div>

                {/* Columna de citas aprobadas */}
                <div className="col-12 col-md-5 pb-3 mb-2" >
                  <h4 className="text-center py-2">Citas aprobadas</h4>
                  {citasAprobadas.map((cita) => (
                      <Accordion key={cita.id} title={`Cita de ${cita.nombre} (${cita.tipoCita})`}>
                        <p><strong>Tipo de asesoría:</strong> {cita.tipoCita}</p>
                        <p><strong>Nombre:</strong> {cita.nombre}</p>
                        <p><strong>Profesión:</strong> {cita.profesion}</p>
                        <p><strong>Virtual:</strong> {cita.virtual}</p>
                        <p><strong>Descripción:</strong> {cita.descripcion}</p>
                      </Accordion>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default See_Appointments;
