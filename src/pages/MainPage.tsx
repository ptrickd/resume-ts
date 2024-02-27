import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";

import About from "../components/About";
import Contact from "../components/Contact";
import Projects from "./Projects";
import Skills from "../components/Skills";
import Icons from "../components/Icons";

import reactIcon from "../images/icons/react.svg";
import githubIcon from "../images/icons/github_icon.ico";
import postgresqlIcon from "../images/icons/postgresql-icon.png";
import jqueryIcon from "../images/icons/jquery-icon.png";
import pythonIcon from "../images/icons/python-icon-bw.webp";
import flaskIcon from "../images/icons/flask-logo.png";
import htmlIcon from "../images/icons/html5-icon-bw.png";
import cssIcon from "../images/icons/css-icon-bw.png";
import jsIcon from "../images/icons/javascript-icon-bw.png";
import nodeJsIcon from "../images/icons/nodejs-icon-bw.ico";

import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";

import { DRAWER_WIDTH } from "../constants/Styling";

const Icon1 = [
  { text: "ReactJs", icon: reactIcon },
  { text: "Postgres", icon: postgresqlIcon },
  { text: "GitHub", icon: githubIcon },
  { text: "JQuery", icon: jqueryIcon },
  { text: "Python", icon: pythonIcon },
];

const Icon2 = [
  { text: "Flask", icon: flaskIcon },
  { text: "HTML", icon: htmlIcon },
  { text: "CSS", icon: cssIcon },
  { text: "JavaScript", icon: jsIcon },
  { text: "NodeJs", icon: nodeJsIcon },
];

const drawerWidth = DRAWER_WIDTH;

const MainPage = () => {
  const [, setShowModal] = useState<boolean>(false);
  const handleClickDetails = (id: number) => {
    // setShowDetails(true);
    // setDetailsId(id);
    console.log("handle");
  };

  const toggleShowModal = (value: boolean) => {
    console.log("toogle value: ", value);
    setShowModal(value);
  };

  return (
    <Box
      component="span"
      sx={{
        height: "100%",
        padding: 0,
        marginRight: 0,
        marginTop: 0,
        marginBottom: 0,
        display: "block",
        width: { xs: "100%", md: `calc(100% - ${drawerWidth}px)` },
        marginLeft: { xs: 0, md: `${drawerWidth}px` },
      }}
    >
      <About />
      <Icons iconsArr={Icon1} />
      <Divider />
      <Projects handleClickDetails={handleClickDetails} />
      <Icons iconsArr={Icon2} />
      <Divider />
      <Skills />
      <Divider />
      <Contact toggleShowModal={toggleShowModal} />
    </Box>
  );
};

export default MainPage;
