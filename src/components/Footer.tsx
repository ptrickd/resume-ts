//React
import React from "react";

//Material UI
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";

//Constants
import { DRAWER_WIDTH } from "../constants/Styling";

const drawerWidth = DRAWER_WIDTH;

const StyledContainer = styled(Container)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  padding: theme.spacing(5),
  flexGrow: 1,
}));

function Footer() {
  return (
    <StyledContainer id="footer">
      <Divider sx={{ marginBottom: 10 }} />
      <Grid container sx={{ justifyContent: "center", alignItems: "center" }}>
        <Grid item xs={12} md={4}>
          {/* <span style={itemStyles} > */}
          <Typography variant="body2" align="center">
            Patrick Dion
          </Typography>
          {/* </span> */}
        </Grid>
        <Grid item xs={12} md={4}>
          {/* <span style={itemStyles} > */}
          <Typography variant="body2" align="center">
            2020 - 2021
          </Typography>
          {/* </span> */}
        </Grid>
        <Grid item xs={12} md={4}>
          {/* <span style={itemStyles} > */}
          <Typography variant="body2" align="center">
            EvolveU - Cohort5
          </Typography>
          {/* </span> */}
        </Grid>
      </Grid>
    </StyledContainer>
  );
}

export default Footer;
