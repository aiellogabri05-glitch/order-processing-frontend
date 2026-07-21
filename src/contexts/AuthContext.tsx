import { createContext, useState } from 'react';
import type { ReactNode } from 'react';

import type { AuthContextType } from '../types/AuthContextType';
import type { User } from '../types/User';

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}   

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (): Promise<void> => {
    setIsLoading(true);

  try {
    // TODO: implement login logic
  } finally {
    setIsLoading(false);
  }
};

  const logout = async (): Promise<void> => {
    setUser(null);
  };

  const isAuthenticated = user !== null;

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}
