import { Card, CardActionArea, CardContent, CardMedia, Typography, Grid, Button, ButtonGroup } from "@mui/material";
import './CustomCard.css';
import * as Constants from '../Constants';

const CustomCard = ({ image, title, types }) => {
    return (
        <Card className="card">
            <CardMedia className="card-media" image={image} sx={{ backgroundColor: 'lightgray' }} />
            <CardContent>
                <Typography className="title">{title}</Typography>
                <ButtonGroup variant="outlined" aria-label="outlined button group">
                    {types.map(element =>
                        <Button
                            style={{
                                borderColor: Constants.DEFAULT_COLORS_TYPE[element.type.name],
                                color: Constants.DEFAULT_COLORS_TYPE[element.type.name]
                            }}
                            key={element.type.name}
                        >
                            {element.type.name}
                        </Button>)}
                </ButtonGroup>

            </CardContent>
        </Card>
    )
}

export default CustomCard