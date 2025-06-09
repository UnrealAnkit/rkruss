import React, { useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import {
  FiHome,
  FiUsers,
  FiFileText,
  FiSettings,
  FiMenu,
  FiX,
  FiLogOut,
  FiGlobe,
} from 'react-icons/fi';

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ to, icon, label, isActive }) => (
  <Link
    to={to}
    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${
      isActive
        ? 'bg-blue-100 text-blue-700'
        : 'text-gray-600 hover:bg-gray-100'
    }`}
  >
    <span className="text-xl">{icon}</span>
    <span>{label}</span>
  </Link>
);

const AdminLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { to: '/admin', icon: <FiHome />, label: 'Dashboard' },
    { to: '/admin/users', icon: <FiUsers />, label: 'Users' },
    { to: '/admin/countries', icon: <FiGlobe />, label: 'Countries' },
    { to: '/admin/content', icon: <FiFileText />, label: 'Content' },
    { to: '/admin/settings', icon: <FiSettings />, label: 'Settings' },
  ];

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-white shadow-lg transition-all duration-300 z-20 ${
          isSidebarOpen ? 'w-64' : 'w-0'
        }`}
      >
        <div className="p-4">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-xl font-bold">Admin Panel</h1>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="text-gray-500 hover:text-gray-700 lg:hidden"
            >
              <FiX size={24} />
            </button>
          </div>

          <nav className="space-y-2">
            {navItems.map((item) => (
              <NavItem
                key={item.to}
                {...item}
                isActive={location.pathname === item.to}
              />
            ))}
          </nav>

          <div className="absolute bottom-0 left-0 right-0 p-4">
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 text-red-600 hover:text-red-700 transition w-full px-4 py-3"
            >
              <FiLogOut />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main
        className={`transition-all duration-300 ${
          isSidebarOpen ? 'ml-64' : 'ml-0'
        }`}
      >
        <header className="bg-white shadow-sm">
          <div className="flex items-center h-16 px-6">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className={`text-gray-500 hover:text-gray-700 ${
                isSidebarOpen ? 'hidden' : 'block'
              }`}
            >
              <FiMenu size={24} />
            </button>
          </div>
        </header>

        <div className="container mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout; 