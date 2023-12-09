import { Link, Route, Routes } from 'react-router-dom';
import Listado from '../components/Listado';
import Detalles from '../components/Detalles';
import App from '../App';

const RouteApp = () => {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/listado" element={<Listado />} />
            <Route path="/detalles/:nombrePokemon" element={<Detalles />} />
        </Routes>
    )
}

export default RouteApp