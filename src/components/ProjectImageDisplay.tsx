//React
import React, { useState, useEffect } from "react";

//Material UI
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

//Components
import ImageModal from "./ImageModal";

import { imagesList } from "../constants/ImagesList";

interface IProps {
  id: string;
  screenshots: string[];
  screenshotsNum: number;
}

const ProjectImageDisplay = ({ id, screenshots, screenshotsNum }: IProps) => {
  console.log(id);
  console.log(screenshots);

  const theme = useTheme();
  const [image, setImage] = useState("");
  const [openModal, setOpenModal] = useState(false);

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

  useEffect(() => {
    console.log(image);
  }, [image]);

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
