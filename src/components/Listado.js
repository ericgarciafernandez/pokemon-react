import { useState } from "react";
import axios from "axios";
import Detalles from "./Detalles";
import { Table, TableBody, TableCell, TableRow, TableContainer, TableHead, TablePagination, Button, Container } from "@mui/material";
import '@fontsource/roboto/500.css';

const Listado = ({ pokedex }) => {
    const [specificPokemon, setSpecificPokemon] = useState({});

    const handleDetails = (namePokemon) => {
        const fetchPokemon = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/pokemons/` + namePokemon);
                setSpecificPokemon(response.data);

            } catch (error) {
                console.log(error.message);
            }
        }
        fetchPokemon();
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
                            {pokedex.map((pokemon, index) => (
                                <TableRow key={pokemon.id}>
                                    <TableCell>{pokemon.name}</TableCell>
                                    <TableCell>{pokemon.url}</TableCell>
                                    <TableCell>
                                        <Button onClick={handleDetails.bind(null, pokemon.name)} variant="contained">Entrar</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                {Object.keys(specificPokemon).length > 0 ? <Detalles details={specificPokemon} /> : null}
            </Container>
        </>
    )
}

export default Listado