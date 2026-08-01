import { createContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { AuthContextType } from '../types/AuthContextType';
import type { User } from '../types/User';
import type { LoginRequest } from '../types/LoginRequest';

import { login as loginService, logout as logoutService } from '../services/AuthService';

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

    const login = async (request: LoginRequest): Promise<void> => {
        setIsLoading(true);
        try {
            const response = await loginService(request);
            setUser(response.user);
            // setIsAuthenticated(true);
        } finally {
            setIsLoading(false);
        }
    };

    const logout = async (): Promise<void> => {
        await logoutService();
        setUser(null);
        // setIsAuthenticated(false);
    }

    const isAuthenticated = user !== null;

    return (
        <AuthContext.Provider value={{ 
            user, 
            isAuthenticated, 
            isLoading,
            login, 
            logout,
             }}>
            {children}
        </AuthContext.Provider>
    );
}
