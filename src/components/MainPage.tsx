import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
//@ts-ignore
import About from "../components/About.tsx";
//@ts-ignore
import Contact from "../components/Contact.tsx";
//@ts-ignore
import Projects from "../components/Projects.tsx";
//@ts-ignore
import Skills from "../components/Skills.tsx";
//@ts-ignore
import Icons from "../components/Icons.tsx";

const reactIcon = () => (
  <StaticImage alt="react icon" src="../images/icons/react" />
);
const postgresqlIcon = () => (
  <StaticImage
    alt="posctgresql icon"
    src="../images/icons/postgresql-icon.png"
  />
);
const githubIcon = () => (
  <StaticImage alt="github icon" src="../images/icons/github_icon.ico" />
);
const jqueryIcon = () => (
  <StaticImage alt="jquery icon" src="../images/icons/jquery-icon.png" />
);
const pythonIcon = () => (
  <StaticImage alt="python icon" src="../images/icons/python-icon-bw.webp" />
);

const flaskIcon = () => (
  <StaticImage alt="flask icon" src="../images/icons/flask-logo.png" />
);
const htmlIcon = () => (
  <StaticImage alt="html icon" src="../images/icons/html5-icon-bw.png" />
);
const cssIcon = () => (
  <StaticImage alt="css icon" src="../images/icons/css-icon-bw.png" />
);
const jsIcon = () => (
  <StaticImage
    alt="javascript icon"
    src="../images/icons/javascript-icon-bw.png"
  />
);
const nodeJsIcon = () => (
  <StaticImage alt="node js icon" src="../images/icons/nodejs-icon-bw.ico" />
);

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
      {/* <Icons iconsArr={Icon1} /> */}
      <Divider />
      {/* <Projects handleClickDetails={handleClickDetails} /> */}
      {/* <Icons iconsArr={Icon2} /> */}
      <Divider />
      <Skills />
      <Divider />
      {/* <Contact toggleShowModal={toggleShowModal} /> */}
    </Box>
  );
};

export default MainPage;
