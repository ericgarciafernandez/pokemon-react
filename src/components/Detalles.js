import { Button, Card, CardMedia, CardContent, CardActionArea, Typography, Stack, Chip } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Detalles = () => {
    const { nombrePokemon } = useParams();
    const [specificPokemon, setSpecificPokemon] = useState({}); // Detalle del pokemon

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/pokemons/` + nombrePokemon);
                setSpecificPokemon(response.data);
            } catch (error) {
                console.log(error.message);
            }
        }
        fetchPokemon();
    }, [nombrePokemon]);

    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    component="img"
                    alt="sprite"
                    image={specificPokemon.name ? specificPokemon.sprites.front_default : ''}
                />
                <CardContent sx={{ bgcolor: '#bbdefb' }}>
                    <Typography gutterBottom variant="h5" component="div">
                        {specificPokemon.name}
                    </Typography>

                    <Stack direction="row" spacing={1}>
                        {specificPokemon.name ? specificPokemon.types.map((element, index) => (
                            <Chip key={element.type.name} label={element.type.name} />
                        )) : ''}
                    </Stack>
                </CardContent>
            </Card >
        </>
    )
}

export default Detalles
