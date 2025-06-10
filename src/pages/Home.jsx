import { Link } from 'react-router-dom';
import '../styles/pages/Home.css'

function Home() {
    const handleWhatsAppClick = () => {
        // Reemplaza el número con el número de WhatsApp de tu negocio
        const phoneNumber = '573001234567'; // Ejemplo: código de país + número
        const message = 'Hola! Quiero hacer un pedido de Qué Carajos';
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="home-page">
            <div className='cnt-heroH1'>
                <div className="hero-content">
                    <h1>Las Mejores Hamburguesas de la Ciudad</h1>
                    <p>Ingredientes frescos, sabor inolvidable. Entrega rápida a tu puerta.</p>
                    <button className="cta-button" onClick={handleWhatsAppClick}>
                        <span className="whatsapp-icon">📱</span>
                        Ordena por WhatsApp
                    </button>
                </div>
            </div>
            
            <div className="menu-links">
                <Link to="/home" className="menu-link">home</Link><br></br>
                <Link to="/hamburguesas" className="menu-link">Hamburguesas</Link><br></br>
                <Link to="/pizzas" className="menu-link">Pizzas</Link><br></br>
                <Link to="/aplastados" className="menu-link">Aplastados</Link><br></br>
                <Link to="/salchipapas" className="menu-link">Salchipapas</Link><br></br>
            </div>
        </div>
    );
}

export default Home;