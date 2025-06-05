import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layouts
import MainLayout from './layouts/MainLayout';

// Pages
import HomePage from './pages/HomePage';
import ImmigrationPage from './pages/ImmigrationPage';
import StudyAbroadPage from './pages/StudyAbroadPage';
import VisaSolutionsPage from './pages/VisaSolutionsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <Router>
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
      </Routes>
      <WhatsAppButton />
    </Router>
  );
}

export default App;