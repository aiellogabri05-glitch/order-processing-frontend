import type { LoginResponse } from '../types/LoginResponse';
import type { LoginRequest } from '../types/LoginRequest';

export async function login(request: LoginRequest): Promise<LoginResponse> {
    if (
        request.username !== 'Gabriele' ||
        request.password !== 'password123!'

    ) {
        throw new Error('Invalid username or password');
    }

    return {
        user: {
            id: '1',
            username: 'Gabriele',
            email: 'gabriele@example.com'
        },
        accessToken: 'mock-access-token',
        idToken: 'mock-id-token',
        refreshToken: 'mock-refresh-token',
        expiresIn: 3600
    };
}

export async function logout(): Promise<void> {
    // Simulate logout logic, e.g., clearing tokens or session data
    return;
}

