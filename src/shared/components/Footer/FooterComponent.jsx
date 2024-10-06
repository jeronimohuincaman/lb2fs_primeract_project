// Footer.jsx
import { Button } from 'primereact/button';
import 'primeflex/primeflex.css';
import './FooterComponent.css';
import { Link } from 'react-router-dom';

const FooterComponent = () => {
    return (
        <footer className="footer p-p-4 flex">
            <div className="p-grid p-align-center">
                {/* Sección de enlaces */}
                <div className="p-col-12 p-md-4">
                    <h4>Enlaces</h4>
                    <ul className="footer-links">
                        <li><Link to="/" className="p-menuitem-link">Inicio</Link></li>
                        <li><Link to="/movimientos" className="p-menuitem-link">Movmientos</Link></li>
                        <li><Link to="/balance" className="p-menuitem-link">Balances</Link></li>
                    </ul>
                </div>

                {/* Sección de redes sociales */}
                <div className="p-col-12 p-md-4 p-text-center">
                    <h4>Síguenos</h4>
                    <Button icon="pi pi-facebook" className="p-button-rounded p-button-secondary p-mr-2" />
                    <Button icon="pi pi-twitter" className="p-button-rounded p-button-secondary p-mr-2" />
                    <Button icon="pi pi-instagram" className="p-button-rounded p-button-secondary p-mr-2" />
                </div>

                {/* Sección de derechos de autor */}
                <div className="p-col-12 p-md-4 p-text-center p-text-md-right">
                    <p>&copy; {new Date().getFullYear()} Mi Proyecto. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default FooterComponent;
