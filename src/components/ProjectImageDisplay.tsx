//React
import React, { useState } from "react";

//Material UI
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

//Material UI
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

//Components
import ImageModal from "./ImageModal";

//Constants
import { imagesList } from "../constants/ImagesList";

interface IImage {
  name: string;
  childImageSharp: any;
}

interface IProps {
  id: string;
  screenshotsNames: string[];
  images: IImage[];
}

const ProjectImageDisplay = ({ id, screenshotsNames, images }: IProps) => {
  const theme = useTheme();
  const [image, setImage] = useState<null | IImage>(null);
  const [openModal, setOpenModal] = useState(false);

  const widthIsSmall = useMediaQuery(theme.breakpoints.up("sm"));
  const widthIsMedium = useMediaQuery(theme.breakpoints.up("md"));
  const widthIsLarge = useMediaQuery(theme.breakpoints.up("lg"));

  const handleOpenModal = (name: string) => {
    images.forEach((image) => {
      if (image.name === name) setImage(image);
    });

    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const getGridImageCols = () => {
    if (screenshotsNames.length > 1) {
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
        {screenshotsNames.map((screenshotName: string) => (
          <ImageListItem
            key={`${screenshotName}`}
            sx={{
              maxWidth: "100%",
              width: "100%",
              height: "100%",
              cursor: "pointer",
              overflow: "hidden",
            }}
          >
            <span
              onClick={() => handleOpenModal(screenshotName)}
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
                src={imagesList[screenshotName]}
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
