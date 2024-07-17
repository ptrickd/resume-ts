import React, { useState } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

interface IImage {
  name: string;
  childImageSharp: any;
}

interface IProps {
  open: boolean;
  handleClose: () => void;
  image: IImage | null;
}

function getModalStyle() {
  const top = 30;
  const left = 30;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const ImageModal = ({ open, handleClose, image }: IProps) => {
  const [modalStyle] = useState(getModalStyle);

  if (!image) return null;
  return (
    <Box component="div">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="image-modal"
        aria-describedby="image-modal"
      >
        <Box
          component="div"
          style={modalStyle}
          sx={{
            position: "absolute",
            // width: "80%",
            // height: "80%",
            backgroundColor: (theme) => theme.palette.background.paper,
            border: "2px solid #000",
            boxShadow: (theme) => theme.shadows[5],
          }}
        >
          <Box
            component="div"
            sx={{
              width: "100%",
              justifyContent: "center",
            }}
            onClick={handleClose}
          >
            <GatsbyImage
              image={image.childImageSharp.gatsbyImageData}
              alt="Showing image in a modal"
            />
            {/* <img src="./" alt="" /> */}
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default ImageModal;
