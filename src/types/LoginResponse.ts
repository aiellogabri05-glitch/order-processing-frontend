import type {User} from './User';

export interface LoginResponse {
  user: User;
  accessToken: string;
  idToken: string;
  refreshToken: string;
  expiresIn: number;
}