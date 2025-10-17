import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// 1. Importamos também o ícone CreditCard, junto com o Coin
import { Coin, CreditCard } from 'react-bootstrap-icons';
import './style.css';

function PagamentoPage() {
  const [paymentMethod, setPaymentMethod] = useState('cartao');

  return (
    <div className="pagamento-container">
      <h1 className="pagamento-titulo">Finalize sua Assinatura</h1>

      <form className="pagamento-form">
        {/* SELEÇÃO DO CARTÃO COM O NOVO ÍCONE */}
        <div className="metodo-pagamento">
          <label className="radio-option">
            <input
              type="radio"
              name="paymentMethod"
              value="cartao"
              checked={paymentMethod === 'cartao'}
              onChange={() => setPaymentMethod('cartao')}
            />
            {/* 2. Adicionamos o ícone CreditCard aqui */}
            <CreditCard size={24} color="#006D5B" /> Cartão de Crédito/Débito
          </label>
        </div>

        {paymentMethod === 'cartao' && (
          <div className="form-section">
            <div className="form-group">
              <label htmlFor="cardNumber">Número do cartão:</label>
              <input type="text" id="cardNumber" />
            </div>
            <div className="form-group">
              <label htmlFor="cardName">Nome do cartão:</label>
              <input type="text" id="cardName" />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="expiryDate">Validade (mês/ano):</label>
                <input type="text" id="expiryDate" placeholder="xx/xxxx" />
              </div>
              <div className="form-group">
                <label htmlFor="cvv">Cód. de segurança:</label>
                <input type="text" id="cvv" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="cpf">CPF do titular:</label>
              <input type="text" id="cpf" />
            </div>
            <div className="form-group">
              <label htmlFor="installments">Nº de Parcelas:</label>
              <select id="installments">
                <option value="1">1x</option>
                <option value="2">2x</option>
                <option value="3">3x</option>
              </select>
            </div>
          </div>
        )}

        {/* SELEÇÃO DO PIX COM O ÍCONE */}
        <div className="metodo-pagamento">
          <label className="radio-option">
            <input
              type="radio"
              name="paymentMethod"
              value="pix"
              checked={paymentMethod === 'pix'}
              onChange={() => setPaymentMethod('pix')}
            />
            <Coin color="#006D5B" size={24} /> PIX:
          </label>
        </div>
        
        {paymentMethod === 'pix' && (
           <div className="form-section pix-info">
             <p>Ao confirmar o QR Code para pagamento será exibido na próxima tela.</p>
           </div>
        )}

        <button type="submit" className="btn-confirmar">
          Confirmar Pagamento
        </button>
      </form>
    </div>
  );
}

export default PagamentoPage;