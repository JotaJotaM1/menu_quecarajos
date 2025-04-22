import MenuSection from '../components/MenuSection';

function Aplastados() {
    const items = [
        {
            nombre: 'Aplastado Clásico',
            precio: '$12.000',
            descripcion: 'Carne, queso, tocineta y vegetales'
        },
        {
            nombre: 'Aplastado Especial',
            precio: '$14.000',
            descripcion: 'Doble carne, huevo, chorizo y salsas'
        },
        {
            nombre: 'Aplastado Pollo',
            precio: '$13.000',
            descripcion: 'Pollo a la parrilla con guacamole'
        },
        // Agrega más items
    ];

    return (
        <MenuSection
            title="Aplastados"
            items={items}
            note="Todos incluyen papas a la francesa"
        />
    );
}

export default Aplastados;