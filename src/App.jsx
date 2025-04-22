import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Hamburguesas from './pages/Hamburguesas';
import Pizzas from './pages/Pizzas';
import Aplastados from './pages/Aplastados';
import Home from './pages/Home';
import Salchipapas from './pages/Salchipapas';
import Footer from './components/Footer';

function App() {
  return (
    <Router basename="/menu_quecarajos">
      <Header />
      <Routes>
        {/* Redirección desde la raíz del proyecto */}
        <Route path="/" element={<Navigate to="/home" replace />} />
        
        {/* Página principal */}
        <Route path="/home" element={<Home />} />
        
        {/* Otras páginas */}
        <Route path="/hamburguesas" element={<Hamburguesas />} />
        <Route path="/pizzas" element={<Pizzas />} />
        <Route path="/aplastados" element={<Aplastados />} />
        <Route path="/salchipapas" element={<Salchipapas />} />
        
        {/* Redirección para rutas no encontradas */}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;