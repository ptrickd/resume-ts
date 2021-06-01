import React, { useState } from 'react';
import '@fontsource/roboto'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'


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
  footer: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth
    }
  },
  //necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
}))

function App() {

  const classes = useStyles()



  //#B4B2B8 #B6B8B2
  //primary #3F51B5  complemantary #B5A33F
  return (
    <Router>
      <Route>
        <TopNavigation />

        <div className={classes.toolbar} />
        <Switch>

          <Route path='/details/:id'>
            <ProjectDetails />
          </Route>
          <Route path='/'><MainPage /></Route>
        </Switch>


        <div className={classes.footer}>
          <Footer />
        </div>

      </Route>
    </Router>

  );
}

export default App;


