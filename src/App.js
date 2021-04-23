import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

import { Wrapper, MainViewStyled } from './styles/AppStyled.js';

import About from './components/About';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Icons from './components/Icons';
import Footer from './components/Footer';
import ProjectDetails from './components/ProjectDetails';
import OnSubmitModal from './components/OnSubmitModal';

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

const Icon1 = [
  { text: 'ReactJs', icon: reactIcon },
  { text: 'Postgres', icon: postgresqlIcon },
  { text: 'GitHub', icon: githubIcon },
  { text: 'JQuery', icon: jqueryIcon },
  { text: 'Python', icon: pythonIcon }
]

const Icon2 = [
  { text: 'Flask', icon: flaskIcon },
  { text: 'HTML', icon: htmlIcon },
  { text: 'CSS', icon: cssIcon },
  { text: 'JavaScript', icon: jsIcon },
  { text: 'NodeJs', icon: nodeJsIcon }
]
function App() {

  const [showDetails, setShowDetails] = useState(false);
  const [detailsId, setDetailsId] = useState(null);
  const [showSideBar, setShowSideBar] = useState(true);
  const [darkTheme, setDarkTheme] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // col-sm-8 col-md-9 col-lg-10 col-7
  const isSmallScreen = useMediaQuery({ query: '(max-width: 800px' })
  useEffect(() => {
    isSmallScreen ? setShowSideBar(false) : setShowSideBar(true)

  }, [isSmallScreen])

  const toggleShowModal = (value) => {
    console.log('toogle value: ', value)
    setShowModal(value)
  }


  const handleClickDetails = (id) => {
    setShowDetails(true);
    setDetailsId(id);
  }

  const handleClickNav = (data) => {
    setShowDetails(false);
  }

  return (
    <Wrapper className="" darkTheme={darkTheme} sideBar={!isSmallScreen}>
      {/* <div > */}
      {showSideBar &&
        <div
          id=""
          className=""
        >
          <Navigation
            handleClickNav={data => handleClickNav(data)}
            isDetailPage={showDetails}
            isDarkTheme={darkTheme}
            toggleTheme={() => setDarkTheme(!darkTheme)}
          />
        </div>
      }

      {/* <div className=""> */}
      <MainViewStyled id="main" >
        {/* If true will show the detail page corresponding with id */}
        {
          !showDetails ? <>
            <About darkTheme={darkTheme} />

            <Icons
              iconsArr={Icon1}
            />
            <Projects
              handleClickDetails={id => handleClickDetails(id)}
              darkTheme={darkTheme}
            />
            <Icons
              iconsArr={Icon2}
            />

            <Skills />
            <Contact darkTheme={darkTheme} showModal={showModal} toggleShowModal={toggleShowModal} />

            <Footer />
            <OnSubmitModal showModal={showModal} toggleShowModal={value => toggleShowModal(value)} />
          </>
            :
            <>
              <ProjectDetails
                id={detailsId}
                handleClickNav={handleClickNav}
                darkTheme={darkTheme}
              />

              <Footer />
            </>

        }

      </MainViewStyled>
      {/* </div> */}

      {/* </div> */}
    </Wrapper >
  );
}

export default App;
