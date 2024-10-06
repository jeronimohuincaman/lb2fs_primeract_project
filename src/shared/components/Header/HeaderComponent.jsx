// HeaderComponent.jsx
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primeflex/primeflex.css';
import { Link, useNavigate } from 'react-router-dom';

const HeaderComponent = () => {
    const navigate = useNavigate();

    const items = [
        {
            label: 'Inicio',
            icon: 'pi pi-home',
            template: <Link to="/" className="p-menuitem-link">Inicio</Link>
        },
        {
            label: 'Movimientos',
            icon: 'pi pi-money-bill',
            template: <Link to="/movimientos" className="p-menuitem-link">Movimientos</Link>
        },
        {
            label: 'Balances',
            icon: 'pi pi-chart-line',
            template: <Link to="/balance" className="p-menuitem-link">Balances</Link>
        }
    ];

    const start = <Button icon="pi pi-snowflake" className="p-button-text" />;
    const end = (
        <div className="p-d-flex p-ai-center p-flex-column p-md-flex-row">
            <Button label="Inicio" className="p-button-text p-mr-2 p-mb-2 p-md-mb-0" icon="pi pi-home" onClick={() => navigate('/')} />
        </div>
    );

    return (
        <div className="p-shadow-3">
            <Menubar model={items} start={start} end={end} style={{ backgroundColor: "lightblue" }} />
        </div>
    );
};

export default HeaderComponent;