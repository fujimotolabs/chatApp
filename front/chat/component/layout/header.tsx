import { Grid, Typography } from "@mui/material";
import {blue} from '@mui/material/colors';

export default function Header() {
    return(
        <div>
            <Grid container alignItems={"center"} justifyContent={"center"} bgcolor={blue[600]} color={"white"}>
            <Typography variant="h4">藤本研究室 ChatApp</Typography>
            </Grid>
        </div>
    )
}