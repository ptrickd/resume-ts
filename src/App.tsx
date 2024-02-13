import React from "react";
import "@fontsource/roboto";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import { Toolbar, Box } from "@mui/material";

//@ts-ignore
import MainPage from "./components/MainPage.tsx";
//@ts-ignore
import TopNavigation from "./components/TopNavigation.tsx";

//@ts-ignore
import Footer from "./components/Footer.tsx";
//@ts-ignore
import ProjectDetails from "./components/ProjectDetails.tsx";
// import OnSubmitModal from './components/OnSubmitModal';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

let theme = createTheme();
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
      <TopNavigation />

      {/* <div className={classes.toolbar} /> */}
      <Toolbar>
        <Box component="div" sx={{ minHeight: "86vh" }}>
          <RouterProvider router={router} />
        </Box>
        <div>
          <Footer />
        </div>
      </Toolbar>
    </ThemeProvider>
  );
}

export default App;
