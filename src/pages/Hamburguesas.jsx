import MenuSection from '../components/MenuSection';

function Hamburguesas() {
    const items = [
        { nombre: 'Clásica', precio: '$10.000', descripcion: 'Carne, queso, lechuga, tomate' },
        { nombre: 'Especial', precio: '$12.000', descripcion: 'Doble carne, tocino, queso' },
        // Agrega más items
    ];

    return (
        <MenuSection
            title="Hamburguesas"
            items={items}
        />
    );
}

export default Hamburguesas;