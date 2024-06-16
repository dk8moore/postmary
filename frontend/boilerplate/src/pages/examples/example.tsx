import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { TooltipProvider } from '@ui/tooltip';
import { Dashboard as Dashboard1 } from '@page/examples/dashboard-1';
import { Dashboard as Dashboard2 } from '@page/examples/dashboard-2';
import { Dashboard as Dashboard3 } from '@page/examples/dashboard-3';
import { Dashboard as Dashboard4 } from '@page/examples/dashboard-4';
import { Dashboard as Dashboard5 } from '@page/examples/dashboard-5';
import { Dashboard as Dashboard6 } from '@page/examples/dashboard-6';
import { Dashboard as Dashboard7 } from '@page/examples/dashboard-7';
import { LoginForm as LoginForm1 } from '@page/examples/authentication-1';
import { LoginForm as LoginForm2 } from '@page/examples/authentication-2';
import { LoginForm as LoginForm3 } from '@page/examples/authentication-3';
import { LoginForm as LoginForm4 } from '@page/examples/authentication-4';

const ExampleRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginForm1 />} />
      <Route path="/a2" element={<LoginForm2 />} />
      <Route path="/a3" element={<LoginForm3 />} />
      <Route path="/a4" element={<LoginForm4 />} />
      <Route path="/d1" element={<Dashboard1 />} />
      <Route path="/d2" element={<Dashboard2 />} />
      <Route path="/d3" element={<TooltipProvider><Dashboard3 /></TooltipProvider>} />
      <Route path="/d4" element={<Dashboard4 />} />
      <Route path="/d5" element={<TooltipProvider><Dashboard5 /></TooltipProvider>} />
      <Route path="/d6" element={<TooltipProvider><Dashboard6 /></TooltipProvider>} />
      <Route path="/d7" element={<TooltipProvider><Dashboard7 /></TooltipProvider>} />
    </Routes>
  );
};

export default ExampleRoutes;
