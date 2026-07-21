import type { User } from './User';

export interface AuthContextType {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: User | null;

  login: () => Promise<void>;
  logout: () => Promise<void>;
}
