import { useState } from 'react'
//@ts-ignore
import { MainViewStyled } from '../styles/AppStyled.ts';
//@ts-ignore
import About from '../components/About.tsx';
//@ts-ignore
import Contact from '../components/Contact.tsx';
//@ts-ignore
import Projects from '../components/Projects.tsx';
//@ts-ignore
import Skills from '../components/Skills.tsx';
//@ts-ignore
import Icons from '../components/Icons.tsx';

import reactIcon from '../images/icon/react.svg';
import postgresqlIcon from '../images/icon/postgresql-icon.png'
import githubIcon from '../images/icon/github_icon.ico';
import jqueryIcon from '../images/icon/jquery-icon.png';
import pythonIcon from '../images/icon/python-icon-bw.webp';

import flaskIcon from '../images/icon/flask-logo.png';
import htmlIcon from '../images/icon/html5-icon-bw.png';
import cssIcon from '../images/icon/css-icon-bw.png';
import jsIcon from '../images/icon/javascript-icon-bw.png';
import nodeJsIcon from '../images/icon/nodejs-icon-bw.ico';

import { Divider, Container } from '@material-ui/core'
import { DRAWER_WIDTH } from '../constants/Styling'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

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

const drawerWidth = DRAWER_WIDTH
const useStyles = makeStyles((theme: Theme) => createStyles({
    main: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth
        }
    },
    //necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
}))



const MainPage = () => {
    const classes = useStyles()
    const [showModal, setShowModal] = useState<boolean>(false);

    const handleClickDetails = (id: number) => {
        // setShowDetails(true);
        // setDetailsId(id);
        console.log('handle')
    }

    const toggleShowModal = (value: boolean) => {
        console.log('toogle value: ', value)
        setShowModal(value)
    }

    return (
        <MainViewStyled id="main">
            <Container className={classes.main}>
                <About />

                <Icons iconsArr={Icon1} />
                <Divider />
                <Projects handleClickDetails={handleClickDetails} />
                <Icons iconsArr={Icon2} />
                <Divider />
                <Skills />
                <Divider />
                <Contact showModal={showModal} toggleShowModal={toggleShowModal} />
            </Container>
        </MainViewStyled>




    )
}

export default MainPage