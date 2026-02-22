// pages/CadastroPage/index.js
import React from 'react';
import { CadastroProvider, useCadastro } from '../../context/CadastroContext';
import Step1CriarConta from '../../components/cadastro/Step1CriarConta';
import Step2InformacoesBasicas from '../../components/cadastro/Step2InformacoesBasicas';
import Step3PerfilProfissional from '../../components/cadastro/Step3PerfilProfissional';
import ProgressIndicator from '../../components/ProgressIndicator';
import './style.css';

function CadastroContent() {
  const { currentStep, setCurrentStep, loading, error } = useCadastro();

  const handleNextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  return (
    <div className="cadastro-container">
      <div className="cadastro-card">
        <ProgressIndicator currentStep={currentStep} totalSteps={3} />
        
        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        {loading && (
          <div className="loading-overlay">
            <div className="spinner"></div>
          </div>
        )}

        {currentStep === 1 && (
          <Step1CriarConta onNext={handleNextStep} />
        )}

        {currentStep === 2 && (
          <Step2InformacoesBasicas 
            onNext={handleNextStep} 
            onBack={handlePreviousStep}
          />
        )}

        {currentStep === 3 && (
          <Step3PerfilProfissional onBack={handlePreviousStep} />
        )}
      </div>
    </div>
  );
}

function CadastroPage() {
  return (
    <CadastroProvider>
      <CadastroContent />
    </CadastroProvider>
  );
}

export default CadastroPage;