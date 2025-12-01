import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const login = () => {
    setIsLoggedIn(true);
    // Usuário começa com 1 moeda para teste
    setUser({ 
      nome: 'Usuário Teste', 
      coins: 1 
    });
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  // Função para gastar moedas
  const gastarMoeda = () => {
    if (user && user.coins > 0) {
      setUser(prevUser => ({
        ...prevUser,
        coins: prevUser.coins - 1
      }));
      return true; 
    }
    return false; 
  };

  const value = { isLoggedIn, login, logout, user, gastarMoeda };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}