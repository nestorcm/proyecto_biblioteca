import React, { useState } from "react";
import Navbar from "../components/navbar";
import Accordion from "../components/accordion"; // Importa el componente personalizado

import Swal from 'sweetalert2';

const See_Appointments = () => {
  const [confirmedAppointments, setConfirmedAppointments] = useState([]); // Maneja citas confirmadas

  const handleConfirmarCita = (citaId) => {
    setConfirmedAppointments([...confirmedAppointments, citaId]);
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
        Swal.fire('Cita cancelada', `Motivo: ${result.value}`, 'success');
      }
    });
  };

  const citasPendientes = [
    {
      id: 1,
      tipoCita: 'Asesoría Legal',
      tipoUsuario: 'Cliente',
      nombre: 'Juan Pérez',
      profesion: 'Abogado',
      virtual: 'Sí',
      descripcion: 'Consulta sobre contratos.',
    },
  ];

  const citasAprobadas = [
    {
      id: 2,
      tipoCita: 'Asesoría Financiera',
      tipoUsuario: 'Cliente',
      nombre: 'Maria López',
      profesion: 'Contadora',
      virtual: 'No',
      descripcion: 'Revisión de estados financieros.',
    },
  ];

  return (
      <div>
        <Navbar />
        <h3 className="text-center my-4">VER CITAS</h3>

        <div className="container">
          <div className="row justify-content-around">
            {/* Columna de citas pendientes */}
            <div className="col-12 col-md-5 pb-3 mb-2" style={{ backgroundColor: "lightblue" }}>
              <h4 className="text-center py-2">Citas pendientes</h4>
              {/* Usar el componente de acordeón personalizado para las citas pendientes */}
              {citasPendientes.map((cita) => (
                  <Accordion key={cita.id} title={`Cita de ${cita.nombre} (${cita.tipoCita})`}>
                    <p><strong>Tipo de cita:</strong> {cita.tipoCita}</p>
                    <p><strong>Tipo de usuario:</strong> {cita.tipoUsuario}</p>
                    <p><strong>Profesión:</strong> {cita.profesion}</p>
                    <p><strong>Virtual:</strong> {cita.virtual}</p>
                    <p><strong>Descripción:</strong> {cita.descripcion}</p>
                    <div className="d-flex justify-content-between mt-3">
                      <button
                          className="btn btn-success"
                          onClick={() => handleConfirmarCita(cita.id)}
                          disabled={confirmedAppointments.includes(cita.id)}
                      >
                        {confirmedAppointments.includes(cita.id) ? 'Cita Confirmada' : 'Confirmar'}
                      </button>
                      <button className="btn btn-danger" onClick={() => handleNegarCita(cita.id)}>
                        Negar cita
                      </button>
                    </div>
                  </Accordion>
              ))}
            </div>

            {/* Columna de citas aprobadas */}
            <div className="col-12 col-md-5 pb-3 mb-2" style={{ backgroundColor: "lightgreen" }}>
              <h4 className="text-center py-2">Citas aprobadas</h4>
              {/* Usar el componente de acordeón personalizado para las citas aprobadas */}
              {citasAprobadas.map((cita) => (
                  <Accordion key={cita.id} title={`Cita de ${cita.nombre} (${cita.tipoCita})`}>
                    <p><strong>Tipo de asesoría:</strong> {cita.tipoCita}</p>
                    <p><strong>Nombre:</strong> {cita.nombre}</p>
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
                      <button className="btn btn-success">Confirmar</button>
                      <button className="btn btn-danger" onClick={() => handleNegarCita(cita.id)}>
                        Negar cita
                      </button>
                    </div>
                  </Accordion>
              ))}
            </div>

          </div>
        </div>
      </div>
  );
};

export default See_Appointments;
