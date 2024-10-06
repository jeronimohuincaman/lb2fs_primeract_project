// HeaderComponent.jsx
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import 'primeicons/primeicons.css';  // Para los iconos
import 'primereact/resources/primereact.min.css';  // Estilos base de PrimeReact
import 'primereact/resources/themes/saga-blue/theme.css';  // Tema PrimeReact
import 'primeflex/primeflex.css';  // Utilidades de PrimeFlex
import { Link } from 'react-router-dom';

export const HeaderComponent = () => {

    // Definimos los elementos del menú
    const items = [
        {
            label: 'Inicio',
            icon: 'pi pi-home',
            template: <Link to="/" className="p-menuitem-link">Inicio</Link>
        },
        {
            label: 'Movimientos',
            icon: 'pi pi-info-circle',
            template: <Link to="/movimientos" className="p-menuitem-link">Movmientos</Link>
        },
        {
            label: 'Balances',
            icon: 'pi pi-info-circle',
            template: <Link to="/balance" className="p-menuitem-link">Balances</Link>
        }
    ];

    const start = <Button icon="pi pi-snowflake" className="p-button-text" />;
    const end = (
        <div className="p-d-flex p-ai-center">
            <Button label="Inicio" className="p-button-text p-mr-2" icon="pi pi-home" onClick={() => window.location = '/'} />
            <Button label="Sobre mi" className="p-button-text p-mr-2" icon="pi pi-info-circle" onClick={() => window.location = '/about'} />
        </div>
    );

    return (
        <div className="p-shadow-3">
            <Menubar model={items} start={start} end={end} style={{ backgroundColor: "lightblue" }} />
        </div>
    );
};

export default HeaderComponent;
