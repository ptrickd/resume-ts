import React from "react";

import projectsData from "../files/projectsData";
//@ts-ignore
import ProjectCards from "./ProjectCards.tsx";
//@ts-ignore
import { CardsSection } from "../styles/ProjectsStyled.ts";
import { Container, Typography } from "@mui/material";

interface IProps {
  handleClickDetails: (value: number) => void;
}

function Projects({ handleClickDetails }: IProps) {
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
    <Container id="projects" sx={{ flexGrow: 1 }}>
      <Typography variant="h3" align="center">
        My Projects
      </Typography>
      <CardsSection>{displayProjects()}</CardsSection>
    </Container>
  );
}

export default Projects;
