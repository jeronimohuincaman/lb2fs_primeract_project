// App.js
import Home from './pages/HomeView';
import 'primeflex/primeflex.css'; // Asegúrate de importar PrimeFlex
import './index.css'; // Asegúrate de importar PrimeFlex
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import BalanceView from './pages/BalanceView';
import MovimientosView from './pages/MovimientosView';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/balance" Component={BalanceView} />
          <Route path="/movimientos" Component={MovimientosView} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
