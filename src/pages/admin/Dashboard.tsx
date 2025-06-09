import React from 'react';
import { FiUsers, FiFileText, FiSettings, FiActivity } from 'react-icons/fi';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, color }) => (
  <div className={`p-6 rounded-lg shadow-md ${color}`}>
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-600">{title}</p>
        <h3 className="text-2xl font-semibold mt-1">{value}</h3>
      </div>
      <div className="text-2xl opacity-80">{icon}</div>
    </div>
  </div>
);

const Dashboard: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Users"
          value="1,234"
          icon={<FiUsers />}
          color="bg-blue-100"
        />
        <StatCard
          title="Content Items"
          value="567"
          icon={<FiFileText />}
          color="bg-green-100"
        />
        <StatCard
          title="Active Sessions"
          value="89"
          icon={<FiActivity />}
          color="bg-purple-100"
        />
        <StatCard
          title="System Status"
          value="Healthy"
          icon={<FiSettings />}
          color="bg-yellow-100"
        />
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {/* Add activity items here */}
            <p className="text-gray-600">No recent activity</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <button className="p-4 bg-blue-50 rounded-lg text-blue-700 hover:bg-blue-100 transition">
              Add New User
            </button>
            <button className="p-4 bg-green-50 rounded-lg text-green-700 hover:bg-green-100 transition">
              Create Content
            </button>
            <button className="p-4 bg-purple-50 rounded-lg text-purple-700 hover:bg-purple-100 transition">
              View Reports
            </button>
            <button className="p-4 bg-yellow-50 rounded-lg text-yellow-700 hover:bg-yellow-100 transition">
              System Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 