import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const login = () => {
    setIsLoggedIn(true);
    // Usuário começa com 5 moedas para teste
    setUser({ 
      nome: 'Usuário Teste', 
      coins: 5 
    });
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  // NOVO: Função para gastar moedas
  const gastarMoeda = () => {
    if (user && user.coins > 0) {
      setUser(prevUser => ({
        ...prevUser,
        coins: prevUser.coins - 1
      }));
      return true; // Sucesso
    }
    return false; // Saldo insuficiente
  };

  const value = { isLoggedIn, login, logout, user, gastarMoeda };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}