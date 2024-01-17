import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Grid, Box, CardActions, Button, Typography, Card, CardActionArea, CardMedia, CardContent, List, ListItem } from "@mui/material";
import LinearProgress from '@mui/material/LinearProgress';
import * as Constants from '../Constants';
import TypeButton from "./TypeButton";
import TableTypes from "./TableTypes";

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

    const getFirstType = () => {
        if (specificPokemon.types !== undefined) {
            const firstType = specificPokemon.types.map((el) => el.type.name);
            return firstType[0]
        }
    }

    return (
        <Card sx={{ maxWidth: 450, margin: 'auto', bgcolor: '#fff0f0' }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="200"
                    image={specificPokemon.name ? specificPokemon.sprites.front_default : ''}
                    alt="green iguana"
                    sx={{ bgcolor: Constants.DEFAULT_BACKGROUND_TYPE[getFirstType()] }}
                />
                <CardContent sx={{ textAlign: 'center' }}>
                    <Typography gutterBottom variant="h5" component="div">
                        {nombrePokemon.toUpperCase()}
                    </Typography>
                    <Typography component="div">
                        <List>
                            {
                                specificPokemon.name ? specificPokemon.stats.map(el =>
                                    <ListItem key={el.stat.name} sx={{ height: '5vh' }}>
                                        <Typography sx={{ width: '50%', fontSize: '12px' }}>{el.stat.name.toUpperCase() + ' ' + el.base_stat}</Typography>
                                        <LinearProgress variant="determinate" value={el.base_stat > 100 ? 100 : el.base_stat} sx={{ width: '100%' }}></LinearProgress>
                                    </ListItem>
                                ) : ''
                            }
                        </List>
                    </Typography>
                    <TableTypes types={specificPokemon.types ? specificPokemon.types : []} />
                </CardContent>
            </CardActionArea>
            <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button size="small" color="primary">
                    <Link to="/">Volver</Link>
                </Button>
            </CardActions>
        </Card>

    )
}

export default Detalles
