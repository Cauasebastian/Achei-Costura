import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SpeechButton from '../../components/SpeechButton';
import { useAuth } from '../../context/AuthContext';
import './style.css';

function CadastroPage() {
    
    const [cadastroTipo, setCadastroTipo] = useState('faccao');
    const { register, loading, error } = useAuth();
    const navigate = useNavigate();

    const [formDataFaccao, setFormDataFaccao] = useState({
        name: '',
        sobrenome: '',
        phone: '',
        email: '',
        password: ''
    });

    const [formDataEmpresa, setFormDataEmpresa] = useState({
        name: '',
        phone: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (cadastroTipo === 'faccao') {
            setFormDataFaccao(prev => ({ ...prev, [name]: value }));
        } else {
            setFormDataEmpresa(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let userData;

        if (cadastroTipo === 'faccao') {
            userData = {
                name: `${formDataFaccao.name} ${formDataFaccao.sobrenome}`,
                email: formDataFaccao.email,
                password: formDataFaccao.password,
                phone: formDataFaccao.phone,
                role: 'USER',
                type: 'costureiros',
                category: 'A definir', // Será atualizado na próxima etapa
                verified: false
            };
        } else {
            userData = {
                name: formDataEmpresa.name,
                email: formDataEmpresa.email,
                password: formDataEmpresa.password,
                phone: formDataEmpresa.phone,
                role: 'EMPRESA',
                type: 'empresas',
                verified: false
            };
        }

        const result = await register(userData);
        
        if (result.success) {
            if (cadastroTipo === 'faccao') {
                navigate('/');
            } else {
                navigate('/');
                alert('Cadastro de Empresa concluído! Você já pode procurar por facções.');
            }
        }
    };

    const textoTitulo = "Crie sua Conta";
    const textoNome = "Nome";
    const textoSobrenome = "Sobrenome";
    const textoTelefone = "Número de telefone";
    const textoEmail = "Email";
    const textoSenha = "Senha";

    return (
        <div className="cadastro-container">
            <form onSubmit={handleSubmit} className="cadastro-card">
                <div className="form-header">
                    <h2>{textoTitulo}</h2>
                    <SpeechButton textToSpeak={textoTitulo} />
                </div>
                
                {error && (
                    <div className="error-message">
                        {error}
                    </div>
                )}
                
                <div className="cadastro-tabs">
                    <button
                        type="button"
                        className={`tab-button ${cadastroTipo === 'faccao' ? 'active' : ''}`}
                        onClick={() => setCadastroTipo('faccao')}
                    >
                        Facções
                    </button>
                    <button
                        type="button"
                        className={`tab-button ${cadastroTipo === 'empresa' ? 'active' : ''}`}
                        onClick={() => setCadastroTipo('empresa')}
                    >
                        Empresas
                    </button>
                </div>

                {cadastroTipo === 'faccao' ? (
                    <>
                        <div className="form-group">
                            <div className="form-label-container">
                                <label htmlFor="name">{textoNome}</label>
                                <SpeechButton textToSpeak={textoNome} />
                            </div>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                value={formDataFaccao.name} 
                                onChange={handleChange} 
                                required 
                            />
                        </div>

                        <div className="form-group">
                            <div className="form-label-container">
                                <label htmlFor="sobrenome">{textoSobrenome}</label>
                                <SpeechButton textToSpeak={textoSobrenome} />
                            </div>
                            <input 
                                type="text" 
                                id="sobrenome" 
                                name="sobrenome" 
                                value={formDataFaccao.sobrenome} 
                                onChange={handleChange} 
                                required 
                            />
                        </div>

                        <div className="form-group">
                            <div className="form-label-container">
                                <label htmlFor="phone">{textoTelefone}</label>
                                <SpeechButton textToSpeak={textoTelefone} />
                            </div>
                            <input 
                                type="tel" 
                                id="phone" 
                                name="phone" 
                                value={formDataFaccao.phone} 
                                onChange={handleChange} 
                                required 
                            />
                        </div>

                        <div className="form-group">
                            <div className="form-label-container">
                                <label htmlFor="email">{textoEmail}</label>
                                <SpeechButton textToSpeak={textoEmail} />
                            </div>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                value={formDataFaccao.email} 
                                onChange={handleChange} 
                                required 
                            />
                        </div>

                        <div className="form-group">
                            <div className="form-label-container">
                                <label htmlFor="password">{textoSenha}</label>
                                <SpeechButton textToSpeak={textoSenha} />
                            </div>
                            <input 
                                type="password" 
                                id="password" 
                                name="password" 
                                value={formDataFaccao.password} 
                                onChange={handleChange} 
                                required 
                                minLength="6"
                            />
                        </div>
                    </>
                ) : (
                    <>
                        <div className="form-group">
                            <div className="form-label-container">
                                <label htmlFor="nameEmpresa">{textoNome} da Empresa</label>
                                <SpeechButton textToSpeak="Nome da Empresa" />
                            </div>
                            <input 
                                type="text" 
                                id="nameEmpresa" 
                                name="name" 
                                value={formDataEmpresa.name} 
                                onChange={handleChange} 
                                required 
                            />
                        </div>

                        <div className="form-group">
                            <div className="form-label-container">
                                <label htmlFor="phoneEmpresa">{textoTelefone}</label>
                                <SpeechButton textToSpeak={textoTelefone} />
                            </div>
                            <input 
                                type="tel" 
                                id="phoneEmpresa" 
                                name="phone" 
                                value={formDataEmpresa.phone} 
                                onChange={handleChange} 
                                required 
                            />
                        </div>

                        <div className="form-group">
                            <div className="form-label-container">
                                <label htmlFor="emailEmpresa">{textoEmail}</label>
                                <SpeechButton textToSpeak={textoEmail} />
                            </div>
                            <input 
                                type="email" 
                                id="emailEmpresa" 
                                name="email" 
                                value={formDataEmpresa.email} 
                                onChange={handleChange} 
                                required 
                            />
                        </div>

                        <div className="form-group">
                            <div className="form-label-container">
                                <label htmlFor="passwordEmpresa">{textoSenha}</label>
                                <SpeechButton textToSpeak={textoSenha} />
                            </div>
                            <input 
                                type="password" 
                                id="passwordEmpresa" 
                                name="password" 
                                value={formDataEmpresa.password} 
                                onChange={handleChange} 
                                required 
                                minLength="6"
                            />
                        </div>
                    </>
                )}

                <button 
                    type="submit" 
                    className="btn-avancar"
                    disabled={loading}
                >
                    {loading ? 'Cadastrando...' : 'Avançar'}
                </button>

                <p className="login-redirect">
                    Já possui uma conta? <Link to="/login">Faça login</Link>
                </p>
            </form>
        </div>
    );
}

export default CadastroPage;