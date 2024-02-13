import React from "react";

//@ts-ignore
import { Wrapper } from "../styles/Icons.ts";

import { Avatar } from "@mui/material";

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

  return <Wrapper>{WrappedInTooltips()}</Wrapper>;
}

export default Icons;
