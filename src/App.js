import { useState, useEffect } from "react";
import axios from "axios";
import { Link, Route, Routes } from 'react-router-dom';
import Listado from './components/Listado';
import Detalles from './components/Detalles';
import Prueba from "./components/Prueba";

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Listado />} />
        <Route path="/detalles/:nombrePokemon" element={<Detalles />} />
        <Route path="/prueba" element={<Prueba />}></Route>
      </Routes>
    </>
  )
}

export default App