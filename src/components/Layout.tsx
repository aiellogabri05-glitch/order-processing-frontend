import type { ReactNode } from 'react';

import { useNavigate } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';

interface LayoutProps {
    children: ReactNode,
}

function Layout({ children }: LayoutProps) {
  const { user, logout } = useAuth();

  const navigate = useNavigate();

  const handleLogout = async (): Promise<void> => {
  await logout();

  navigate('/');
};

  return (
    <main>
        <header>
            <h1>Order Processing System</h1>

                <p>Welcome, {user?.username}</p>

            <button onClick={handleLogout}>
                Logout
            </button>
        </header>

        {children}
    </main>
  );
}

export default Layout;