import { Link } from "react-router-dom"
import { Box, List, ListItem, ListItemText, IconButton } from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';

const Research = ({ listPokemon }) => {
    return (
        <Box>
            <List sx={{ padding: 2, backgroundColor: '#fff0f0' }}>
                {listPokemon.map(
                    (pokemon) =>
                        <Link key={pokemon.name} to={`/detalles/${pokemon.name}`} style={{ textDecoration: 'none' }}>
                            <ListItem
                                disableGutters
                                secondaryAction={
                                    <IconButton aria-label="info" sx={{ color: '#500000' }} >
                                        <InfoIcon />
                                    </IconButton>
                                }
                            >
                                <ListItemText primary={pokemon.name} sx={{ color: '#500000', textTransform: 'capitalize', curso: 'pointer' }} />
                            </ListItem>
                        </Link>
                )}
            </List>
        </Box >
    )

}

export default Research