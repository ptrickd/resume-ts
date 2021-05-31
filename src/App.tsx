import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import '@fontsource/roboto'
//@ts-ignore
import { Wrapper, MainViewStyled } from './styles/AppStyled.ts';

//@ts-ignore
import About from './components/About.tsx';
//@ts-ignore
import Contact from './components/Contact.tsx';
//@ts-ignore
import Navigation from './components/Navigation.tsx';
//@ts-ignore
import Projects from './components/Projects.tsx';
//@ts-ignore
import Skills from './components/Skills.tsx';
//@ts-ignore
import Icons from './components/Icons.tsx';
//@ts-ignore
import Footer from './components/Footer.tsx';
//@ts-ignore
import ProjectDetails from './components/ProjectDetails.tsx';
// import OnSubmitModal from './components/OnSubmitModal';

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

  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [detailsId, setDetailsId] = useState<number | null>(null);
  const [showSideBar, setShowSideBar] = useState(true);
  const [darkTheme, setDarkTheme] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  // col-sm-8 col-md-9 col-lg-10 col-7
  const isSmallScreen = useMediaQuery({ query: '(max-width: 800px' })
  useEffect(() => {
    isSmallScreen ? setShowSideBar(false) : setShowSideBar(true)

  }, [isSmallScreen])

  const toggleShowModal = (value: boolean) => {
    console.log('toogle value: ', value)
    setShowModal(value)
  }


  const handleClickDetails = (id: number) => {
    setShowDetails(true);
    setDetailsId(id);
  }

  const handleClickNav = () => {
    setShowDetails(false);
  }

  return (
    <Wrapper darkTheme={darkTheme} sideBar={!isSmallScreen}>

      {
        showSideBar &&
        <div
          id=""
          className=""
        >
          <Navigation
            handleClickNav={handleClickNav}
            isDetailPage={showDetails}
            isDarkTheme={darkTheme}
            toggleTheme={() => setDarkTheme(!darkTheme)
            }
          />
        </div>
      }

      {/* <div className=""> */}
      <MainViewStyled id="main" >
        {/* If true will show the detail page corresponding with id */}
        {
          !showDetails ? <>
            <About darkTheme={darkTheme} />

            < Icons
              iconsArr={Icon1}
            />
            <Projects
              handleClickDetails={handleClickDetails}
              darkTheme={darkTheme}
            />
            <Icons
              iconsArr={Icon2}
            />

            < Skills />
            <Contact darkTheme={darkTheme} showModal={showModal} toggleShowModal={toggleShowModal} />

            <Footer />
            {/* <OnSubmitModal showModal={showModal} toggleShowModal={value => toggleShowModal(value)} /> */}
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
    </Wrapper>
  );
}

export default App;


