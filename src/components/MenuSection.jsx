import '../styles/components/MenuSection.css';

function MenuSection({ categoryId }) {
    // Todos los productos agrupados por categoría
    const categories = {
        hamburguesas: [
            {
                nombre: 'De la Casa',
                precio: '$15.000',
                descripcion: 'Nuestra especialidad con pan brioche suave, carne 100% de res jugosa, tocineta crujiente, queso fundido, jamón, vegetales frescos, cebolla caramelizada, ripio y bañada en salsa de ajo y nuestra salsa secreta de la casa. ¡Un clásico que conquista a todos!',
                imagen: 'images/burgerSencilla.png'
            },
            {
                nombre: 'Doble Carne',
                precio: '$20.000',
                descripcion: 'Para los más atrevidos: pan brioche doradito, doble carne 100% de res, tocineta crocante, huevo frito, queso derretido, jamón, vegetales frescos, cebolla caramelizada, ripio y la combinación irresistible de salsa de ajo y salsa de la casa. ¡Una bomba de sabor!',
                imagen: 'images/habueruesaDoble.jpg'
            },
            {
                nombre: '2 x 1',
                precio: '$20.000',
                descripcion: 'La promo que no te puedes perder: ¡dos hamburguesas al precio de una! Cada una con pan brioche suave, carne 100% de res, queso, jamón, vegetales frescos, cebolla caramelizada, ripio y nuestras salsas especiales. Perfectas para compartir o para los más hambrientos.',
                imagen: 'images/burger2x1.jpg',
                badge: 'Promo 2x1'
            },
        ],

        aplastados: [
            {
                nombre: 'Aplastado de Jamon Ahumado',
                precio: '$7.500',
                descripcion: 'Pan prensado, jamón ahumado, queso, vegetales frescos, cebolla agridulce, salsas de la casa y ese toque crujiente irresistible. Pidelo en combo por solo $10.000',
                imagen: 'images/aplastadoAhumado.jpg'
            },
            {
                nombre: 'Aplastado de Pollo',
                precio: '$9.500',
                descripcion: 'Pollo rostizado, queso, vegetales frescos y salsa de ajo, todo prensado a la perfección. Pídelo en combo por solo $12.000',
                imagen: 'images/aplastadoPollo.jpg',
            },
            {
                nombre: 'Promo 3 Aplastados de Jamón Ahumado',
                precio: '$20.000',
                descripcion: 'Aprovecha esta promo especial: 3 aplastados de jamón ahumado con queso derretido, vegetales frescos y salsa de ajo, prensados a la perfección. ¡Ideal para compartir!',
                imagen: 'images/aplastados3x1.jpg',
                badge: 'Promo 3 x $20.000'
            },
        ],

        salchipapas: [
            {
                nombre: 'Salchipapa Personal',
                precio: '$9.000',
                descripcion: 'Papas a la francesa crujientes con salchichas, queso rallado, tocineta y nuestras salsas caseras.',
                imagen: 'images/salchipapaPersonal.jpg'
            },
            {
                nombre: 'Salchipapa Doble',
                precio: '$13.000',
                descripcion: 'Una porción generosa con el doble de papas, salchichas, queso fundido, tocineta y salsas especiales.',
                imagen: 'images/salchipapaDoble.jpg'
            },
            {
                nombre: 'Salchipapa Especial',
                precio: '$16.000',
                descripcion: 'Papas con salchichas, pollo desmechado, queso doble, tocineta, maíz y una mezcla de nuestras mejores salsas.',
                imagen: 'images/salchipapaEspecial.jpg',
                badge: 'La más pedida'
            },
        ]
    };

    const items = categories[categoryId] || [];

    return (
        <div className="menu-section" role="region" aria-label={`Sección de ${categoryId}`}>
            <h2 className="section-title">
                {categoryId.charAt(0).toUpperCase() + categoryId.slice(1)}
            </h2>
            <div className='borderMenu'>
                <ul className="menu-items">
                    {items.map((item, i) => (
                        <li key={i} className="menu-item" tabIndex={0}>
                            {item.imagen && (
                                <div className="item-image-wrapper">
                                    <img
                                        src={item.imagen}
                                        alt={item.nombre}
                                        className="item-image"
                                        loading="lazy"
                                        width="800"
                                        height="450"
                                    />
                                </div>
                            )}

                            <div className="item-content">
                                <div className="item-title">
                                    <span className='nameCard'>{item.nombre}</span>
                                    <span className="item-price">{item.precio}</span>
                                </div>
                                <p className="item-description">{item.descripcion}</p>
                                {item.badge && <span className="item-badge">{item.badge}</span>}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default MenuSection;
