import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Header.css';
import LogoQueCarajos from '../assets/logoQC-NoFondo.png';

function Header() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            if (window.innerWidth >= 768) {
                setMenuOpen(false);
            }
        };

        const handleScroll = () => {
            setScrolled(window.scrollY > 8);
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);

        // Ejecutar una vez al montar para inicializar estado
        handleScroll();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`header ${scrolled ? 'is-scrolled' : ''}`}>
            <div className="header-container">
                <div className="logo-container">
                    <Link to="/home" onClick={() => setMenuOpen(false)}>
                        <img
                            src={LogoQueCarajos}
                            alt="Logo Qué Carajos"
                            className="logo"
                        />
                    </Link>

                    {isMobile && (
                        <button
                            className={`menu-toggle ${menuOpen ? 'menu-open' : ''}`}
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Toggle menu"
                        >
                            <span className="hamburger-line"></span>
                            <span className="hamburger-line"></span>
                            <span className="hamburger-line"></span>
                        </button>
                    )}
                </div>

                <nav
                    className={`nav ${isMobile ? 'nav-mobile' : ''} ${menuOpen ? 'nav-open' : ''}`}
                >
                    <Link to="/home" className="nav-link" onClick={() => setMenuOpen(false)}>Inicio</Link>
                    <Link to="/hamburguesas" className="nav-link" onClick={() => setMenuOpen(false)}>Hamburguesas</Link>
                    {/* <Link to="/pizzas" className="nav-link" onClick={() => setMenuOpen(false)}>Pizzas</Link> */}
                    <Link to="/aplastados" className="nav-link" onClick={() => setMenuOpen(false)}>Aplastados</Link>
                    <Link to="/salchipapas" className="nav-link" onClick={() => setMenuOpen(false)}>Salchipapas</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;
