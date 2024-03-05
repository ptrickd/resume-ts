import React, { useState, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";

import projectsData from "../files/projectsData.json";

import ProjectCards from "./ProjectCards";

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
  const [projectsLists, setProjectsList] = useState([]);
  const data = useStaticQuery(graphql`
    query HomePageQuery {
      allFile(filter: { name: { eq: "projectsData" } }) {
        nodes {
          name
          childrenJson {
            data {
              title
              screenshotsNum
              screenshots
              shortDescription
              description
              skills
              haveRepo
              haveWebsite
              repo
              website
            }
          }
        }
      }
    }
  `);

  useEffect(() => {
    if (data.allFile.nodes[0].childrenJson[0].data) {
      setProjectsList(data.allFile.nodes[0].childrenJson[0].data);
    }
  }, [data]);

  const displayProjects = () => {
    return projectsLists.map((project: IProjects, index: number) => {
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
