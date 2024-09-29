import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from '../../pages/Dashboard/index.jsx';
import Payment from '../../pages/PaymentConfirmation/index.jsx';

export default function PrivateRoutes() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
}
