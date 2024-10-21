import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const user = localStorage.getItem('user'); // O sessionStorage, según lo que utilices

    return user ? children : <Navigate to="/iniciar-sesion" />;
};

export default ProtectedRoute;