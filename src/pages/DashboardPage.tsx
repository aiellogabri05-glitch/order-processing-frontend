import Card from '../components/Card';
import StatisticCard from '../components/StatisticCard';
import { useEffect, useState } from 'react';
import type { Order } from '../types/Order';
import { getOrders } from '../services/OrdersService';

function DashboardPage() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const orders = await getOrders();
      setOrders(orders);
    };

    fetchOrders();
  }, []);

  const totalOrders = orders.length;
  const pendingOrders = orders.filter(
    (order) => order.status === 'pending').length;
  const completedOrders = orders.filter(
    (order) => order.status === 'completed').length; 


  return (
    <>
      <h2>Dashboard</h2>

      <p>Welcome back!</p>

      <Card title="Orders Overview">
        <StatisticCard
          title="Total Orders"
          value={totalOrders}
        />

        <StatisticCard
          title="Pending Orders"
          value={pendingOrders}
        />

        <StatisticCard
          title="Completed Orders"
          value={completedOrders}
        />
      </Card>

      <Card title="Recent Activity">
        <p>No recent activity.</p>
      </Card>
    </>
  );
}

export default DashboardPage;