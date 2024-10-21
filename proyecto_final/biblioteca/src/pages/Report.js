import React, { useState } from "react";
import Navbar from "../components/navbar";

const Report = () => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth(); // Mes actual (0 = Enero, 11 = Diciembre)
  
  const [year, setYear] = useState(currentYear);
  const [selectedMonth, setSelectedMonth] = useState(null);

  // Funciones para cambiar el año
  const handlePrevYear = () => setYear(year - 1);
  const handleNextYear = () => setYear(year + 1);

  const months = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'];

  // Lógica para generar informe mensual
  const handleGenerateReport = () => {
    if (!selectedMonth) {
      alert("No tienes seleccionado el mes, no puedo generar un informe");
    } else {
      alert(`Generando informe para ${months[selectedMonth]} ${year}`);
      // Aquí iría la lógica de generación del reporte
    }
  };

  // Lógica para generar informe anual
  const handleGenerateAnnualReport = () => {
    alert(`Generando informe anual para ${year}`);
    // Aquí iría la lógica de generación del reporte anual
  };

  // Lógica para habilitar/deshabilitar meses
  const isMonthDisabled = (index) => {
    return year > currentYear || (year === currentYear && index > currentMonth);
  };

  return (
    <div style={{ backgroundColor: '#e0e0e0', minHeight: '100vh'}}>
        <Navbar/>
        <div className={'d-flex justify-content-center d-flex justify-content-center align-items-center'}>
            <div className={"d-flex flex-column align-items-center p-4 my-5 mx-3"}
                 style={{ borderWidth: "2px", borderRadius: "30px", borderColor: '#2c2b2b',
                     borderStyle: "solid", backgroundColor:"white"}}>

                <h2> REPORTE DE ASESORIAS </h2>

                {/* Selector de año */}
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <button className={"btn"}
                            style={{borderRadius:"50px", borderWidth:"2px solid", borderColor:'#2c2b2b'}}
                            onClick={handlePrevYear}>{'<'}</button>
                    <h2 style={{margin: '0 20px'}}>{year}</h2>
                    <button className={"btn"}
                            style={{borderRadius:"50px", borderWidth:"2px solid", borderColor:'#2c2b2b'}}
                            onClick={handleNextYear}>{'>'}</button>
                </div>

                {/* Grid de meses */}
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', marginTop: '20px'}}>
                    {months.map((month, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedMonth(index)}
                            disabled={isMonthDisabled(index)} // Deshabilita meses futuros
                            style={{
                                padding: '10px',
                                border: '1px solid #000',
                                borderRadius: '5px',
                                borderColor: '#2c2b2b',
                                backgroundColor: selectedMonth === index ? '#a8a3a3' : '#f0f0f0',
                                cursor: isMonthDisabled(index) ? 'not-allowed' : 'pointer'
                            }}
                        >
                            {month}
                        </button>
                    ))}
                </div>

                {/* Botón para generar informe mensual */}
                <div style={{marginTop: '20px'}}>
                    <button className="btn btn-danger" onClick={handleGenerateReport}
                            style={{padding: '10px 20px', cursor: 'pointer'}}>
                        Generar Informe Mensual
                    </button>
                </div>

                {/* Botón para generar informe anual */}
                <div style={{marginTop: '20px'}}>
                    <button className="btn btn-danger" onClick={handleGenerateAnnualReport}
                            style={{padding: '10px 20px', cursor: 'pointer'}}>
                        Generar Informe Anual
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Report;
