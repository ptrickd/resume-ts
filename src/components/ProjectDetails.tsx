//React
import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom'

//Components
import ImageModal from './ImageModal'

//Data
import projectsData from '../files/projectsData';

//Constants
import { DRAWER_WIDTH } from '../constants/Styling'

//Material - UI
import useMediaQuery from '@material-ui/core/useMediaQuery'

import {
    Box,
    Button,
    Container,
    Divider,
    Grid,
    GridList,
    GridListTile,
    Link,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
} from '@material-ui/core'
import { makeStyles, Theme, createStyles, useTheme } from '@material-ui/core/styles'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'

interface IParams {
    id: string
}

const drawerWidth = DRAWER_WIDTH
const useStyles = makeStyles((theme: Theme) => createStyles({
    main: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth
        },
        padding: theme.spacing(3),
    },
    title: {
        marginTop: 20
    },
    description: {
        minHeight: 50,
        marginTop: 20
    },
    links: {
        width: '100%',
        display: 'flex'
    },
    button: {
        flexGrow: 0
    },
    listItem: {
        justifyContent: 'center'
    },
    listItemIcon: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    imageContainer: {
        maxWidth: '100%',
        width: '100%',
        height: '100%',
        // background: '#d0d5f2',
        // border: '1px solid black',
        // cursor: 'pointer',
        overflow: 'hidden'
    },
    gridList: {
        // width: '80%',
        // height: '100%',
    }
}))

const imgStyles = {
    maxWidth: '100%',
    maxHeight: '100%',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    cursor: 'pointer',
    marginTop: 10,
    marginBottom: 10,
    border: '3px solid #d0d5f2'
}

function ProjectDetails() {
    const classes = useStyles()
    const history = useHistory()
    const [openModal, setOpenModal] = useState(false)
    const [image, setImage] = useState('')
    const { id }: IParams = useParams()
    const theme = useTheme()
    const widthIsSmall = useMediaQuery(theme.breakpoints.up('sm'))
    const widthIsMedium = useMediaQuery(theme.breakpoints.up('md'))
    const widthIsLarge = useMediaQuery(theme.breakpoints.up('lg'))

    const {
        title,
        screenshots,
        screenshotsNum,
        description,
        skills,
        repo,
        website,
        haveRepo,
        haveWebsite
    } = projectsData[Number(id)];

    useEffect(() => {
        console.log('widthIsSmall', widthIsSmall)
        console.log('widthIsMedium', widthIsMedium)
        console.log('widthIsLarge', widthIsLarge)
    }, [widthIsSmall, widthIsMedium, widthIsLarge])

    const getGridImageCols = () => {
        if (screenshotsNum > 1) {
            if (widthIsLarge) {
                return 3
            } else if (widthIsMedium) {
                return 2
            } else if (widthIsSmall) {
                return 1
            }
            return 1
        }
        return 1
    }

    const displayList = () => {
        return skills.map((skill, index) => {
            return (
                <Grid item xs={6} md={4} lg={3} key={index}>
                    <ListItem dense >
                        <ListItemIcon className={classes.listItemIcon}><ArrowRightIcon /></ListItemIcon>
                        <ListItemText primary={skill} />
                    </ListItem>
                </Grid>
            )
        })
    }

    const handleOpenModal = (index: number) => {
        setImage(screenshots[index])
        setOpenModal(true)
    }
    const handleCloseModal = () => {
        setOpenModal(false)
    }
    return (

        <Container className={classes.main} >
            <Typography align="center" variant="h4" gutterBottom>{title}</Typography>
            <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <GridList className={classes.gridList} spacing={1} cols={getGridImageCols()} >
                    <GridListTile className={classes.imageContainer}>
                        <span onClick={() => handleOpenModal(0)} style={{ padding: 5 }}>
                            <img
                                style={imgStyles}
                                src={screenshots[0]} alt="screenshot" />
                        </span>
                    </GridListTile>

                    {screenshots[1] && <GridListTile className={classes.imageContainer} >
                        <span onClick={() => handleOpenModal(1)} style={{ padding: 5 }}>
                            <img
                                style={imgStyles}
                                src={screenshots[1]} alt="screenshot" />
                        </span>
                    </GridListTile>
                    }

                    {screenshots[1] && <GridListTile className={classes.imageContainer} >
                        <span onClick={() => handleOpenModal(2)} style={{ padding: 5 }}>
                            <img
                                style={imgStyles}
                                src={screenshots[2]} alt="screenshot" />
                        </span>
                    </GridListTile>
                    }

                </GridList>
                <Divider />
                <Typography
                    variant="body1"
                    paragraph
                    align="justify"
                    className={classes.description}
                >
                    {description}
                </Typography>
                <Divider />
                <div>
                    <Typography variant="h6" align="center"
                        className={classes.title}
                    >Some of the technology used!</Typography>
                    <List>
                        <Grid container >

                            {displayList()}

                        </Grid>
                    </List>

                </div>
                <Box>
                    <List className={classes.links}>

                        {
                            haveWebsite ? <ListItem className={classes.listItem}>
                                <Link
                                    href={`${website}`}
                                >Website</Link>
                            </ListItem>
                                : null//<span>Not yet available</span>
                        }
                        {
                            haveRepo ? <ListItem className={classes.listItem}>
                                <Link
                                    href={`${repo}`}
                                >Github Repo</Link>
                            </ListItem>
                                : null//<span>Not yet available</span>
                        }

                    </List>
                    <Box display="flex" justifyContent="center" >
                        <Button

                            variant="contained"
                            color="primary"
                            onClick={() => history.push('/')}

                        >
                            Go Back
                    </Button>
                    </Box>

                </Box>

                <ImageModal
                    open={openModal}
                    handleClose={handleCloseModal}
                    image={image}
                />
            </span>

        </Container >

    )
}

export default ProjectDetails
