// Footer.jsx
import { Button } from 'primereact/button';
import 'primeflex/primeflex.css';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer p-p-4">
            <div className="p-grid p-align-center">
                {/* Sección de enlaces */}
                <div className="p-col-12 p-md-4">
                    <h4>Enlaces</h4>
                    <ul className="footer-links">
                        <li><a href="/">Inicio</a></li>
                        <li><a href="/about">Sobre Nosotros</a></li>
                        <li><a href="/contact">Contacto</a></li>
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

export default Footer;
