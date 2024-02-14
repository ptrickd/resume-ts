import { useState } from "react";
import { styled } from "@mui/material/styles";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

interface IProps {
  open: boolean;
  handleClose: () => void;
  image: string;
}
const StyledImg = styled("img")(() => ({
  width: "100%",
  height: "100%",
  backgroundColor: "yellow",
}));
function getModalStyle() {
  // const top = -50;
  // const left = 0;
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
            width: "80%",
            height: "80%",
            backgroundColor: (theme) => theme.palette.background.paper,
            border: "2px solid #000",
            boxShadow: (theme) => theme.shadows[5],
          }}
        >
          {/* */}
          <Box
            component="div"
            sx={{
              width: "100%",
              height: "100%",
              backgroundColor: "yellow",
            }}
            onClick={handleClose}
          >
            <StyledImg
              sx={{
                width: "100%",
                height: "100%",
                backgroundColor: "yellow",
              }}
              alt="Showing in a modal"
              src={image}
            />
          </Box>
          {/* <Button onClick={handleClose}>Dismiss</Button> */}
        </Box>
      </Modal>
    </Box>
  );
};

export default ImageModal;
