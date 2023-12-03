import axios from "axios";
import { Table, TableBody, TableCell, TableRow, TableContainer, TableHead, TablePagination, Button, Container } from "@mui/material";
import '@fontsource/roboto/500.css';
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Detalles from "./Detalles";
import Loading from "../screens/Loading";
import Error from "../screens/Error";


const Listado = () => {
    const [pokedex, setPokedex] = useState([]); // Listado de pokemons
    const [isLoading, setIsLoading] = useState(false); // Tiempos de espera
    const [error, setError] = useState(""); // Muestra errores
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPokemons = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/pokemons`);
                const pokemonsWithId = response.data.map((pokemon, index) => ({ ...pokemon, id: uuidv4() }));
                setPokedex(pokemonsWithId);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPokemons();
    }, []);

    const handleDetails = (namePokemon) => {
        navigate(`/detalles/${namePokemon}`);
    }

    return (
        <>
            <Container maxWidth="sm">
                <TableContainer sx={{ maxHeight: 400 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Nombre</TableCell>
                                <TableCell>URL</TableCell>
                                <TableCell>Detalles</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody >
                            {!isLoading ? pokedex.map((pokemon, index) => (
                                <TableRow key={pokemon.id}>
                                    <TableCell>{pokemon.name}</TableCell>
                                    <TableCell>{pokemon.url}</TableCell>
                                    <TableCell>
                                        <Button onClick={handleDetails.bind(null, pokemon.name)} variant="contained">Entrar</Button>
                                    </TableCell>
                                </TableRow>
                            )) : <Loading />}
                            {error ? <Error errorMsg={error} /> : ''}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </>
    )
}

export default Listado