import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import QRGenerator from './components/QRGenerator';
import Hamburguesas from './pages/Hamburguesas';
import Pizzas from './pages/Pizzas';
import Aplastados from './pages/Aplastados';
import Salchipapas from './pages/Salchipapas';

function App() {
  return (
    <Router>
      <Header />
      <QRGenerator />
      <nav>
        <Link to="/hamburguesas">Hamburguesas</Link>
        <Link to="/pizzas">Pizzas</Link>
        <Link to="/aplastados">Aplastados</Link>
        <Link to="/salchipapas">Salchipapas</Link>
      </nav>
      <Routes>
        <Route path="/hamburguesas" element={<Hamburguesas />} />
        <Route path="/pizzas" element={<Pizzas />} />
        <Route path="/aplastados" element={<Aplastados />} />
        <Route path="/salchipapas" element={<Salchipapas />} />
      </Routes>
    </Router>
  );
}

export default App;
