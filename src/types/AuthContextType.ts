import type { LoginRequest } from './LoginRequest';
import type { User } from './User';

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  isInitializing: boolean;
  login: (request: LoginRequest) => Promise<void>;
  logout: () => Promise<void>;
}
