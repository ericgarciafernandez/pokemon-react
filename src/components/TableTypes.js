import { Box, Typography, Chip } from "@mui/material";
import * as Constants from '../Constants';
import { useState, useEffect } from "react";

const TableTypes = ({ types }) => {
    const [typesPokemon, setTypesPokemon] = useState([]);
    const [superWeaknesses, setSuperWeaknesses] = useState([]);
    const [weaknesses, setWeaknesses] = useState([]);
    const [strengths, setStrengths] = useState([]);
    const [immunity, setImmunity] = useState([]);

    useEffect(() => {
        if (types && Array.isArray(types)) {
            const updatedTypes = types.map(element => element.type.name);
            setTypesPokemon(updatedTypes);
        }
    }, [types]);

    useEffect(() => {
        getWeakStrengthTypes();
    }, [typesPokemon]);

    const calculateModifier = (type1, type2) => {
        const combinationTypes = Constants.DEFAULT_TYPES_COMBINATION;

        const arrayFirstTypeWeak = combinationTypes[type1]?.weaknesses || [];
        const arrayFirstTypeStrength = combinationTypes[type1]?.strengths || [];

        const arraySecondTypeWeak = combinationTypes[type2]?.weaknesses || [];
        const arraySecondTypeStrength = combinationTypes[type2]?.strengths || [];

        const arraySuperWeak = arrayFirstTypeWeak.filter(type => arraySecondTypeWeak.includes(type));

        const arrayAllWeak = arrayFirstTypeWeak.concat(arraySecondTypeWeak);
        const arrayAllStrength = arrayFirstTypeStrength.concat(arraySecondTypeStrength);

        Constants.DEFAULT_TYPES.forEach((element) => {
            if (
                (arrayFirstTypeWeak.includes(element) && arraySecondTypeStrength.includes(element)) ||
                (arrayFirstTypeStrength.includes(element) && arraySecondTypeWeak.includes(element))
            ) {
                const index = arrayAllWeak.indexOf(element);
                arrayAllWeak.splice(index, 1);
            }

            if (
                (!arrayFirstTypeWeak.includes(element) && arraySecondTypeStrength.includes(element)) ||
                (arrayFirstTypeStrength.includes(element) && !arraySecondTypeWeak.includes(element))
            ) {
                const index = arrayAllStrength.indexOf(element);
                arrayAllStrength.splice(index, 1);
            }
        });

        const arraySinDuplicados = arrayAllWeak.flat();
        const filteredArrayWeak = arraySinDuplicados.filter(weakness => ![type1, type2].includes(weakness));

        const arrayStrengthsSinDuplicados = arrayAllStrength.flat();
        const filteredArrayStrengths = arrayStrengthsSinDuplicados.filter(strengths => ![type1, type2].includes(strengths));

        return { arraySuperWeak, arrayWeak: filteredArrayWeak, arrayStrength: filteredArrayStrengths };
    }

    const getWeakStrengthTypes = () => {
        if (typesPokemon.length > 1) {
            const [type1, type2] = typesPokemon;
            const { arraySuperWeak, arrayWeak, arrayStrength } = calculateModifier(type1, type2);
            const arrayImmunity = Constants.DEFAULT_TYPES_COMBINATION[type1].immunity.concat(
                Constants.DEFAULT_TYPES_COMBINATION[type2].immunity
            ).flat();

            setSuperWeaknesses(arraySuperWeak);
            setWeaknesses(arrayWeak);
            setStrengths(arrayStrength);
            setImmunity(arrayImmunity);

        } else {
            const wordPokemon = typesPokemon.join('');
            const typeCombination = Constants.DEFAULT_TYPES_COMBINATION[wordPokemon];
            if (typeCombination) {
                setStrengths(typeCombination.strengths);
                setWeaknesses(typeCombination.weaknesses);
                setImmunity(typeCombination.immunity);
            }
        }
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Typography>TYPE: </Typography>
            {types && Array.isArray(types) &&
                types.map(element => (
                    <Chip
                        key={element.type.name}
                        variant="outlined"
                        label={element.type.name}
                        sx={{ borderColor: Constants.DEFAULT_COLORS_TYPE[element.type.name], color: Constants.DEFAULT_COLORS_TYPE[element.type.name] }}
                    />
                ))}

            {superWeaknesses.length > 0 && (
                <>
                    <Typography>Super Weaknesses:</Typography>
                    <div>
                        {superWeaknesses.map((weakness, index) => (
                            <Chip
                                key={index}
                                variant="outlined"
                                label={weakness}
                                sx={{ borderColor: Constants.DEFAULT_COLORS_TYPE[weakness], color: Constants.DEFAULT_COLORS_TYPE[weakness] }} />
                        ))}
                    </div>
                </>
            )}

            {weaknesses.length > 0 && (
                <>
                    <Typography>Weaknesses:</Typography>
                    <div>
                        {weaknesses.map((weakness, index) => (
                            <Chip
                                key={index}
                                variant="outlined"
                                label={weakness}
                                sx={{ borderColor: Constants.DEFAULT_COLORS_TYPE[weakness], color: Constants.DEFAULT_COLORS_TYPE[weakness] }} />
                        ))}
                    </div>
                </>
            )}

            {strengths.length > 0 && (
                <>
                    <Typography>Strengths:</Typography>
                    <div>
                        {strengths.map((strength, index) => (
                            <Chip
                                key={index}
                                variant="outlined"
                                label={strength}
                                sx={{ borderColor: Constants.DEFAULT_COLORS_TYPE[strength], color: Constants.DEFAULT_COLORS_TYPE[strength] }} />
                        ))}
                    </div>
                </>
            )}

            {immunity.length > 0 && (
                <>
                    <Typography>Immunity:</Typography>
                    <div>
                        {immunity.map((immunity, index) => (
                            <Chip
                                key={index}
                                variant="outlined"
                                label={immunity}
                                sx={{ borderColor: Constants.DEFAULT_COLORS_TYPE[immunity], color: Constants.DEFAULT_COLORS_TYPE[immunity] }} />
                        ))}
                    </div>
                </>
            )}
        </Box>
    );
}

export default TableTypes;
