import React from 'react';
import '@fontsource/roboto'
import { makeStyles, Theme, createStyles, ThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import { Divider } from '@material-ui/core'

//@ts-ignore
import MainPage from './components/MainPage.tsx';
//@ts-ignore
import TopNavigation from './components/TopNavigation.tsx';

//@ts-ignore
import Footer from './components/Footer.tsx';
//@ts-ignore
import ProjectDetails from './components/ProjectDetails.tsx';
// import OnSubmitModal from './components/OnSubmitModal';


import { DRAWER_WIDTH } from './constants/Styling'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const drawerWidth = DRAWER_WIDTH

const useStyles = makeStyles((theme: Theme) => createStyles({
  main: {
    minHeight: '86vh'
  },
  // footer: {
  //   [theme.breakpoints.up('sm')]: {
  //     width: `calc(100% - ${drawerWidth}px)`,
  //     marginLeft: drawerWidth
  //   }
  // },
  //necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
}))

let theme = createMuiTheme()
theme = responsiveFontSizes(theme)

function App() {

  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Route>
          <TopNavigation />

          <div className={classes.toolbar} />
          <div className={classes.main}>
            <Switch>

              <Route path='/details/:id'>
                <ProjectDetails />
              </Route>
              <Route path='/'><MainPage /></Route>
            </Switch>


          </div>
          <div>

            <Footer />
          </div>

        </Route>
      </Router>
    </ThemeProvider>


  );
}

export default App;


