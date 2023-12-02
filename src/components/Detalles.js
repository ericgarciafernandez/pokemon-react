import { Button, Card, CardMedia, CardContent, CardActionArea, Typography, Stack, Chip } from "@mui/material";

const Detalles = ({ details }) => {
    const types = details.types;
    const name = details.name;
    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    component="img"
                    alt="sprite"
                    image={details.sprites.front_default}
                />
                <CardContent sx={{ bgcolor: '#bbdefb' }}>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>

                    <Stack direction="row" spacing={1}>
                        {types.map((element, index) => (
                            <Chip key={element.type.name} label={element.type.name} />
                        ))}
                    </Stack>
                </CardContent>
            </Card >
        </>
    )
}

export default Detalles
