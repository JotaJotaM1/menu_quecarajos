import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import QRGenerator from './components/QRGenerator';
import Hamburguesas from './pages/Hamburguesas';
import Pizzas from './pages/Pizzas';
import Aplastados from './pages/Aplastados';
import Salchipapas from './pages/Salchipapas';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <QRGenerator />
      <Routes>
        <Route path="/hamburguesas" element={<Hamburguesas />} />
        <Route path="/pizzas" element={<Pizzas />} />
        <Route path="/aplastados" element={<Aplastados />} />
        <Route path="/salchipapas" element={<Salchipapas />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;