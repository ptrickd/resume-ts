import React from "react";

//@ts-ignore
import { Wrapper } from "../styles/Icons.ts";

import { makeStyles } from "@mui/material/styles";
import { Avatar } from "@mui/material";

interface IProps {
  iconsArr: { text: string; icon: string }[];
}

const useStyles = makeStyles((theme) => ({
  icon: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

function Icons({ iconsArr }: IProps) {
  const classes = useStyles();

  const WrappedInTooltips = () => {
    return iconsArr.map((iconObj, index) => {
      return (
        <Avatar
          alt="icon"
          src={iconObj.icon}
          classes={classes.icon}
          key={index}
        />
      );
    });
  };

  return <Wrapper>{WrappedInTooltips()}</Wrapper>;
}

export default Icons;
