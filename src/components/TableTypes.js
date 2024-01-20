import { Box, Typography } from "@mui/material";
import * as Constants from '../Constants';
import { useState, useEffect } from "react";

const TableTypes = ({ types }) => {
    const [typesPokemon, setTypesPokemon] = useState([]);

    useEffect(() => {
        if (types) {
            const updatedTypes = types.map(element => element.type.name);
            setTypesPokemon(updatedTypes);
        }
    }, [types]);

    const getWeakStrengthTypes = () => {
        const combinationTypes = Constants.DEFAULT_TYPES_COMBINATION;

        if (typesPokemon.length > 1) {
            console.log(typesPokemon);
            Constants.DEFAULT_TYPES.map((element) => {
                if (
                    combinationTypes[typesPokemon[0]].weaknesses.indexOf(element) !== -1 &&
                    combinationTypes[typesPokemon[1]].weaknesses.indexOf(element) !== -1
                ) {
                    console.log('x4:', element);
                }
ls
            })
        } else {
            const wordPokemon = typesPokemon.join('');
            const typeCombination = combinationTypes[wordPokemon];
            if (typeCombination) {
                console.log('Fortalezas:', typeCombination.strengths);
                console.log('Debilidades:', typeCombination.weaknesses);
            }

        }

        console.log(Constants.DEFAULT_TYPES);
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Typography>TYPE: </Typography>
            {types !== undefined ?
                types.map(element =>
                    <Typography
                        style={{
                            borderColor: Constants.DEFAULT_COLORS_TYPE[element.type.name],
                            color: Constants.DEFAULT_COLORS_TYPE[element.type.name]
                        }}
                        key={element.type.name}
                    >
                        {element.type.name.toUpperCase()}
                    </Typography>
                ) : ''
            }
            {typesPokemon ? getWeakStrengthTypes() : ''}
        </Box>
    );
}

export default TableTypes;