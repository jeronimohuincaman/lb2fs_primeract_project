// Home.jsx
import { Button } from 'primereact/button';
import { DataTable/* , Column  */ } from 'primereact/datatable';
import Header from '../shared/components/Header/Header';

const data = [
    { id: 1, name: 'John', email: 'john@example.com' },
    { id: 2, name: 'Jane', email: 'jane@example.com' },
];

const Home = () => {
    return (
        <>
            <Header />
            <div className="p-p-3">
                <h2>Users</h2>
                <DataTable value={data} responsiveLayout="scroll">
                </DataTable>
                <Button label="Add User" icon="pi pi-plus" className="p-mt-3" />
            </div>
        </>
    );
};

export default Home;
