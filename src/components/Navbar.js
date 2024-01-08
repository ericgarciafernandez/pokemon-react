import { AppBar, Toolbar, Typography, Input } from "@mui/material"
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import SearchIcon from '@mui/icons-material/Search';
import axios from "axios";
import { useState } from "react"
import Research from "./Research";

const Navbar = () => {
    const [searchPokemon, setSearchPokemon] = useState('');
    const [listPokemon, setListPokemon] = useState([]);

    const searchData = (value) => {
        const fetchPokedex = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/pokedex`);
                const allPokemons = response.data;
                const filterPokemons = allPokemons.filter(pokemon => pokemon.name.includes(value));
                setListPokemon(filterPokemons);
            } catch (error) {
                console.log(error.message);
            }
        }
        fetchPokedex()
    }

    const handleChange = (event) => {
        event.preventDefault();
        const value = event.target.value;
        setSearchPokemon(value);
        searchData(value);
    }


    return (
        <>
            <AppBar position="sticky" sx={{ bgcolor: '#ff2323' }} >
                <Toolbar>
                    <CatchingPokemonIcon sx={{ display: { md: 'flex' }, mr: 1 }} />
                    <Typography sx={{ flexGrow: 1 }}>
                        Pokedex
                    </Typography>
                    <SearchIcon />
                    <Input value={searchPokemon} onChange={handleChange} />
                </Toolbar>
                {searchPokemon.length > 2 ? <Research listPokemon={listPokemon} /> : ''}

            </AppBar >
        </>
    )
}

export default Navbar