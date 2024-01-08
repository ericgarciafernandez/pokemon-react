import { Link } from "react-router-dom"
import { Box, List, ListItem, ListItemText, IconButton } from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import './Research.css';


const Research = ({ listPokemon }) => {
    return (
        <Box>
            <List sx={{ padding: 2, backgroundColor: '#fff0f0' }}>
                {listPokemon.map(
                    (pokemon) =>
                        <Link key={pokemon.name} to={`/detalles/${pokemon.name}`} className="linkStyle">
                            <ListItem
                                disableGutters
                                secondaryAction={
                                    <IconButton aria-label="info" sx={{ color: '#500000' }} >
                                        <InfoIcon  />
                                    </IconButton>
                                }
                            >
                                <ListItemText primary={pokemon.name} sx={{ color: '#500000' }} />
                            </ListItem>

                        </Link>
                )}
            </List>
        </Box>
    )

}

export default Research