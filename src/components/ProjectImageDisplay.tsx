//React
import React, { useState } from "react";

//Material UI
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import projectsData from "../files/projectsData.js";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

//Components
import ImageModal from "./ImageModal";

//Import all images
import catalog1 from "../images/screenshot/catalog1.jpg";
import catalog3 from "../images/screenshot/catalog3.jpg";
import catalog4 from "../images/screenshot/catalog4.jpg";
import flask1 from "../images/screenshot/flask1.jpg";
import homy1 from "../images/screenshot/homy1.jpg";
import homy3 from "../images/screenshot/homy3.jpg";
import homy4 from "../images/screenshot/homy4.jpg";
import inventory1 from "../images/screenshot/inventory1.jpg";
import placeholder from "../images/screenshot/placeholder.jpeg";
import reactNative1 from "../images/screenshot/react-native1.jpg";
import resume2 from "../images/screenshot/resume2.jpg";
import resume3 from "../images/screenshot/resume3.jpg";
import resume4 from "../images/screenshot/resume4.jpg";
import scheduler1 from "../images/screenshot/scheduler1.jpg";
import scheduler2 from "../images/screenshot/scheduler2.jpg";

const imagesList: { [index: string]: any } = {
  catalog1: catalog1,
  catalog3: catalog3,
  catalog4: catalog4,
  flask1: flask1,
  homy1: homy1,
  homy3: homy3,
  homy4: homy4,
  inventory1: inventory1,
  placeholder: placeholder,
  reactNative1: reactNative1,
  resume2: resume2,
  resume3: resume3,
  resume4: resume4,
  scheduler1: scheduler1,
  scheduler2: scheduler2,
};

interface IProps {
  id: string;
}

const ProjectImageDisplay = ({ id }: IProps) => {
  console.log(id);
  console.log(projectsData);
  const theme = useTheme();
  const [image, setImage] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const { screenshots, screenshotsNum } = projectsData[Number(id)];
  const widthIsSmall = useMediaQuery(theme.breakpoints.up("sm"));
  const widthIsMedium = useMediaQuery(theme.breakpoints.up("md"));
  const widthIsLarge = useMediaQuery(theme.breakpoints.up("lg"));

  const handleOpenModal = (path: string) => {
    setImage(path);
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

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
  return (
    <Box component="div">
      <ImageList
        variant="woven"
        sx={{ width: "80%", height: "100%" }}
        gap={1}
        cols={getGridImageCols()}
      >
        {screenshots.map((screenshot: string) => (
          <ImageListItem
            key={`${screenshot}`}
            sx={{
              maxWidth: "100%",
              width: "100%",
              height: "100%",
              cursor: "pointer",
              overflow: "hidden",
            }}
          >
            <span
              onClick={() => handleOpenModal(screenshot)}
              style={{ padding: 5 }}
            >
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
                src={imagesList[screenshot]}
                alt="screenshot"
              />
            </span>
          </ImageListItem>
        ))}
      </ImageList>
      <ImageModal
        open={openModal}
        handleClose={handleCloseModal}
        image={image}
      />
    </Box>
  );
};

export default ProjectImageDisplay;
