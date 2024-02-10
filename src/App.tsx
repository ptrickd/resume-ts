import React from "react";
import "@fontsource/roboto";
import {
  makeStyles,
  Theme,
  createStyles,
  ThemeProvider,
  createMuiTheme,
  responsiveFontSizes,
} from "@material-ui/core/styles";

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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      minHeight: "86vh",
    },
    toolbar: theme.mixins.toolbar,
  })
);

let theme = createMuiTheme();
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
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <TopNavigation />

      <div className={classes.toolbar} />
      <div className={classes.main}>
        <RouterProvider router={router} />
      </div>
      <div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
