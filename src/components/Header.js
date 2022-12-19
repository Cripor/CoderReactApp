import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <Link to="/" className="text-white text-decoration-none">
                <h1>¡Bienvenidos a la tienda!</h1>
                <h4>Periféricos Pro®</h4>
            </Link>
        </div>
    )
}

export default Header