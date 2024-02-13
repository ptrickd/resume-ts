import { useState } from "react";
import { styled, Theme } from "@mui/material/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  CssBaseline,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
  Box,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import purple from "@mui/material/colors/purple";
import { DRAWER_WIDTH } from "../constants/Styling";

// import classes from '*.module.css'
const drawerWidth = DRAWER_WIDTH;
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));
const StyledNav = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    width: drawerWidth,
    flexShrink: 0,
  },
}));

//necessary for content to be below app bar
// toolbar: theme.mixins.toolbar,

const TopNavigation = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <div>
      {/* <Box className={classes.toolbar} bgcolor="primary.main" /> */}
      <Toolbar>
        <Divider />
        <Box>
          <List>
            {[
              {
                icon: <GitHubIcon />,
                link: "https://github.com/ptrickd",
                text: "Github",
              },
              {
                icon: <EmailIcon />,
                link: "mailto:patrickdion8@gmail.com",
                text: "Email",
              },
              {
                icon: <LinkedInIcon />,
                link: "https://www.linkedin.com/in/patrick-dion-335a50207/",
                text: "Linked In",
              },
            ].map((obj, index) => (
              <ListItem key={index} component="a" href={`${obj.link}`}>
                <ListItemIcon>{obj.icon}</ListItemIcon>
                <ListItemText primary={`${obj.text}`} />
              </ListItem>
            ))}
          </List>
          <Divider />

          <List>
            {[
              { text: "About Me", link: "about-me" },
              { text: "Projects", link: "projects" },
              { text: "Technologies", link: "skills" },
              { text: "Comments", link: "comments" },
            ].map((obj, index) => (
              <ListItem key={index} component="a" href={`/#${obj.link}`}>
                <ListItemText primary={obj.text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Toolbar>
    </div>
  );

  return (
    <Box component="div" sx={{ display: "flex" }}>
      <CssBaseline />
      <StyledAppBar position="fixed">
        <Toolbar>
          <StyledIconButton
            sx={{
              marginRight: (theme: Theme) => theme.spacing(2),
            }}
            color="inherit"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </StyledIconButton>
          <Typography variant="h6">Website</Typography>
        </Toolbar>
      </StyledAppBar>
      <StyledNav component="nav">
        {/* <Hidden smUp> */}
        <Drawer
          variant="temporary"
          open={drawerOpen}
          onClose={handleDrawerToggle}
          sx={{ [`& .MuiDrawer-paper`]: { width: drawerWidth } }}
        >
          {drawer}
        </Drawer>
        {/* </Hidden> */}
        {/* <Hidden xsDown> */}
        <Drawer
          variant="permanent"
          open
          sx={{ [`& .MuiDrawer-paper`]: { width: drawerWidth } }}
        >
          {drawer}
        </Drawer>
        {/* </Hidden> */}
      </StyledNav>
    </Box>
  );
};

export default TopNavigation;
