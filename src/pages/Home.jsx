import { Link } from 'react-router-dom';
import '../styles/pages/Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
// Importar las imágenes
import hamburguesaImg from '../assets/hamburguesa.jpg';
// import pizzaImg from '../assets/pizza.jpg';
import aplastadoImg from '../assets/aplastado.jpg';
import salchipapaImg from '../assets/salchipapa.jpg';

function Home() {
    const handleWhatsAppClick = () => {
        // Reemplaza el número con el número de WhatsApp de tu negocio
        const phoneNumber = '573001234567'; // Ejemplo: código de país + número
        const message = 'Hola! Quiero hacer un pedido de Qué Carajos';
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    const menuCategories = [
        {
            id: 'hamburguesas',
            name: 'Hamburguesas',
            description: '🔥 Smash burgers con carne jugosa, queso derretido y el toque secreto que las hace irresistibles',
            image: hamburguesaImg,
            link: '/hamburguesas'
        },
        /*
        {
            id: 'pizzas',
            name: 'Pizzas',
            description: '🍕 Masa artesanal, ingredientes premium y esa orilla de queso que te va a volver loco',
            image: pizzaImg,
            link: '/pizzas'
        },
        */
        {
            id: 'aplastados',
            name: 'Aplastados',
            description: '🥪 Crujientes por fuera, explosión de sabor por dentro. ¡Una experiencia que tienes que probar!',
            image: aplastadoImg,
            link: '/aplastados'
        },
        {
            id: 'salchipapas',
            name: 'Salchipapas',
            description: '🍟 Las más cargadas de Cali. Papas crujientes, salsas caseras y ese toque que solo nosotros sabemos darle',
            image: salchipapaImg,
            link: '/salchipapas'
        }
    ];

    return (
        <div className="home-page">
            <div className='cnt-heroH1'>
                <div className="hero-content">
                    <h1>Las Mejores Hamburguesas de la Ciudad</h1>
                    <p>Ingredientes frescos, sabor inolvidable. Entrega rápida a tu puerta.</p>
                    <button className="cta-button" onClick={handleWhatsAppClick}>
                        <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" />
                        Ordena por WhatsApp
                    </button>
                </div>
            </div>

            <div className="menu-categories">
                <h2 className="menu-title">Nuestro Menú</h2>
                <div className="menu-grid">
                    {menuCategories.map((category) => (
                        <Link to={category.link} key={category.id} className="menu-card">
                            <div className="card-image-container">
                                <img 
                                    src={category.image} 
                                    alt={category.name}
                                    className="card-image"
                                />
                            </div>
                            <div className="card-content">
                                <h3 className="card-title">{category.name}</h3>
                                <p className="card-description">{category.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
