//React
import React, { useState, useEffect } from "react";

//Components
import ProjectCards from "./ProjectCards";

//Queries
import useProjectsDetailsQuery from "../queries/useProjectsDetailsQuery";

//Material UI
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface IProjects {
  title: string;
  screenshots: string[];
  description: string;
  skills: string[];
}

//data props is comming from the pageQuery above
function Projects() {
  const [projectsLists] = useState(useProjectsDetailsQuery());

  const displayProjects = () => {
    return projectsLists.map((project: IProjects, index: number) => {
      return (
        <ProjectCards
          key={index}
          id={index}
          title={project.title}
          screenshots={project.screenshots}
          description={project.description}
          skills={project.skills}
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
