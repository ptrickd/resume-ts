import React from "react";

//Material UI
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";

interface IProps {
  iconsArr: { text: string; icon: string }[];
}

function Icons({ iconsArr }: IProps) {
  const WrappedInTooltips = () => {
    return iconsArr.map((iconObj, index) => {
      return (
        <Avatar
          alt="icon"
          src={iconObj.icon}
          sx={{
            width: (theme) => theme.spacing(7),
            height: (theme) => theme.spacing(7),
          }}
          key={index}
        />
      );
    });
  };

  return (
    <Box
      component="div"
      sx={{
        width: "100%",
        m: 1,
        p: 1,
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      {WrappedInTooltips()}
    </Box>
  );
}

export default Icons;
