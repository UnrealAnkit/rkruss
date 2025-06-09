import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';

// Layouts
import MainLayout from './layouts/MainLayout';
import AdminLayout from './layouts/AdminLayout';

// Pages
import HomePage from './pages/HomePage';
import ImmigrationPage from './pages/ImmigrationPage';
import StudyAbroadPage from './pages/StudyAbroadPage';
import VisaSolutionsPage from './pages/VisaSolutionsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import WhatsAppButton from './components/WhatsAppButton';

// Admin Pages
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import Users from './pages/admin/Users';
import Settings from './pages/admin/Settings';
import Countries from './pages/admin/Countries';

// Auth
import ProtectedRoute from './components/auth/ProtectedRoute';
import UserLogin from './pages/auth/UserLogin';
import UserSignUp from './pages/auth/UserSignUp';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="immigration" element={<ImmigrationPage />} />
            <Route path="study-abroad" element={<StudyAbroadPage />} />
            <Route path="visa-solutions" element={<VisaSolutionsPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
          
          {/* Admin Routes */}
          <Route path="/admin/login" element={<Login />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="users" element={<Users />} />
            <Route path="countries" element={<Countries />} />
            <Route path="settings" element={<Settings />} />
          </Route>

          <Route path="/login" element={<UserLogin />} />
          <Route path="/signup" element={<UserSignUp />} />
        </Routes>
        <WhatsAppButton />
      </AuthProvider>
    </Router>
  );
}

export default App;