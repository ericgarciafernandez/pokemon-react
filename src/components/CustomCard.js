import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import TypeButton from "./TypeButton";

const CustomCard = ({ image, id, title, types }) => {
    const numId = (id) => {
        return 'Nº ' + id.toString().padStart(4, '0');
    };

    return (
        <Card sx={{ minWidth: '250px' }}>
            <CardMedia image={image || ''} sx={{ minHeight: '200px', bgcolor: '#fff0f0' }} />
            <CardContent>
                <Typography variant="caption" display="block" >
                    {numId(id)}
                </Typography>
                <Typography variant="overline" display="block">
                    {title}
                </Typography>
                <TypeButton types={types} />
            </CardContent>
        </Card>
    );
};

export default CustomCard;
