const DADOS_DAS_EMPRESAS = [
    { id: 1, nome: 'Roupas Estilosas', categoria: 'Modinha e Moda Praia', cidade: 'Caruaru - PE', contato: '81 9...****', imageUrl: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', avaliacao: 5 },
    { id: 2, nome: 'Malhas & Cia', categoria: 'Malharia', cidade: 'Toritama - PE', contato: '81 9...****', imageUrl: 'https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', avaliacao: 4 },
    { id: 3, nome: 'Jeans da Capital', categoria: 'Jeans', cidade: 'Toritama - PE', contato: '81 9...****', imageUrl: 'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', avaliacao: 5 },
    { id: 4, nome: 'Costura Fina', categoria: 'Alta Costura', cidade: 'Caruaru - PE', contato: '81 9...****', imageUrl: 'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', avaliacao: 4 },
];

const DADOS_DOS_COSTUREIROS = [
    { id: 101, nome: 'Gabriel Batista', categoria: 'Modinha e Moda Praia', contato: '81 94589-****', imageUrl: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', avaliacao: 5 },
    { id: 102, nome: 'Sara Gabriely', categoria: 'Modinha', contato: '81 94589-****', imageUrl: 'https://images.pexels.com/photos/3772510/pexels-photo-3772510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', avaliacao: 4 },
];

export const getEmpresas = () => DADOS_DAS_EMPRESAS;
export const getCostureiros = () => DADOS_DOS_COSTUREIROS;
export const getEmpresaById = (id) => DADOS_DAS_EMPRESAS.find(e => e.id === parseInt(id));
export const getCostureiroById = (id) => DADOS_DOS_COSTUREIROS.find(c => c.id === parseInt(id));