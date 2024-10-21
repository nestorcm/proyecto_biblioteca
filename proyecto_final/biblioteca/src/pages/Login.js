import React, { useState } from "react";
import Navbar from "../components/navbar";
import { useAuth } from "../AuthContext"; // Asegúrate de que la ruta sea correcta
import "../assets/css/login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [mensaje, setMensaje] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth(); // Obtener la función de login del contexto

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensaje(''); // Limpiar mensaje previo

    const credentials = {
      correo: correo,
      contrasena: contrasena
    };

    try {
      const response = await fetch('http://localhost:8080/api/v1/admin/tablaUsuarios/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      // Manejo de respuesta de error
      if (!response.ok) {
        const text = await response.text(); // Leer como texto
        let errorMessage = 'Credenciales inválidas'; // Mensaje de error por defecto

        // Tratar de parsear la respuesta como JSON si es posible
        try {
          const errorData = JSON.parse(text);
          errorMessage = errorData.message || 'Credenciales inválidas';
        } catch {
          errorMessage = text; // Si no es JSON, usar texto
        }

        setMensaje(errorMessage); // Mostrar mensaje de error
        return; // Salir de la función
      }

      // Si la respuesta es correcta, obtener el texto de la respuesta
      const text = await response.text();
      console.log('Respuesta del servidor:', text); // Para depuración
      let data;

      // Intentar parsear el texto si tiene formato JSON
      try {
        data = JSON.parse(text); // Intentar parsear a JSON
      } catch {
        // Si la respuesta no es un JSON válido, tratar como texto plano
        data = {
          message: text // Asignar el texto como mensaje
        };
      }

      console.log('Datos del usuario:', data); // Para depuración

      // Comprobar si el mensaje indica éxito
      if (data.message === 'Login exitoso') {
        // Almacenar el usuario en localStorage y sessionStorage
        localStorage.setItem('user', JSON.stringify(data.user));
        sessionStorage.setItem('user', JSON.stringify(data.user)); // Almacena en sessionStorage
        login(data.user); // Llamar a la función de login para guardar el usuario
        navigate('/cita'); // Navegar a la ruta deseada
      } else {
        setMensaje(data.message || 'Error en el login.'); // Mensaje de error
      }

    } catch (error) {
      setMensaje('Error en la conexión. Inténtalo de nuevo más tarde.'); // Mensaje de error genérico
      console.error('Error:', error);
    }
  };

  return (
      <div className="back">
        <Navbar />
        <div className="div-center">
          <div className="content">
            <h3 className="center text-center">
              BIENVENIDO AL PORTAL DE
              <br />
              BIBLIOTECA UPB
            </h3>
            <hr />
            <form onSubmit={handleSubmit}>
              <div className="form-group text-center">
                <label htmlFor="exampleInputEmail1">Correo electrónico</label>
                <input
                    type="email"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Correo electrónico"
                    required
                />
              </div>
              <div className="form-group text-center">
                <label htmlFor="exampleInputPassword1">Contraseña</label>
                <input
                    type="password"
                    value={contrasena}
                    onChange={(e) => setContrasena(e.target.value)}
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="*****"
                    required
                />
              </div>
              <div className="row align-items-start my-3 mx-1">
                <button type="submit" className="col btn btn-danger">
                  Iniciar sesión
                </button>
              </div>
              <hr />
            </form>
            {mensaje && <p className="text-danger">{mensaje}</p>} {/* Mostrar mensaje de error */}
          </div>
        </div>
      </div>
  );
};

export default Login;
