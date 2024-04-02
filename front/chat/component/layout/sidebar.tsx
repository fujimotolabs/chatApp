import { Button, Grid, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import HomeWorkIcon from "@mui/icons-material/HomeWork";

export default function Sidebar() {
  return (
    <Grid
      container
      justifyContent={"center"}
      bgcolor={grey[300]}
      color={"white"}
      width={"15%"}
      height={"100vh"}
    >
      <Grid
        item
        justifyContent={"center"}
        alignItems={"center"}
        justifyItems={"center"}
      >
        <Button color={"primary"}>
          <Typography fontSize={"h3"}>
            <HomeWorkIcon />
            全体チャット
          </Typography>
        </Button>
      </Grid>
    </Grid>
  );
}
