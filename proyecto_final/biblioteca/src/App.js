import React, {Fragment} from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import MakeAppointment from './pages/Make_Appointment';
import Login from './pages/Login';
import Updatelinks from './pages/Updatelinks';
import SeeAppointments from './pages/See_Apointments';
import Report from "./pages/Report";
import { AuthProvider } from './AuthContext'; // Importa el contexto
import ProtectedRoute from './ProtectedRoute';

function App() {
  return (
      <AuthProvider>
    <Fragment>
      <Router>
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/cita' exact element={<ProtectedRoute><MakeAppointment/></ProtectedRoute>} />
          <Route path='/ver-citas' exact element={<ProtectedRoute><SeeAppointments/></ProtectedRoute>}/>
          <Route path='/iniciar-sesion' exact element={<Login/>} />
          <Route path='/actualizar-links' exact element={<ProtectedRoute><Updatelinks/></ProtectedRoute>} />
          <Route path='/reporte' exact element={<ProtectedRoute><Report/></ProtectedRoute>} />
        </Routes>
      </Router>
    </Fragment>
      </AuthProvider>
  );
}

export default App;
