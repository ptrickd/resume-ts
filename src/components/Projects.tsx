import React from "react";

import projectsData from "../files/projectsData";
//@ts-ignore
import ProjectCards from "./ProjectCards.tsx";
//@ts-ignore
import { CardsSection } from "../styles/ProjectsStyled.ts";
import { Container, Typography } from "@mui/material";
import { makeStyles, Theme, createStyles } from "@mui/styles";

interface IProps {
  handleClickDetails: (value: number) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      alignSelf: "center",
    },
  })
);

function Projects({ handleClickDetails }: IProps) {
  const classes = useStyles();
  const displayProjects = () => {
    return projectsData.map((project, index) => {
      return (
        <ProjectCards
          key={index}
          id={index}
          title={project.title}
          screenshots={project.screenshots}
          description={project.description}
          skills={project.skills}
          handleClickDetails={handleClickDetails}
        />
      );
    });
  };

  return (
    <Container id="projects" className={classes.root}>
      <Typography variant="h3" align="center">
        My Projects
      </Typography>
      <CardsSection>{displayProjects()}</CardsSection>
    </Container>
  );
}

export default Projects;
