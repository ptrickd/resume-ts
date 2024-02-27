import React from "react";

import projectsData from "../files/projectsData.js";

import ProjectCards from "../components/ProjectCards";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface IProps {
  handleClickDetails: (value: number) => void;
}

interface IProjects {
  title: string;
  screenshots: string[];
  description: string;
  skills: string[];
}

function Projects({ handleClickDetails }: IProps) {
  const displayProjects = () => {
    return projectsData.map((project: IProjects, index: number) => {
      console.log(project);
      console.log(index);
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
    <Box component="div" id="projects" sx={{ marginTop: 2, flexGrow: 1 }}>
      <Typography variant="h3" align="center">
        My Projects
      </Typography>
      <Box
        component="div"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {displayProjects()}
      </Box>
    </Box>
  );
}

export default Projects;
