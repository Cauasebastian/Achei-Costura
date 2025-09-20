import React from 'react';
import { Routes, Route } from 'react-router-dom';

import EmpresasPage from '../pages/Empresas';
import InfoEmpresaPage from '../pages/info-empresa';
import CostureirosPage from '../pages/Costureiros';
import InfoCostureiroPage from '../pages/info-costureiro';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/empresas" element={<EmpresasPage />} />
      <Route path="/empresas/:id" element={<InfoEmpresaPage />} />
      <Route path="/costureiros" element={<CostureirosPage />} />
      <Route path="/costureiros/:id" element={<InfoCostureiroPage />} />
      <Route path="/" element={<EmpresasPage />} />
    </Routes>
  );
}
export default AppRoutes;