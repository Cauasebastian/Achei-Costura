import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

// Dados de exemplo de quem pagou pelo anúncio.
const ANUNCIOS_DESTAQUE = [
    { id: 101, nome: 'Gabriel Batista', categoria: 'Costureiro - Moda Praia', tipo: 'costureiros', imageUrl: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 1, nome: 'Roupas Estilosas', categoria: 'Empresa - Modinha', tipo: 'empresas', imageUrl: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 102, nome: 'Sara Gabriely', categoria: 'Costureira - Modinha', tipo: 'costureiros', imageUrl: 'https://images.pexels.com/photos/3772510/pexels-photo-3772510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
];

function AnuncioCarrossel() {
    const [indiceAtual, setIndiceAtual] = useState(0);

    // Funções para os botões de seta
    const irParaAnterior = () => {
        const isFirstSlide = indiceAtual === 0;
        const novoIndice = isFirstSlide ? ANUNCIOS_DESTAQUE.length - 1 : indiceAtual - 1;
        setIndiceAtual(novoIndice);
    };

    const irParaProximo = () => {
        const isLastSlide = indiceAtual === ANUNCIOS_DESTAQUE.length - 1;
        const novoIndice = isLastSlide ? 0 : indiceAtual + 1;
        setIndiceAtual(novoIndice);
    };

    // Efeito para a rotação automática
    useEffect(() => {
        // Cria um timer que chama a função irParaProximo a cada 5 segundos
        const timer = setInterval(irParaProximo, 5000); 

        // Limpa o timer quando o componente é "desmontado" para evitar bugs
        return () => clearInterval(timer);
    }, [indiceAtual]); // O [indiceAtual] garante que o timer é resetado a cada mudança

    const anuncioAtual = ANUNCIOS_DESTAQUE[indiceAtual];

    return (
        <div className="carrossel-container">
            {/* O onClick agora chama a função com o nome correto */}
            <button onClick={irParaAnterior} className="arrow-btn-carrossel">
                <span>←</span>
            </button>
            
            <Link to={`/${anuncioAtual.tipo}/${anuncioAtual.id}`} className="anuncio-destaque-link">
                <div className="anuncio-destaque-conteudo">
                    <p>ANUNCIE AQUI</p>
                    <h3>{anuncioAtual.nome}</h3>
                </div>
            </Link>

            {/* O onClick agora chama a função com o nome correto */}
            <button onClick={irParaProximo} className="arrow-btn-carrossel">
                <span>→</span>
            </button>
        </div>
    );
}

export default AnuncioCarrossel;