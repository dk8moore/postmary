import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { TooltipProvider } from '@ui/tooltip';
import { LoginForm } from '@page/app/login';
import { SignUpForm } from '@page/app/signup';
import "@style/app.css";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/signup" element={<SignUpForm />} />
    </Routes>
  );
};

export default AppRoutes;
