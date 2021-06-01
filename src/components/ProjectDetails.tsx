import React from 'react';
import { useHistory, useParams } from 'react-router-dom'

import projectsData from '../files/projectsData';
import { DRAWER_WIDTH } from '../constants/Styling'
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
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
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
        padding: theme.spacing(3)
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
        display: 'flex',
        justifyContent: 'space-around'
    },
    button: {
        flexGrow: 0
    },
    listItemIcon: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    image: {
        border: '1px solid black'
    }
}))

function ProjectDetails() {
    const classes = useStyles()
    const history = useHistory()
    const { id }: IParams = useParams()

    const {
        title,
        screenshots,
        sceenshotsNum,
        description,
        skills,
        repo,
        website,
        haveRepo,
        haveWebsite
    } = projectsData[Number(id)];


    const displayList = () => {
        return skills.map((skill, index) => {
            return (
                <Grid item xs={6} md={4} lg={3}>
                    <ListItem dense key={index}>
                        <ListItemIcon className={classes.listItemIcon}><ArrowRightIcon /></ListItemIcon>
                        <ListItemText primary={skill} />
                    </ListItem>
                </Grid>

            )
        })
    }



    return (

        <Container className={classes.main} >
            <Typography align="center" variant="h4" gutterBottom>{title}</Typography>
            <GridList spacing={2} cols={sceenshotsNum < 2 ? 1 : 2} >
                <GridListTile className={classes.image}>
                    <img src={screenshots[0]} alt="screenshot" />
                </GridListTile>

                {screenshots[1] && <GridListTile className={classes.image}>
                    <img src={screenshots[1]} alt="screenshot" />
                </GridListTile>
                }

                {screenshots[1] && <GridListTile className={classes.image}>
                    <img src={screenshots[2]} alt="screenshot" />
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
                        haveWebsite ? <ListItem alignItems="center">
                            <Link
                                href={`${website}`}
                            >Website</Link>
                        </ListItem>
                            : null//<span>Not yet available</span>
                    }
                    {
                        haveRepo ? <ListItem alignItems="center" >
                            <Link
                                href={`${repo}`}
                            >Github Repo</Link>
                        </ListItem>
                            : null//<span>Not yet available</span>
                    }

                </List>
                <Box display="flex" justifyContent="center">
                    <Button

                        variant="contained"
                        color="primary"
                        onClick={() => history.push('/')}

                    >
                        Go Back
                    </Button>
                </Box>

            </Box>

        </Container >

    )
}

export default ProjectDetails
