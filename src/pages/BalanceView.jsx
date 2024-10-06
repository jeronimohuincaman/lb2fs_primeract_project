import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import FooterComponent from '../shared/components/Footer/FooterComponent';
import HeaderComponent from '../shared/components/Header/HeaderComponent';

const BalancesView = () => {
    const balancesData = [
        { idbalance: 1, fecha_balance: '2024-09-30', nick_usuario: 'john_doe', ubicacion_fondos: 'Banco Galicia', monto_ajustado: 10000 },
        { idbalance: 2, fecha_balance: '2024-09-30', nick_usuario: 'john_doe', ubicacion_fondos: 'Efectivo', monto_ajustado: 1500 },
        { idbalance: 3, fecha_balance: '2024-10-01', nick_usuario: 'jane_smith', ubicacion_fondos: 'Mercado Pago', monto_ajustado: 5000 }
    ];

    return (
        <>
            <HeaderComponent />
            <div className="p-p-4">
                <h1>Balances Mensuales</h1>
                <p>Aquí puedes ver los balances realizados por los usuarios y en qué ubicación tienen los fondos reajustados.</p>

                <DataTable value={balancesData} responsiveLayout="scroll" className="p-datatable-striped p-mt-4">
                    <Column field="idbalance" header="ID Balance" sortable></Column>
                    <Column field="fecha_balance" header="Fecha del Balance" sortable></Column>
                    <Column field="nick_usuario" header="Usuario" sortable></Column>
                    <Column field="ubicacion_fondos" header="Ubicación de Fondos" sortable></Column>
                    <Column field="monto_ajustado" header="Monto Ajustado" sortable body={(rowData) => `$${rowData.monto_ajustado.toLocaleString()}`}></Column>
                </DataTable>
            </div>
            <FooterComponent />
        </>
    );
};

export default BalancesView;
