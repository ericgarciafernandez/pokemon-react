import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useContext, useState } from "react";
import { PokemonContext } from "../context/DataContext";

const Footer = () => {
    const { offset, setOffset } = useContext(PokemonContext);

    const handleSumOffset = () => {
        setOffset(offset + 20);
    }

    const handleResOffset = () => {
        setOffset(offset - 20);
    }

    return (
        <Paper sx={{ position: 'sticky', bottom: 0, width: '100%' }} elevation={3}>
            <BottomNavigation showLabels sx={{ bgcolor: '#ff9800' }}>
                {offset > 0 ?
                    <BottomNavigationAction
                        label="Anterior"
                        icon={<ArrowBackIosNewIcon />}
                        onClick={handleResOffset} />
                    : ''}
                <BottomNavigationAction
                    label="Continuar"
                    icon={<ArrowForwardIosIcon />}
                    onClick={handleSumOffset} />
            </BottomNavigation >
        </Paper >
    )
}

export default Footer