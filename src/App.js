import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

import { Wrapper, MainViewStyled } from './styles/App.style.js';

import About from './components/About';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Icons from './components/Icons';
import Footer from './components/Footer';
import ProjectDetails from './components/ProjectDetails';

import reactIcon from './images/icon/react.svg';
import postgresqlIcon from './images/icon/postgresql-icon.png'
import githubIcon from './images/icon/github_icon.ico';
import jqueryIcon from './images/icon/jquery-icon.png';
import pythonIcon from './images/icon/python-icon-bw.webp';

import flaskIcon from './images/icon/flask-logo.png';
import htmlIcon from './images/icon/html5-icon-bw.png';
import cssIcon from './images/icon/css-icon-bw.png';
import jsIcon from './images/icon/javascript-icon-bw.png';
import nodeJsIcon from './images/icon/nodejs-icon-bw.ico';

function App() {

  const [showDetails, setShowDetails] = useState(false);
  const [detailsId, setDetailsId] = useState(null);
  const [showSideBar, setShowSideBar] = useState(true);
  // const [darkTheme, setDarkTheme] = useState(true);
  const [columnStyle, setColumnStyle] = useState(
    'col-sm-8 col-md-9 col-lg-10 col-7'
  );

  const isSmallScreen = useMediaQuery({ query: '(max-width: 800px' })
  useEffect(() => {
    isSmallScreen ? setShowSideBar(false) : setShowSideBar(true)

  }, [isSmallScreen])

  useEffect(() => {
    showSideBar ? setColumnStyle('col-sm-8 col-md-9 col-lg-10 col-7') : setColumnStyle('')
  }, [showSideBar])

  const handleClickDetails = (id) => {
    setShowDetails(true);
    setDetailsId(id);
  }

  const handleClickNav = (data) => {
    setShowDetails(false);
  }

  return (
    <Wrapper >
      <div className="row">
        {showSideBar &&
          <div
            id="col2"
            className="col-sm-4 col-md-3 col-lg-2 col-5"
          >
            <Navigation
              handleClickNav={data => handleClickNav(data)}
              isDetailPage={showDetails}
            />
          </div>
        }

        <div id=""
          className={`${columnStyle}`}>

          <div className="row">
            <MainViewStyled id="main" >
              {/* If true will show the detail page corresponding with id */}
              {
                !showDetails ? <>
                  <About />

                  <Icons
                    icon1={reactIcon}
                    icon2={postgresqlIcon}
                    icon3={githubIcon}
                    icon4={jqueryIcon}
                    icon5={pythonIcon}
                  />
                  <Projects
                    handleClickDetails={id => handleClickDetails(id)}

                  />
                  <Icons
                    icon1={flaskIcon}
                    icon2={htmlIcon}
                    icon3={cssIcon}
                    icon4={jsIcon}
                    icon5={nodeJsIcon}
                  />

                  <Skills />
                  <Contact />

                  <Footer />
                </>
                  :
                  <>
                    <ProjectDetails
                      id={detailsId}
                      handleClickNav={handleClickNav}
                    />

                    <Footer />
                  </>

              }

            </MainViewStyled>
          </div>
        </div>
      </div>
    </Wrapper >
  );
}

export default App;
