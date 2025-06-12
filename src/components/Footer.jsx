import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import '../styles/components/Footer.css'
import LogoFooter from '../assets/logoQC-NoFondo.png'

function Footer() {
    return (
        <footer className="footer">
            <div className='cnt-logoFooter'>
                <img className='LogoFooter' src={LogoFooter} alt='logoFooter'></img>
            </div>
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Contacto</h3>
                    <p>Dirección: [Tu dirección]</p>
                    <p>Teléfono: [Tu teléfono]</p>
                    <p>Email: [Tu email]</p>
                </div>

                <div className="footer-section">
                    <h3>Horario</h3>
                    <p>Lunes a Viernes: 10am - 10pm</p>
                    <p>Sábado y Domingo: 11am - 11pm</p>
                </div>

                <div className="footer-section social-links">
                    <h3>Síguenos</h3>
                    <div className="social-icons">
                        <a href="[enlace-facebook]" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <FaFacebook className="icon" />
                        </a>
                        <a href="[enlace-instagram]" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <FaInstagram className="icon" />
                        </a>
                        <a href="https://wa.me/[tu-numero]" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
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