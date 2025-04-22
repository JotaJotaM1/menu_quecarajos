import MenuSection from '../components/MenuSection';

function Pizzas() {
    const items = [
        {
            nombre: 'Pizza Clásica',
            precio: '$15.000',
            descripcion: 'Salsa de tomate, mozzarella y pepperoni'
        },
        {
            nombre: 'Pizza Hawaiana',
            precio: '$17.000',
            descripcion: 'Jamón, piña y queso mozzarella'
        },
        {
            nombre: 'Pizza Carnes',
            precio: '$18.000',
            descripcion: 'Pepperoni, jamón, chorizo y carne molida'
        },
        // Agrega más items según tu menú
    ];

    return (
        <MenuSection
            title="Pizzas"
            items={items}
            image="/pizza-banner.jpg" // Opcional: añade una imagen de fondo
        />
    );
}

export default Pizzas;