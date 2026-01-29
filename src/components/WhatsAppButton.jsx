import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import '../styles/components/WhatsAppButton.css';
import { PHONE_NUMBER, WHATSAPP_MESSAGE } from '../config';

function WhatsAppButton() {
    const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

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
