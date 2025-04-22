function MenuSection({ title, items }) {
    return (
        <div className="menu-section">
            <h2>{title}</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        <h3>{item.nombre} - {item.precio}</h3>
                        <p>{item.descripcion}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MenuSection;