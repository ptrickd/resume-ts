//React
import React, { useState, useEffect } from "react";
import { navigate } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";

//Components
import ProjectImageDisplay from "../../components/ProjectImageDisplay";

//Data
import projectsData from "../../files/projectsData.json";

//Constants
import { DRAWER_WIDTH } from "../../constants/Styling";

//Material - UI
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Screenshot } from "@mui/icons-material";

const drawerWidth = DRAWER_WIDTH;

interface IParams {
  id: string;
}

interface IProject {
  title: string;
  screenshotsNum: number;
  screenshots: string[];
  shortDescription: string;
  description: string;
  skills: string[];
  haveRepo: boolean;
  haveWebsite: boolean;
  repo: string;
  website: string;
}

function ProjectDetails(params: IParams) {
  const [project, setProject] = useState<null | IProject>(null);
  const id: string = params[`id`];
  const data = useStaticQuery(graphql`
    query ProjectDetailsQuery {
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
    if (data.allFile.nodes[0].childrenJson[0].data && id) {
      setProject(data.allFile.nodes[0].childrenJson[0].data[id]);
    }
    console.log(data.allFile.nodes[0].childrenJson[0].data);
  }, [data]);

  if (!project) return null;

  const {
    title,
    description,
    skills,
    screenshots,
    screenshotsNum,
    repo,
    website,
    haveRepo,
    haveWebsite,
  } = project;

  const displayList = () => {
    return skills.map((skill: string, index: number) => {
      return (
        <Grid item xs={6} md={4} lg={3} key={index}>
          <ListItem dense>
            <ListItemIcon>
              <ArrowRightIcon />
            </ListItemIcon>
            <ListItemText primary={skill} />
          </ListItem>
        </Grid>
      );
    });
  };

  return (
    <Container
      sx={{
        width: { xs: "100%", md: `calc(100% - ${drawerWidth}px)` },
        marginLeft: { xs: 0, md: `${drawerWidth}px` },
        padding: (theme) => theme.spacing(3),
      }}
    >
      <Typography
        align="center"
        variant="h4"
        gutterBottom
        sx={{ marginTop: 20 }}
      >
        {title}
      </Typography>
      <span
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <ProjectImageDisplay
          id={id}
          screenshots={screenshots}
          screenshotsNum={screenshotsNum}
        />

        <Divider />
        <Typography
          variant="body1"
          paragraph
          align="justify"
          sx={{ minHeight: 50, marginTop: 20 }}
        >
          {description}
        </Typography>
        <Divider />
        <div>
          <Typography variant="h6" align="center">
            Some of the technology used!
          </Typography>
          <List>
            <Grid container>{displayList()}</Grid>
          </List>
        </div>
        <Box>
          <List sx={{ width: "100%", display: "flex" }}>
            {
              haveWebsite ? (
                <ListItem sx={{ justifyContent: "center" }}>
                  <Link href={`${website}`}>Website</Link>
                </ListItem>
              ) : null //<span>Not yet available</span>
            }
            {
              haveRepo ? (
                <ListItem sx={{ justifyContent: "center" }}>
                  <Link href={`${repo}`}>Github Repo</Link>
                </ListItem>
              ) : null //<span>Not yet available</span>
            }
          </List>
          <Box display="flex" justifyContent="center">
            <Button
              sx={{ flexGrow: 0 }}
              variant="contained"
              color="primary"
              onClick={() => navigate("/")}
            >
              Go Back
            </Button>
          </Box>
        </Box>
      </span>
    </Container>
  );
}

export default ProjectDetails;
