import React, { useState } from "react";
import Calendar from "react-calendar";
import Navbar from "../components/navbar";
import "react-calendar/dist/Calendar.css";
import "../assets/css/make_appointment.css"; // Archivo CSS para estilos personalizados

const Make_Appointment = () => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(""); // Estado para la hora
  const [trainingType, setTrainingType] = useState("");
  const [isVirtual, setIsVirtual] = useState(null);
  const [description, setDescription] = useState("");

  const handleDateChange = (date) => {
    setDate(date);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para agendar la cita (por ejemplo, enviar a un backend)
    alert(`Cita agendada:
            Fecha: ${date.toDateString()}
            Hora: ${time}
            Tipo de capacitación: ${trainingType}
            Virtual: ${isVirtual ? "Sí" : "No"}
            Descripción: ${description}`);
  };

  return (
      <div style={{ backgroundColor: '#e0e0e0', minHeight: '100vh'}}>
        <Navbar/>
        <div className={'d-flex justify-content-center d-flex justify-content-center align-items-center'}>
          <div className={"d-flex flex-column align-items-center p-4 my-5 mx-3"}
               style={{
                 borderWidth: "2px", borderRadius: "30px",backgroundColor: "white"
               }}>
            <h2>AGENDE SU ASESORIA</h2>
            <div className="make-appointment">
              <div className="calendar-container">
                <h3>Selecciona una fecha</h3>
                <Calendar
                    onChange={handleDateChange}
                    value={date}
                    minDate={new Date()} // Restringe la selección de fechas pasadas
                    style={{borderRadius:"10px"}}
                />
                <div className="time-picker-container" style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: '10px'
                }}>
                  <div className="time-picker">
                    <label htmlFor="hour">Hora: </label>
                    <input
                        type="time"
                        id="hour"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        required
                        style={{padding: '5px', marginLeft:'10px', borderRadius: '5px', border: '1px solid darkgray'}}
                    />
                  </div>
                </div>
              </div>


              <div className="form-container">
                <h3>Detalles</h3>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="trainingType">Tipo de capacitación:</label>
                    <br></br>
                    <select
                        id="trainingType"
                        value={trainingType}
                        onChange={(e) => setTrainingType(e.target.value)}
                        required
                    >
                      <option value="">Seleccionar</option>
                      <option value="Capacitación 1">Capacitación 1</option>
                      <option value="Capacitación 2">Capacitación 2</option>
                      <option value="Capacitación 3">Capacitación 3</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Virtual</label>
                    <div>
                      <input
                          type="radio"
                          id="virtualYes"
                          name="virtual"
                          value="yes"
                          checked={isVirtual === true}
                          onChange={() => setIsVirtual(true)}
                      />
                      <label htmlFor="virtualYes">Sí</label>
                    </div>
                    <div>
                      <input
                          type="radio"
                          id="virtualNo"
                          name="virtual"
                          value="no"
                          checked={isVirtual === false}
                          onChange={() => setIsVirtual(false)}
                      />
                      <label htmlFor="virtualNo">No</label>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="description"> Descripción:</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows="3"
                        required
                    />
                  </div>
                  <button className={"btn btn-danger"} type="submit">Agendar cita</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Make_Appointment;
