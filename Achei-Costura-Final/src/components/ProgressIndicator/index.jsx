// components/ProgressIndicator/index.js
import React from 'react';
import './style.css';

function ProgressIndicator({ currentStep, totalSteps }) {
  const steps = [
    { number: 1, label: 'Criar Conta' },
    { number: 2, label: 'Informações Básicas' },
    { number: 3, label: 'Perfil Profissional' }
  ];

  return (
    <div className="progress-indicator">
      {steps.map((step, index) => (
        <React.Fragment key={step.number}>
          <div className={`step-item ${currentStep >= step.number ? 'active' : ''} ${currentStep === step.number ? 'current' : ''}`}>
            <div className="step-number">{step.number}</div>
            <div className="step-label">{step.label}</div>
          </div>
          {index < steps.length - 1 && (
            <div className={`step-line ${currentStep > step.number ? 'active' : ''}`} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default ProgressIndicator;