import { Box, Divider, Typography } from "@mui/material";
import * as Constants from '../Constants';

const TableTypes = ({ types }) => {
    return (
        <Box sx={{ width: '100%' }}>
            <Typography>TIPOS: </Typography>
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


        </Box>
    );
}

export default TableTypes;