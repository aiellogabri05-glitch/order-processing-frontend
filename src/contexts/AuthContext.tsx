import { createContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { AuthContextType } from '../types/AuthContextType';
import type { User } from '../types/User';
import { login as loginService, logout as logoutService } from '../services/AuthService';

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const login = async (
        username: string,
        password: string,
    ): Promise<void> => {
        setIsLoading(true);
        try {
            const response = await loginService({ 
                username,
                 password
                });
            setUser(response.user);
        } finally {
            setIsLoading(false);
        }
    };

    const logout = async (): Promise<void> => {
        await logoutService();
        setUser(null);
    };

    const isAuthenticated = user !== null;

    return (
        <AuthContext.Provider
            value={{
                user,
                login,
                logout,
                isAuthenticated,
                isLoading,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
