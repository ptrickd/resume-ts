import React from "react";

import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
//@ts-ignore
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const languages = ["HTML", "CSS", "JavaScript", "TypeScript", "Python", "SQL"];
const frameworks = [
  "ReactJS",
  "NextJS",
  "NodeJs",
  "Flask",
  "MongoDB",
  "PostgreSQL",
];

function Skills() {
  return (
    <Box component="div" id="skills" sx={{ flexGrow: 1 }}>
      <Typography
        variant="h3"
        sx={{ marginTop: 2, alignSelf: "center" }}
        align="center"
      >
        What I know
      </Typography>
      <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            width: "35%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <Typography
            variant="h5"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            Language
          </Typography>
          <List>
            {languages.map((text, index) => (
              <ListItem
                key={index}
                sx={{
                  display: "flex",
                  flexGrow: 0,
                  justifyContent: "flex-start",
                }}
              >
                <ListItemIcon
                  sx={{
                    display: "flex",
                    flexGrow: 0,
                    justifyContent: "flex-end",
                    marginLeft: 0,
                  }}
                >
                  <ArrowRightIcon />
                </ListItemIcon>

                <ListItemText
                  primary={text}
                  sx={{
                    flexGrow: 1,
                    justifyContent: "flex-start",
                    alignSelf: "flex-start",
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Grid>
        {/* <Grid item xs={12} sm={12} md={4} /> */}
        <Grid item xs={12} sm={6}>
          <Typography
            variant="h5"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            Framework
          </Typography>
          <List
            sx={{
              width: "25%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
            }}
          >
            {frameworks.map((text, index) => (
              <ListItem
                key={index}
                sx={{
                  display: "flex",
                  flexGrow: 0,
                  justifyContent: "flex-start",
                }}
              >
                <ListItemIcon
                  sx={{
                    display: "flex",
                    flexGrow: 0,
                    justifyContent: "flex-end",
                    marginLeft: 0,
                  }}
                >
                  <ArrowRightIcon />
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={{
                    flexGrow: 1,
                    justifyContent: "center",
                    alignSelf: "flex-start",
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Skills;
