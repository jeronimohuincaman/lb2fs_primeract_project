// MovimientosView.jsx
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primeflex/primeflex.css';
import HeaderComponent from '../shared/components/Header/HeaderComponent';
import FooterComponent from '../shared/components/Footer/FooterComponent';

const MovimientosView = () => {
    const data = [
        {
            idmovimiento: 1,
            descripcion: 'Compra supermercado',
            fecha_hora: '2024-10-10',
            idtipo: 0,  // Ingreso
            descripcion_tipo: 'Ingreso',
            idcategoria: 1,  // Mercado
            descripcion_categoria: 'Mercado',
            idusuario: 1,
            nick_usuario: 'john_doe',
            idmediopago: 1,  // Mercado Pago
            descripcion_medio_pago: 'Mercado Pago',
            monto: 2000,
            idpago: 1
        },
        {
            idmovimiento: 2,
            descripcion: 'Pago transporte',
            fecha_hora: '2024-10-10',
            idtipo: 1,  // Egreso
            descripcion_tipo: 'Egreso',
            idcategoria: 2,  // Transporte
            descripcion_categoria: 'Transporte',
            idusuario: 2,
            nick_usuario: 'jane_smith',
            idmediopago: 2,  // Débito Galicia
            descripcion_medio_pago: 'Débito Galicia',
            monto: 500,
            idpago: 2
        },
        {
            idmovimiento: 3,
            descripcion: 'Pago servicios del hogar',
            fecha_hora: '2024-10-11',
            idtipo: 1,  // Egreso
            descripcion_tipo: 'Egreso',
            idcategoria: 3,  // Hogar
            descripcion_categoria: 'Hogar',
            idusuario: 1,
            nick_usuario: 'john_doe',
            idmediopago: 3,  // Efectivo
            descripcion_medio_pago: 'Efectivo',
            monto: 3000,
            idpago: 3
        }
    ];


    return (
        <>
            <HeaderComponent />
            <div className="p-p-4">
                <h1>Movimientos</h1>
                <p>Bienvenido a los Movimientos.</p>

                <DataTable value={data} className="p-datatable-striped p-mt-4">
                    <Column field="idmovimiento" header="ID Movimiento" sortable></Column>
                    <Column field="descripcion" header="Descripción" sortable></Column>
                    <Column field="fecha_hora" header="Fecha y Hora" sortable></Column>
                    <Column field="descripcion_tipo" header="Tipo" sortable></Column>
                    <Column field="descripcion_categoria" header="Categoría" sortable></Column>
                    <Column field="nick_usuario" header="Usuario" sortable></Column>
                    <Column field="descripcion_medio_pago" header="Medio de Pago" sortable></Column>
                    <Column field="monto" header="Monto" sortable body={(rowData) => `$${rowData.monto.toLocaleString()}`}></Column>
                    <Column field="idpago" header="ID Pago" sortable></Column>
                </DataTable>
            </div>
            <FooterComponent />
        </>
    );
};

export default MovimientosView;
