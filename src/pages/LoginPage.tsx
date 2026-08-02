import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import type { LoginRequest } from '../types/LoginRequest';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../constants/routes';
import { AUTH_MESSAGES } from '../constants/messages';


function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const { login, isLoading } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (
        event: React.FormEvent<HTMLFormElement>
    ): Promise<void> => {
        event.preventDefault();

        setError('');

        if ( !username || !password) {

            setError (AUTH_MESSAGES.REQUIRED_FIELDS);
            return;
        }

        const request: LoginRequest = {
            username,
            password,
        };

        try {
            console.log('calling login...');
            await login(request);

            console.log('login successful, navigating to dashboard...');

            navigate (ROUTES.DASHBOARD);
        } catch {
            console.error('Login failed');
            setError(AUTH_MESSAGES.INVALID_CREDENTIALS);
        }
        };

    return <main>
        <h1>Order Processing System</h1>
        {error && <p style={{ color: 'red' }}>{error}</p>}

        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username:</label>
                <input
                    id="username"
                    type="text"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div> 
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button type="submit"
            disabled={isLoading}
            >
                {isLoading ? 'Logging in...' : 'Login'}

            </button>
        </form>
    </main>
}

export default LoginPage;