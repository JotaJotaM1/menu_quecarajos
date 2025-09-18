import '../styles/components/MenuSection.css';

function MenuSection({ categoryId }) {
    // Todos los productos agrupados por categoría
    const categories = {
        hamburguesas: [
            {
                nombre: 'De la Casa',
                precio: '$15.000',
                descripcion: 'Pan brioche, carne de res, tocineta, queso, jamón, lechuga, tomate, cebolla caramelizada, ripio, salsa de ajo y salsa de la casa.',
                imagen: 'images/burgerSencilla.png',
                badge: 'Pídela con papas a la francesa por solo $18.000'
            },
            {
                nombre: 'Doble Carne',
                precio: '$20.000',
                descripcion: 'Pan brioche, doble carne de res, tocineta, huevo frito, queso, jamón, lechuga, tomate, cebolla caramelizada, ripio, salsa de ajo y salsa de la casa.',
                imagen: 'images/habueruesaDoble.jpg',
                badge: 'Pídela con papas a la francesa por solo $23.000'
            },
            {
                nombre: '2 x 1',
                precio: '$20.000',
                descripcion: 'Pan brioche, carne de res, queso, jamón, lechuga, tomate, cebolla caramelizada, ripio y salsas de la casa.',
                imagen: 'images/burger2x1.jpg',
                badge: 'Pídelas con papas a la francesa por solo $26.000',
            },
        ],

        aplastados: [
            {
                nombre: 'Jamón Ahumado',
                precio: '$7.500',
                descripcion: 'Pan prensado, jamón ahumado, queso, lechuga, tomate, cebolla agridulce, ripio y salsa de ajo.',
                imagen: 'images/aplastadoAhumado.jpg',
                badge: 'Pídelo con papas a la francesa por solo $10.000',
            },
            {
                nombre: 'Pollo',
                precio: '$10.000',
                descripcion: 'Pan prensado, pollo, queso, lechuga, tomate, cebolla agridulce, ripio y salsa de ajo.',
                imagen: 'images/aplastadoPollo.jpg',
                badge: 'Pídelo con papas a la francesa por solo $13.000',
            },
            {
                nombre: 'Promo 3 x 2',
                precio: '$20.000',
                descripcion: 'Pan prensado, jamón ahumado, queso, lechuga, tomate, cebolla agridulce, ripio y salsa de ajo.',
                imagen: 'images/aplastados3x1.jpg',
                badge: 'Pídelos con papas a la francesa por solo $29.000'
            },
        ],

        salchipapas: [
            {
                nombre: 'Sencilla',
                precio: '$8.000',
                descripcion: 'Papas a la francesa, salchichas, queso, salsas de ajo y de la casa',
                imagen: 'images/salchipapaSencilla.jpg',
            },
            {
                nombre: 'Personal',
                precio: '$15.000',
                descripcion: 'Papas a la francesa, salchichas, queso, proteina a tu eleccion, salsas de ajo y de la casa',
                imagen: 'images/salchipapaPersonal.jpg',
                badge: 'Proteinas: Carne de hamburguesa, pollo o tocineta'
            },
            {
                nombre: 'Doble',
                precio: '$25.000',
                descripcion: 'Papas a la francesa, salchichas, queso, proteina a tu eleccion, salsas de ajo y de la casa',
                imagen: 'images/salchipapaDoble.jpg',
                badge: 'Proteinas: Carne de hamburguesa, pollo o tocineta'
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
