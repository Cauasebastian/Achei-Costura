import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SpeechButton from '../../components/SpeechButton';
import logo from '../../assets/logo.png';
import './style.css';

function CadastroPage() {
    
    const [cadastroTipo, setCadastroTipo] = useState('faccao');
    const navigate = useNavigate();

    const [formDataFaccao, setFormDataFaccao] = useState({
        nome: '',
        sobrenome: '',
        telefone: '',
        email: '',
        senha: ''
    });

    const [formDataEmpresa, setFormDataEmpresa] = useState({
        nomeEmpresa: '',
        telefone: '',
        email: '',
        senha: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (cadastroTipo === 'faccao') {
            setFormDataFaccao(prev => ({ ...prev, [name]: value }));
        } else {
            setFormDataEmpresa(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (cadastroTipo === 'faccao') {
            const dadosParaEnviar = {
                ...formDataFaccao,
                perfilPrivado: false
            };

            console.log("Enviando dados FACÇÃO (Público):", dadosParaEnviar);

            navigate('/cadastrostep2');
            alert('Primeira etapa concluída! Redirecionando para a próxima etapa...');

        } else {
            const dadosParaEnviar = {
                ...formDataEmpresa,
                perfilPrivado: true
            };

            console.log("Enviando dados EMPRESA (Privado):", dadosParaEnviar);
            navigate('/');
            alert('Cadastro de Empresa concluído! Você já pode procurar por facções.');
        }
    };
    const textoTitulo = "Crie sua Conta";
    const textoNome = "Nome";
    const textoSobrenome = "Sobrenome";
    const textoTelefone = "Número de telefone";
    const textoEmail = "Email";
    const textoSenha = "Senha";
    const textoNomeEmpresa = "Nome da Empresa";

    return (
        <div className="cadastro-container">
            <form onSubmit={handleSubmit} className="cadastro-card">
                <div className="form-header">
                    <h2>{textoTitulo}</h2>
                    <SpeechButton textToSpeak={textoTitulo} />
                </div>
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
                                <label htmlFor="nome">{textoNome}</label>
                                <SpeechButton textToSpeak={textoNome} />
                            </div>
                            <input type="text" id="nome" name="nome" value={formDataFaccao.nome} onChange={handleChange} required />
                        </div>

                        <div className="form-group">
                            <div className="form-label-container">
                                <label htmlFor="sobrenome">{textoSobrenome}</label>
                                <SpeechButton textToSpeak={textoSobrenome} />
                            </div>
                            <input type="text" id="sobrenome" name="sobrenome" value={formDataFaccao.sobrenome} onChange={handleChange} required />
                        </div>

                        <div className="form-group">
                            <div className="form-label-container">
                                <label htmlFor="telefoneFaccao">{textoTelefone}</label>
                                <SpeechButton textToSpeak={textoTelefone} />
                            </div>
                            <input type="tel" id="telefoneFaccao" name="telefone" value={formDataFaccao.telefone} onChange={handleChange} required />
                        </div>

                        <div className="form-group">
                            <div className="form-label-container">
                                <label htmlFor="emailFaccao">{textoEmail}</label>
                                <SpeechButton textToSpeak={textoEmail} />
                            </div>
                            <input type="email" id="emailFaccao" name="email" value={formDataFaccao.email} onChange={handleChange} required />
                        </div>

                        <div className="form-group">
                            <div className="form-label-container">
                                <label htmlFor="senhaFaccao">{textoSenha}</label>
                                <SpeechButton textToSpeak={textoSenha} />
                            </div>
                            <input type="password" id="senhaFaccao" name="senha" value={formDataFaccao.senha} onChange={handleChange} required />
                        </div>
                    </>
                ) : (
                    // --- Formulário de EMPRESA ---
                    <>

                        <div className="form-group">
                            <div className="form-label-container">
                                <label htmlFor="nomeEmpresa">{textoNomeEmpresa}</label>
                                <SpeechButton textToSpeak={textoNomeEmpresa} />
                            </div>
                            <input type="text" id="nomeEmpresa" name="nomeEmpresa" value={formDataEmpresa.nomeEmpresa} onChange={handleChange} required />
                        </div>

                        <div className="form-group">
                            <div className="form-label-container">
                                <label htmlFor="telefoneEmpresa">{textoTelefone}</label>
                                <SpeechButton textToSpeak={textoTelefone} />
                            </div>
                            <input type="tel" id="telefoneEmpresa" name="telefone" value={formDataEmpresa.telefone} onChange={handleChange} required />
                        </div>

                        <div className="form-group">
                            <div className="form-label-container">
                                <label htmlFor="emailEmpresa">{textoEmail}</label>
                                <SpeechButton textToSpeak={textoEmail} />
                            </div>
                            <input type="email" id="emailEmpresa" name="email" value={formDataEmpresa.email} onChange={handleChange} required />
                        </div>

                        <div className="form-group">
                            <div className="form-label-container">
                                <label htmlFor="senhaEmpresa">{textoSenha}</label>
                                <SpeechButton textToSpeak={textoSenha} />
                            </div>
                            <input type="password" id="senhaEmpresa" name="senha" value={formDataEmpresa.senha} onChange={handleChange} required />
                        </div>
                    </>
                )}

                <button type="submit" className="btn-avancar">Avançar</button>

                <p className="login-redirect">
                    Já possui uma conta? <Link to="/login">Faça login</Link>
                </p>
            </form>
        </div>
    );
}

export default CadastroPage;