import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { createContext, useContext, useState } from "react";

const Footer = () => {
    const [numOffset, setNumOffset] = useState(0);
    return (
        <Paper sx={{ position: 'sticky', bottom: 0, width: '100%', mb: 1 }} elevation={3}>
            <BottomNavigation showLabels sx={{ bgcolor: '#ff9800' }}>
                <BottomNavigationAction label="Anterior" icon={<ArrowBackIosNewIcon />} />
                <BottomNavigationAction label="Continuar" icon={<ArrowForwardIosIcon />} />
            </BottomNavigation >

        </Paper >
    )
}

export default Footer