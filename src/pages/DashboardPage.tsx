import Card from '../components/Card';
import StatisticCard from '../components/StatisticCard';

function DashboardPage() {
  return (
    <>
      <h2>Dashboard</h2>

      <p>Welcome back!</p>

      <Card title="Orders Overview">
        <StatisticCard
          title="Total Orders"
          value={0}
        />

        <StatisticCard
          title="Pending Orders"
          value={0}
        />

        <StatisticCard
          title="Completed Orders"
          value={0}
        />
      </Card>

      <Card title="Recent Activity">
        <p>No recent activity.</p>
      </Card>
    </>
  );
}

export default DashboardPage;