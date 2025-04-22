import MenuSection from '../components/MenuSection';

function Salchipapas() {
    const items = [
        {
            nombre: 'Salchipapas Clásica',
            precio: '$10.000',
            descripcion: 'Papas, salchichas y salsas al gusto'
        },
        {
            nombre: 'Salchipapas Mixta',
            precio: '$13.000',
            descripcion: 'Papas, salchichas, chorizo y carne molida'
        },
        {
            nombre: 'Salchipapas Especial',
            precio: '$15.000',
            descripcion: 'Incluye todos los ingredientes + huevo y queso'
        },
        // Agrega más items
    ];

    return (
        <div className="salchipapas-page">
            <MenuSection
                title="Salchipapas"
                items={items}
            />
            <div className="salsas-nota">
                <p>Salsas disponibles: Mayonesa, Ketchup, Mostaza, Ajo, Rosada</p>
            </div>
        </div>
    );
}

export default Salchipapas;