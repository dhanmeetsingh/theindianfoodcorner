import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import OrderOnlinePage from './pages/OrderOnlinePage';
import ReservationsPage from './pages/ReservationsPage';


export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-bg-dark text-text-light">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/reservations" element={<ReservationsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/order" element={<OrderOnlinePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
