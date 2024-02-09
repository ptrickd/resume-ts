import { useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  CssBaseline,
  Hidden,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
  Box,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import purple from "@material-ui/core/colors/purple";
import { DRAWER_WIDTH } from "../constants/Styling";
// import classes from '*.module.css'
const drawerWidth = DRAWER_WIDTH;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBar: {
      [theme.breakpoints.up("sm")]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    //necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    listIcon: {
      display: "inline",
      margin: 0,
    },
    icon: {
      minWidth: 30,
      margin: 0,
    },
    paper: {
      backgroundColor: purple[500],
    },
  })
);

const TopNavigation = () => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <div>
      <Box className={classes.toolbar} bgcolor="primary.main" />
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
            <ListItem button key={index} component="a" href={`${obj.link}`}>
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
            <ListItem button key={index} component="a" href={`/#${obj.link}`}>
              <ListItemText primary={obj.text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Website</Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer}>
        {/* <Hidden smUp implementation="css"> */}
        <Drawer
          variant="temporary"
          open={drawerOpen}
          onClose={handleDrawerToggle}
          classes={{ paper: classes.drawerPaper }}
        >
          {drawer}
        </Drawer>
        {/* </Hidden> */}
        {/* <Hidden xsDown implementation="css"> */}
        <Drawer
          variant="permanent"
          open
          classes={{ paper: classes.drawerPaper }}
        >
          {drawer}
        </Drawer>
        {/* </Hidden> */}
      </nav>
    </div>
  );
};

export default TopNavigation;
