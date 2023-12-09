import { AppBar, Toolbar, Typography } from "@mui/material"
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

const Navbar = () => {
    return (
        <AppBar position="sticky" sx={{ mt: 1, bgcolor: '#0277bd' }} >
            <Toolbar>
                <CatchingPokemonIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                <Typography>
                    Pokedex
                </Typography>
            </Toolbar>
        </AppBar >
    )
}

export default Navbar