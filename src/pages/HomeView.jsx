// Home.jsx
import HeaderComponent from '../shared/components/Header/HeaderComponent';
import FooterComponent from '../shared/components/Footer/FooterComponent';

const HomeView = () => {
    return (
        <>
            <HeaderComponent />
            <div className="p-p-4 p-grid">
                <div className="p-col-12 p-md-8 p-lg-6">
                    <h1>Mi Proyecto</h1>
                    <p>Bienvenido a este nuevo proyecto donde realizaremos un sistema de registro de movimientos financieros.</p>
                </div>
            </div>
            <FooterComponent />
        </>
    );
};

export default HomeView;
