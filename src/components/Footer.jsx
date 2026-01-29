import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/components/Footer.css'
import LogoFooter from '../assets/logoQC-NoFondo.png'
import { SOCIAL_LINKS, PHONE_NUMBER } from '../config';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className='cnt-logoFooter'>
                    <Link to="/home">
                        <img
                            className="LogoFooter"
                            src={LogoFooter}
                            alt="logoFooter"
                        />
                    </Link>
                </div>
                <div className="footer-section">
                    <h3>Contacto</h3>
                    <p>Dirección: Cra 43a # 13a - 69 El Guabal</p>
                    <p>Teléfono: {PHONE_NUMBER}</p>
                </div>
                <div className="footer-section">
                    <h3>Horario</h3>
                    <p>Domingo, Lunes y Miercoles: 5 PM - 11 PM</p>
                    <p>Martes: Sin servicio</p>
                    <p>Jueves a Sabado: 5 PM - 1 AM</p>
                </div>

                <div className="footer-section social-links">
                    <h3>Síguenos</h3>
                    <div className="social-icons">
                        <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <FaFacebook className="icon" />
                        </a>
                        <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <FaInstagram className="icon" />
                        </a>
                        <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                            <FaWhatsapp className="icon" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Qué Carajos. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;