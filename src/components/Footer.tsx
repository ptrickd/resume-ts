//React
import React from "react";

//Material UI
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";

//Constants
import { DRAWER_WIDTH } from "../constants/Styling";

const drawerWidth = DRAWER_WIDTH;

function Footer() {
  return (
    <Box
      component="div"
      id="footer"
      sx={{
        padding: (theme) => theme.spacing(5),
        flexGrow: 1,
        width: { xs: "100%", md: `calc(100% - ${drawerWidth}px)` },
        marginLeft: { xs: 0, md: `${drawerWidth}px` },
      }}
    >
      <Grid container sx={{ justifyContent: "center", alignItems: "center" }}>
        <Grid item xs={12} md={4}>
          <Typography variant="body2" align="center">
            Patrick Dion
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="body2" align="center">
            2020 - 2021
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="body2" align="center">
            EvolveU - Cohort5
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
