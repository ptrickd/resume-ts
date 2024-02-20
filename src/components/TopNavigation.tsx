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

const drawerWidth = DRAWER_WIDTH;

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
      <Toolbar variant="dense">
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
    <Box
      component="div"
      sx={{
        margin: 0,
        padding: 0,
        display: "flex",
        flexGrow: 1,
      }}
    >
      <CssBaseline />
      <AppBar
        position="static"
        sx={{
          width: { xs: "100%", md: `calc(100% - ${drawerWidth})` },
          marginLeft: { xs: 0, md: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            sx={{
              display: { xs: "block", md: "none" },
              marginRight: (theme: Theme) => theme.spacing(2),
            }}
            color="inherit"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Website</Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{
          width: { xs: "none", md: drawerWidth },
          // flexShrink: 0,
        }}
      >
        <Drawer
          variant="temporary"
          open={drawerOpen}
          onClose={handleDrawerToggle}
          sx={{
            [`& .MuiDrawer-paper`]: { width: drawerWidth },
            display: { xs: "block", md: "none" },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          open
          sx={{
            [`& .MuiDrawer-paper`]: { width: drawerWidth },
            display: { xs: "none", md: "block" },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default TopNavigation;
