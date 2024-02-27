//React
import React, { Fragment } from "react";

//Gatsby
import { navigate } from "gatsby";

//Material UI
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import CardActionArea from "@mui/material/CardActionArea";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

import { imagesList } from "../constants/ImagesList";

interface IProps {
  id: number;
  title: string;
  screenshots: string[];
  description: string;
  handleClickDetails: (id: number) => void;
  // darkTheme: boolean;
  skills: string[];
}

function ProjectCards({
  id,
  title,
  screenshots,
  description,
  handleClickDetails,
  // darkTheme,
  skills,
}: IProps) {
  // const navigate = useNavigate();

  const limitCharacter = (str: string) => {
    if (str.length > 100) return str.substring(0, 100) + "...";
    return str;
  };

  return (
    <Fragment>
      <Card sx={{ maxWidth: 280, margin: 10, backgroundColor: "#d6cbcb" }}>
        <CardActionArea onClick={() => navigate(`/details/${id}`)}>
          <CardMedia
            sx={{
              height: 140,
              borderBottom: "1px solid black",
            }}
            image={imagesList[screenshots[0]]}
            title="Click to see details"
          />
          <CardHeader
            title={title}
            sx={{
              alignItems: "center",
              fontSize: "2rem",
              backgroundColor: "#bcafaf",
            }}
          />
        </CardActionArea>
        <Divider />
        <CardContent>
          <Typography variant="subtitle1" component="h6">
            {limitCharacter(description)}
          </Typography>

          <List>
            <ListItem dense>
              {" "}
              <Typography variant="subtitle1">{skills[0]}</Typography>
            </ListItem>
            <ListItem dense>
              {" "}
              <Typography variant="subtitle1">{skills[1]}</Typography>
            </ListItem>
            <ListItem dense>
              {" "}
              <Typography variant="subtitle1">{skills[2]}</Typography>
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Fragment>

    // </ProjectBox>
  );
}

export default ProjectCards;
