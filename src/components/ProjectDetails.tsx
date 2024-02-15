//React
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

//Components
import ImageModal from "./ImageModal";

//Data
import projectsData from "../files/projectsData";

//Constants
import { DRAWER_WIDTH } from "../constants/Styling";

//Material - UI
import useMediaQuery from "@mui/material/useMediaQuery";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

import { useTheme } from "@mui/material/styles";

import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const drawerWidth = DRAWER_WIDTH;

function ProjectDetails() {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [image, setImage] = useState("");
  const { id } = useParams();
  const theme = useTheme();
  const widthIsSmall = useMediaQuery(theme.breakpoints.up("sm"));
  const widthIsMedium = useMediaQuery(theme.breakpoints.up("md"));
  const widthIsLarge = useMediaQuery(theme.breakpoints.up("lg"));

  const {
    title,
    screenshots,
    screenshotsNum,
    description,
    skills,
    repo,
    website,
    haveRepo,
    haveWebsite,
  } = projectsData[Number(id)];

  useEffect(() => {
    console.log("widthIsSmall", widthIsSmall);
    console.log("widthIsMedium", widthIsMedium);
    console.log("widthIsLarge", widthIsLarge);
  }, [widthIsSmall, widthIsMedium, widthIsLarge]);

  const getGridImageCols = () => {
    if (screenshotsNum > 1) {
      if (widthIsLarge) {
        return 3;
      } else if (widthIsMedium) {
        return 2;
      } else if (widthIsSmall) {
        return 1;
      }
      return 1;
    }
    return 1;
  };

  const displayList = () => {
    return skills.map((skill, index) => {
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

  const handleOpenModal = (index: number) => {
    setImage(screenshots[index]);
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <Container
      sx={{
        width: { xs: "100%", md: `calc(100% - ${drawerWidth}px)` },
        marginLeft: { xs: 0, md: drawerWidth },
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
        <ImageList
          sx={{ width: "80%", height: "100%" }}
          gap={1}
          cols={getGridImageCols()}
        >
          <ImageListItem
            sx={{
              maxWidth: "100%",
              width: "100%",
              height: "100%",
              background: "#d0d5f2",
              border: "1px solid black",
              cursor: "pointer",
              overflow: "hidden",
            }}
          >
            <span onClick={() => handleOpenModal(0)} style={{ padding: 5 }}>
              <Box
                component="img"
                sx={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                  cursor: "pointer",
                  marginTop: 10,
                  marginBottom: 10,
                  border: "3px solid #d0d5f2",
                }}
                src={screenshots[0]}
                alt="screenshot"
              />
            </span>
          </ImageListItem>

          {screenshots[1] && (
            <ImageListItem
              sx={{
                maxWidth: "100%",
                width: "100%",
                height: "100%",
                background: "#d0d5f2",
                border: "1px solid black",
                cursor: "pointer",
                overflow: "hidden",
              }}
            >
              <span onClick={() => handleOpenModal(1)} style={{ padding: 5 }}>
                <Box
                  component="img"
                  sx={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    cursor: "pointer",
                    marginTop: 10,
                    marginBottom: 10,
                    border: "3px solid #d0d5f2",
                  }}
                  src={screenshots[1]}
                  alt="screenshot"
                />
              </span>
            </ImageListItem>
          )}

          {screenshots[1] && (
            <ImageListItem
              sx={{
                maxWidth: "100%",
                width: "100%",
                height: "100%",
                background: "#d0d5f2",
                border: "1px solid black",
                cursor: "pointer",
                overflow: "hidden",
              }}
            >
              <span onClick={() => handleOpenModal(2)} style={{ padding: 5 }}>
                <Box
                  component="img"
                  sx={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    cursor: "pointer",
                    marginTop: 10,
                    marginBottom: 10,
                    border: "3px solid #d0d5f2",
                  }}
                  src={screenshots[2]}
                  alt="screenshot"
                />
              </span>
            </ImageListItem>
          )}
        </ImageList>
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

        <ImageModal
          open={openModal}
          handleClose={handleCloseModal}
          image={image}
        />
      </span>
    </Container>
  );
}

export default ProjectDetails;
