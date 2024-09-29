import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from '../../pages/Dashboard/index.jsx';

export default function PrivateRoutes() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/payment" element={<h1>Hago el componente de pago</h1>} />
      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
}
