import React from "react";
import "@fontsource/roboto";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import { Toolbar, Box, Container } from "@mui/material";
import { DRAWER_WIDTH } from "./constants/Styling";
//@ts-ignore
import MainPage from "./components/MainPage.tsx";
//@ts-ignore
import TopNavigation from "./components/TopNavigation.tsx";

//@ts-ignore
import Footer from "./components/Footer.tsx";
//@ts-ignore
import ProjectDetails from "./components/ProjectDetails.tsx";
// import OnSubmitModal from './components/OnSubmitModal';
// import { DRAWER_WIDTH } from "./constants/Styling";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// const drawerWidth = DRAWER_WIDTH;
let theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      // sm: Number(`calc(100% - ${drawerWidth}px)`),
      // sm: Number(drawerWidth),
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});
theme = responsiveFontSizes(theme);

///////////////////////////////////////////////
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/details/:id",
    element: <ProjectDetails />,
  },
]);

///////////////////////////////////////////////

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="lg"
        disableGutters
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <TopNavigation />

        {/* <div className={classes.toolbar} /> */}
        <Toolbar sx={{ display: "flex", flexDirection: "column" }}>
          <Box component="div" sx={{ minHeight: "86vh" }}>
            <RouterProvider router={router} />
          </Box>
          <div>
            <Footer />
          </div>
        </Toolbar>
      </Container>
    </ThemeProvider>
  );
}

export default App;
