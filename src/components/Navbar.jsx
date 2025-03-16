import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
export function Navbarpoke() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
            <Link to="/" className="nav-link">
                    <img src={logo} alt="Logo" width="30" height="30" className="d-inline-block align-text-top" />
                    <h3 className="d-none d-sm-inline-block text-center mx-3">Pokemon Observatorium</h3>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Pokemons" className="nav-link">Pokemons</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
