import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SignIn from '../../pages/SignIn/index.jsx';
import SignUp from '../../pages/SignUp/index.jsx';

export default function PublicRoutes() {
  return (
    <Routes>
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="*" element={<Navigate to="/sign-in" />} />
    </Routes>
  );
}
