import { ButtonGroup, Button } from "@mui/material"
import * as Constants from '../Constants';

const TypeButton = ({ types }) => {
    return (
        <ButtonGroup variant="outlined" aria-label="outlined button group">
            {types !== undefined ?
                types.map(element =>
                    <Button
                        style={{
                            borderColor: Constants.DEFAULT_COLORS_TYPE[element.type.name],
                            color: Constants.DEFAULT_COLORS_TYPE[element.type.name]
                        }}
                        key={element.type.name}
                    >
                        {element.type.name}
                    </Button>) : ''
            }

        </ButtonGroup>
    )
}

export default TypeButton