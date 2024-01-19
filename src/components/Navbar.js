import { AppBar, Toolbar, Typography, FormControl, Select, Input, InputLabel, MenuItem } from "@mui/material"
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import SearchIcon from '@mui/icons-material/Search';
import axios from "axios";
import { useState, useEffect, useContext } from "react"
import Research from "./Research";
import { PokemonContext } from "../context/DataContext";

const Navbar = () => {
    const { pokemonWithType, setPokemonWithType, pokemonType, setPokemonType } = useContext(PokemonContext);
    const [searchPokemon, setSearchPokemon] = useState('');
    const [listPokemon, setListPokemon] = useState([]);
    const [typeList, setTypeList] = useState([]);

    useEffect(() => {
        const fetchTypes = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/types`);
                const allTypes = response.data;
                setTypeList(allTypes);
            } catch (error) {
                console.log(error.message);
            }
        }
        fetchTypes();
    }, []);

    useEffect(() => {
        searchType(pokemonType);
    }, [pokemonType]);

    const handleType = (event) => {
        event.preventDefault();
        const value = event.target.value;
        setPokemonType(value);
    }

    const searchType = (pokemonType) => {
        const fetchPokemonsType = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/types/` + pokemonType);
                const type = response.data;
                const namePokemons = type.map((el) => el.pokemon.name);
                setPokemonWithType(namePokemons);
                console.log(namePokemons);
            } catch (error) {
                console.log(error.message);
            }
        }
        fetchPokemonsType();
    }

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
        fetchPokedex();
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
                    <FormControl sx={{ width: '25%' }}>
                        <InputLabel id="demo-simple-select-label">Type</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={pokemonType}
                            label=""
                            onChange={handleType}
                        >
                            {typeList.map((el) => <MenuItem key={el.name} value={el.name}>{el.name}</MenuItem>)}
                        </Select>
                    </FormControl>
                    <SearchIcon />
                    <Input value={searchPokemon} onChange={handleChange} />
                </Toolbar>
                {searchPokemon.length > 2 ? <Research listPokemon={listPokemon} /> : ''}

            </AppBar >
        </>
    )
}

export default Navbar