import { PngImage } from '../../components/_common/PngImage';
import { ImageContainer, StyledContainer, UnderconstructionBox } from './styles';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';


const NotFound = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid >
                        <ImageContainer>
                            <PngImage src="underconstruction.png" width="70%" height="70%" />
                        </ImageContainer>
                    </Grid>

                    <Grid >
                        <UnderconstructionBox>
                            <p>{"Page Not found!"}</p>
                        </UnderconstructionBox>
                    </Grid>
                </Grid>
            </Box>

        </>
    );
};

export default NotFound