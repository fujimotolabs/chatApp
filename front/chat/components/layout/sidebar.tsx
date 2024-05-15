import { Button, Grid, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Link  from 'next/link';

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
        <Link href="/userlist">
          <Button color={"primary"}>
            <Typography fontSize={"h3"}>
              <AccountBoxIcon />
              メンバー一覧
            </Typography>
          </Button>
        </Link>
        
        <Link href="/chatSpace">
          <Button color={"primary"}>
            <Typography fontSize={"h3"}>
              <HomeWorkIcon />
              全体チャット
            </Typography>
          </Button>
        </Link>
        <Link href="/login">
          <Button color={"primary"}>
            <Typography fontSize={"h3"}>
              <HomeWorkIcon />
              ログイン
            </Typography>
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
}
