import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Importação de todas as páginas do projeto
import HomePage from '../pages/home';
import InfoEmpresaPage from '../pages/info-empresa';
import InfoCostureiroPage from '../pages/info-costureiro';
import AnunciePage from '../pages/Anuncie';
import CadastroPage from '../pages/cadastro';
import CadastroStep2Page from '../pages/CadastroStep2';
import LoginPage from '../pages/login';
import EsqueciSenhaPage from '../pages/EsqueciSenha';
import PlanosPage from '../pages/Planos';
import SobreNosPage from '../pages/SobreNos';
import PagamentoPage from '../pages/Pagamento';
import ContatoPage from '../pages/Contato';
import MeuPerfilPage from '../pages/MeuPerfil'; // <-- Página "Meu Perfil" que criamos

function AppRoutes() {
  return (
    <Routes>
      {/* Rotas principais de navegação */}
      <Route path="/" element={<HomePage />} />
      <Route path="/planos" element={<PlanosPage />} />
      <Route path="/sobre-nos" element={<SobreNosPage />} />
      <Route path="/contato" element={<ContatoPage />} />
      <Route path="/anuncie" element={<AnunciePage />} />

      {/* Rota para o perfil do usuário logado */}
      <Route path="/meu-perfil" element={<MeuPerfilPage />} /> {/* <-- Rota nova adicionada */}

      {/* Rotas de Detalhes (quando clica em "Saiba mais") */}
      <Route path="/empresas/:id" element={<InfoEmpresaPage />} />
      <Route path="/costureiros/:id" element={<InfoCostureiroPage />} />

      {/* Rotas de Autenticação e Cadastro */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/esqueci-senha" element={<EsqueciSenhaPage />} />
      <Route path="/cadastro" element={<CadastroPage />} />
      <Route path="/cadastrostep2" element={<CadastroStep2Page />} />
      
      {/* Rota de Pagamento */}
      <Route path="/pagamento" element={<PagamentoPage />} />
    </Routes>
  );
}

export default AppRoutes;