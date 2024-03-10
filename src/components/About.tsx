import React from "react";
import { Typography, Button, Paper, Box } from "@mui/material";

//@ts-ignore

function About() {
  // const classes = useStyles();
  return (
    <Box id="about-me">
      <Paper
        sx={{
          background:
            "linear-gradient(90deg, rgba(238,237,231,1) 0%, rgba(134,139,142,1) 35%, rgba(185,183,189,1) 66%, rgba(231,210,204,1) 100%);",
          margin: (theme) => theme.spacing(2),
          padding: (theme) => theme.spacing(2),
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            margin: (theme) => theme.spacing(1),

            marginLeft: (theme) => theme.spacing(2),
          }}
          gutterBottom
        >
          More about me
        </Typography>
        {/* <!-- <h5>Full Stack Developer</h5> --> */}
        <Typography
          variant="body1"
          sx={{
            margin: (theme) => theme.spacing(1),
            marginLeft: (theme) => theme.spacing(2),
          }}
          gutterBottom
        >
          &nbsp; Living in Calgary, I like the mountains, outdoor activities,
          snowboard, hiking or others. Comfortable with JavaScript and Python,
          front and back-end, experimenting with React Native and mobile
          development. Love to learn new languages and fameworks. Available to
          work remote or in an office.
        </Typography>
        {/* <Button
          id="buttons"
          sx={{
            margin: (theme) => theme.spacing(1),
            marginLeft: (theme) => theme.spacing(2),
          }}
          variant="contained"
          color="primary"
          href={resumePdf}
        >
          {" "}
          View Resume &raquo;
        </Button> */}
      </Paper>
    </Box>
  );
}

export default About;

// role = "button"
// data - container="body" data - toggle="popover" data - placement="top"
