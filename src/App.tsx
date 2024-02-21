import React from "react";
import "@fontsource/roboto";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import { Toolbar, Box, Container, CssBaseline } from "@mui/material";
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
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container
          disableGutters
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <Toolbar
            disableGutters
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <TopNavigation />

            <Box component="div" sx={{ minHeight: "86vh" }}>
              <RouterProvider router={router} />
            </Box>

            <Footer />
          </Toolbar>
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
