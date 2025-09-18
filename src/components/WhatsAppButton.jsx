import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import '../styles/components/WhatsAppButton.css';

function WhatsAppButton() {
    const phoneNumber = '573169796622'; // Reemplaza con tu número (código de país + número)
    const message = 'Hola! Quiero hacer un pedido de Qué Carajos';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
            aria-label="Chatea por WhatsApp"
        >
            <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" />
        </a>
    );
}

export default WhatsAppButton;
