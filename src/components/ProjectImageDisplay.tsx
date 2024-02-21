//React
import { useState } from "react";
import { useParams } from "react-router-dom";

//Material UI
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import projectsData from "../files/projectsData";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

//Components
import ImageModal from "./ImageModal";

const ProjectImageDisplay = () => {
  const { id } = useParams();
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
        {screenshots.map((screenshot) => (
          <ImageListItem
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
                src={screenshot}
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
