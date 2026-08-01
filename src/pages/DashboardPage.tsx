import {useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

function DashboardPage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async (): Promise<void> => {
    await logout();
    navigate('/');
  }
  return(
    <>
      <h2>Dashboard</h2>

      <p>You are successfully authenticated.</p>
    </>
  );
}

export default DashboardPage;  