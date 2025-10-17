const DADOS_DAS_EMPRESAS = [
    { 
        id: 1, 
        nome: 'Roupas Estilosas', 
        categoria: 'Modinha e Moda Praia', 
        cidade: 'Caruaru - PE', 
        endereco: 'Rua da Moda, 123, Centro, Caruaru',
        tipo: 'empresas' 
    },
    // ... e assim por diante para todas as empresas, garantindo que tenham 'tipo' e 'cidade'
];

const DADOS_DOS_COSTUREIROS = [
    { 
        id: 101,
        nome: 'Gabriel Batista', 
        categoria: 'Modinha e Moda Praia', 
        contato: '(81) 94589-****', 
        endereco: 'Rua Governador, 123, Centro, Caruaru', // <-- PRECISA TER ENDEREÇO
        imageUrl: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
        avaliacao: 5,
        tipo: 'costureiros', // <-- PRECISA TER TIPO
        cidade: 'Caruaru - PE'   // <-- PRECISA TER CIDADE
    },
    { 
        id: 102,
        nome: 'Sara Gabriely', 
        categoria: 'Modinha', 
        contato: '(81) 94589-****', 
        endereco: 'Av. Principal, 456, Centro, Toritama', // <-- PRECISA TER ENDEREÇO
        imageUrl: 'https://images.pexels.com/photos/3772510/pexels-photo-3772510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
        avaliacao: 4,
        tipo: 'costureiros', // <-- PRECISA TER TIPO
        cidade: 'Toritama - PE'   // <-- PRECISA TER CIDADE
    },
];

export const getEmpresas = () => { return DADOS_DAS_EMPRESAS; };
export const getCostureiros = () => { return DADOS_DOS_COSTUREIROS; };
export const getAllItems = () => { return [...DADOS_DAS_EMPRESAS, ...DADOS_DOS_COSTUREIROS]; };
export const getEmpresaById = (id) => { return DADOS_DAS_EMPRESAS.find(e => e.id === parseInt(id)); };
export const getCostureiroById = (id) => { return DADOS_DOS_COSTUREIROS.find(c => c.id === parseInt(id)); };