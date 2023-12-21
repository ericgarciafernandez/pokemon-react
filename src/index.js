import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DataContext from "./context/DataContext"
import App from './App';
import Detalles from './components/Detalles';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/detalles/:nombrePokemon',
    element: <Detalles />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DataContext>
    <RouterProvider router={router} />
  </DataContext>
);
