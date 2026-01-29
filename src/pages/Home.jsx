import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { PHONE_NUMBER, WHATSAPP_MESSAGE } from '../config';
import hamburguesaImg from '/images/burgerSencilla.png';
// import pizzaImg from '../assets/pizza.jpg';
import aplastadoImg from '/images/aplastados3x1.jpg';
import salchipapaImg from '/images/salchipapaPersonal.jpg';
import miniBurgerImg from '/images/miniBurger.jpg';
import '../styles/pages/Home.css'

function Home() {
    const handleWhatsAppClick = () => {
        const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
        window.open(whatsappUrl, '_blank');
    };

    const menuCategories = [
        {
            id: 'hamburguesas',
            name: 'Hamburguesas',
            description: 'Smash burgers con carne jugosa, queso derretido y el toque secreto que las hace irresistibles',
            image: hamburguesaImg,
            link: '/hamburguesas'
        },
        /*
            {
            id: 'pizzas',
            name: 'Pizzas',
            description: 'Masa artesanal, ingredientes premium y esa orilla de queso que te va a volver loco',
            image: pizzaImg,
            link: '/pizzas'
            },  
        */
        {
            id: 'aplastados',
            name: 'Aplastados',
            description: 'Crujientes por fuera, explosión de sabor por dentro. ¡Una experiencia que tienes que probar!',
            image: aplastadoImg,
            link: '/aplastados'
        },
        {
            id: 'salchipapas',
            name: 'Salchipapas',
            description: 'Las más cargadas de Cali. Papas crujientes, salsas caseras y ese toque que solo nosotros sabemos darle',
            image: salchipapaImg,
            link: '/salchipapas'
        }
    ];

    // NUEVA SECCIÓN: Productos para eventos
    const eventProducts = [
        {
            id: 'mini-hamburguesas',
            name: 'Mini Hamburguesas',
            description: 'Cajitas de 6/12 unidades. Pan brioche, carne 100% res y queso. Perfectas para cumpleaños. Preguntanos o escribenos al whatsapp para mayor informacion !',
            image: miniBurgerImg,
            link: '/eventos/mini-hamburguesas'
        }
    ];

    return (
        <main className="home-page">
            <div className='cnt-heroH1'>
                <div className="hero-content">
                    <h1>Las Mejores Hamburguesas de la Ciudad</h1>
                    <p>Ingredientes frescos, sabor inolvidable. Entrega rápida a tu puerta.</p>
                    <button className="cta-button" onClick={handleWhatsAppClick}>
                        <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" />
                        Ordena por WhatsApp
                    </button>
                </div>

                <img
                    src="images/heroBurger.jpg"
                    alt="Hamburguesa"
                    className="hero-image"
                />
            </div>

            {/* Sección Menú principal */}
            <div className="menu-categories">
                <h2 className="menu-title">Nuestro Menú</h2>
                <div className="menu-grid">
                    {menuCategories.map((category) => (
                        <Link to={category.link} key={category.id} className="menu-card">
                            <div className="card-image-container">
                                <img src={category.image} alt={category.name} className="card-image" />
                            </div>
                            <div className="card-content">
                                <h3 className="card-title">{category.name}</h3>
                                <p className="card-description">{category.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* NUEVA SECCIÓN: Eventos & Fiestas Infantiles */}
            <div className="menu-categories" id="eventos">
                <h2 className="menu-title">Eventos & Fiestas Infantiles</h2>
                <p className='menu-description'>
                    Llevamos el sabor en formato mini ideales para cumpleaños, reuniones y celebraciones.
                </p>

                <div className="menu-grid">
                    {eventProducts.map((item) => (
                        <Link to={item.link} key={item.id} className="menu-card menu-card2">
                            <div className="card-image-container">
                                <img src={item.image} alt={item.name} className="card-image" />
                            </div>
                            <div className="card-content">
                                <h3 className="card-title">{item.name}</h3>
                                <p className="card-description">{item.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}

export default Home;
