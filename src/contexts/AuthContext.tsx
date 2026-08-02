import { createContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import type { AuthContextType } from '../types/AuthContextType';
import type { User } from '../types/User';
import type { LoginRequest } from '../types/LoginRequest';
import { STORAGE_KEYS } from '../constants/storage';
import { login as loginService, logout as logoutService } from '../services/AuthService';

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isInitializing, setIsInitializing] = useState<boolean>(true);

    useEffect(() => {
        const savedUser = localStorage.getItem(STORAGE_KEYS.USER);

        if (savedUser) {
            const user: User = JSON.parse(savedUser);
            setUser(user);
        }
        setIsInitializing(false);
        }, []);

    const login = async (request: LoginRequest): Promise<void> => {
  console.log('AuthContext login');

  setIsLoading(true);

  try {
    const response = await loginService(request);

    console.log(response);

    setUser(response.user);

    localStorage.setItem(
      STORAGE_KEYS.USER,
      JSON.stringify(response.user)
    );

    console.log(localStorage.getItem(STORAGE_KEYS.USER));
  } finally {
    setIsLoading(false);
  }
};

    const logout = async (): Promise<void> => {
        await logoutService();
        setUser(null);
        localStorage.removeItem(STORAGE_KEYS.USER);
        // setIsAuthenticated(false);
    }

    const isAuthenticated = user !== null;

    return (
        <AuthContext.Provider value={{ 
            user, 
            isAuthenticated, 
            isLoading,
            isInitializing,
            login, 
            logout,
             }}>
            {children}
        </AuthContext.Provider>
    );
}
