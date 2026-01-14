import axios from 'axios';

const API_URL = 'http://localhost:8080';

// Cria uma instância do axios
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para adicionar token automaticamente
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor para tratar erros de autenticação
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Token expirado ou inválido
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const authService = {
  // Login
  async login(email, password) {
    try {
      const response = await api.post('/auth/login', { email, password });
      
      if (response.data.token) {
        // Armazena o token de forma segura
        localStorage.setItem('token', response.data.token);
        
        // Busca os dados do usuário
        const userResponse = await api.get('/users/me');
        localStorage.setItem('user', JSON.stringify(userResponse.data));
        
        return {
          success: true,
          user: userResponse.data,
          token: response.data.token
        };
      }
      return { success: false, message: 'Token não recebido' };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || 'Erro ao fazer login'
      };
    }
  },

  // Cadastro
  // Cadastro com login automático
// Cadastro com login automático - VERSÃO CORRIGIDA
async register(userData) {
  try {
    console.log('📝 Iniciando cadastro para:', userData.email);
    
    // 1. Primeiro faz o cadastro
    const registerResponse = await api.post('/auth/register', userData);
    
    console.log('📨 Resposta do cadastro:', registerResponse.data);
    
    // Verifica se o cadastro foi bem-sucedido (pode ser id, success, ou token)
    const cadastroSucesso = (
      registerResponse.data.id || 
      registerResponse.data.success === true || 
      registerResponse.data.token
    );
    
    if (cadastroSucesso) {
      console.log('✅ Cadastro realizado com sucesso');
      
      // 2. Faz login automaticamente com as mesmas credenciais
      const loginResponse = await api.post('/auth/login', {
        email: userData.email,
        password: userData.password
      });
      
      console.log('🔑 Resposta do login:', loginResponse.data);
      
      // 3. Verifica se o login retornou um token
      if (loginResponse.data.token) {
        const token = loginResponse.data.token;
        localStorage.setItem('token', token);
        
        // 4. Busca os dados completos do usuário
        let userDataResponse;
        try {
          const userResponse = await api.get('/api/users/me');
          userDataResponse = userResponse.data;
          console.log('👤 Dados do usuário obtidos:', userDataResponse);
        } catch (userError) {
          console.warn('⚠️ Não foi possível obter /api/users/me, usando dados básicos');
          // Usa dados básicos se a rota /me não estiver disponível
          userDataResponse = {
            id: registerResponse.data.id || 'new-user',
            name: userData.name,
            email: userData.email,
            role: userData.role || 'USER',
            phone: userData.phone || '',
            verified: false
          };
        }
        
        // 5. Adiciona 10 moedas ao novo usuário
        const userWithCoins = {
          ...userDataResponse,
          coins: (userDataResponse.coins || 0) + 10
        };
        
        localStorage.setItem('user', JSON.stringify(userWithCoins));
        
        console.log('✅ Login automático realizado');
        
        return {
          success: true,
          user: userWithCoins,
          token: token,
          message: 'Cadastro e login realizados com sucesso!'
        };
      } else {
        // Se não conseguiu fazer login, mas o cadastro foi bem-sucedido
        console.warn('⚠️ Cadastro OK, mas login falhou');
        return {
          success: false,
          message: 'Cadastro realizado, mas não foi possível fazer login automaticamente. Por favor, faça login manualmente.'
        };
      }
    } else {
      // Se o cadastro falhou
      console.error('❌ Cadastro falhou');
      return {
        success: false,
        message: registerResponse.data?.message || 'Cadastro falhou'
      };
    }
  } catch (error) {
    console.error('❌ Erro no registro:', error); // CORRIGIDO: estava 'con' em vez de 'error'
    
    // Tratamento de erros específicos
    let errorMessage = 'Erro ao cadastrar';
    
    if (error.response) {
      // Erro da API
      if (error.response.status === 400) {
        errorMessage = error.response.data?.message || 'Dados inválidos';
      } else if (error.response.status === 409) {
        errorMessage = 'Email já está em uso';
      } else if (error.response.status === 500) {
        errorMessage = 'Erro no servidor. Tente novamente mais tarde.';
      } else {
        errorMessage = error.response.data?.message || `Erro ${error.response.status}`;
      }
    } else if (error.request) {
      // Erro de rede
      errorMessage = 'Sem resposta do servidor. Verifique sua conexão.';
    } else {
      // Outros erros
      errorMessage = error.message || 'Erro desconhecido';
    }
    
    return {
      success: false,
      message: errorMessage
    };
  }
},

  // Logout
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },

  // Verifica se está autenticado
  isAuthenticated() {
    return !!localStorage.getItem('token');
  },

  // Retorna o usuário atual
  getCurrentUser() {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  },

  // Retorna o token
  getToken() {
    return localStorage.getItem('token');
  }
};

export default api; 

const DADOS_DAS_EMPRESAS = [];

const DADOS_DOS_COSTUREIROS = [
    { 
        id: 101,
        nome: 'Gabriel Batista', 
        categoria: 'Modinha e Moda Praia', 
        contato: '(81) 94589-****', 
        endereco: 'Rua Governador, 123, Centro, Caruaru',
        imageUrl: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
        avaliacao: 5,
        tipo: 'costureiros',
        cidade: 'Caruaru - PE'
    },
    { 
        id: 102,
        nome: 'Sara Gabriely', 
        categoria: 'Modinha', 
        contato: '(81) 94589-****', 
        endereco: 'Av. Principal, 456, Centro, Toritama',
        imageUrl: 'https://images.pexels.com/photos/3772510/pexels-photo-3772510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
        avaliacao: 4,
        tipo: 'costureiros',
        cidade: 'Toritama - PE'
    },

];


// 3. TODAS as funções continuam com 'export' para não dar erro.
export const getEmpresas = () => { return DADOS_DAS_EMPRESAS; };

export const getCostureiros = () => { return DADOS_DOS_COSTUREIROS; };

// 4. A função getAllItems agora retorna APENAS os costureiros.
export const getAllItems = () => { return DADOS_DOS_COSTUREIROS; };

export const getEmpresaById = (id) => { return DADOS_DAS_EMPRESAS.find(e => e.id === parseInt(id)); };

export const getCostureiroById = (id) => { return DADOS_DOS_COSTUREIROS.find(c => c.id === parseInt(id)); };