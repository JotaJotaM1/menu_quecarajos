import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hamburguesas from './pages/Hamburguesas';
// import Pizzas from './pages/Pizzas';
import Aplastados from './pages/Aplastados';
import Home from './pages/Home';
import Salchipapas from './pages/Salchipapas';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/hamburguesas" element={<Hamburguesas />} />
        <Route path="/aplastados" element={<Aplastados />} />
        <Route path="/salchipapas" element={<Salchipapas />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
      <WhatsAppButton />
      <Footer />
    </Router>
  );
}

export default App;
