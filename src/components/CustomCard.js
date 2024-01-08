import { Card, CardActionArea, CardContent, CardMedia, Typography, Grid, Button, ButtonGroup } from "@mui/material";
import './CustomCard.css';
import * as Constants from '../Constants';

const CustomCard = ({ image, id, title, types }) => {

    const numId = (id) => {
        return 'Nº ' + id.toString().padStart(4, '0');
    }

    return (
        <Card className="card">
            <CardMedia className="card-media" image={image} sx={{ bgcolor: '#fff0f0' }} />
            <CardContent>
                <Typography variant="caption" display="block">{numId(id)}</Typography>
                <Typography variant="overline" display="block">{title}</Typography>
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