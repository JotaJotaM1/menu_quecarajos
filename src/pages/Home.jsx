import { Link } from 'react-router-dom';
import '../styles/pages/Home.css'

function Home() {
    return (
        <div className="home-page">
            <h1>Bienvenido a Qué Carajos</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est totam molestias atque numquam. Aliquam dolores libero nulla molestias repellendus veritatis sequi quis eos, fuga ut ipsam corporis tenetur. Incidunt, maiores?</p>
            <div className="menu-links">
                <Link to="/hamburguesas" className="menu-link">Hamburguesas</Link><br></br>
                <Link to="/pizzas" className="menu-link">Pizzas</Link><br></br>
                <Link to="/aplastados" className="menu-link">Aplastados</Link><br></br>
                <Link to="/salchipapas" className="menu-link">Salchipapas</Link><br></br>
            </div>
        </div>
    );
}

export default Home;