import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import {
    Container,
    Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography
} from '@material-ui/core'
//@ts-ignore
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        flexGrow: 1
    },
    title: {
        alignSelf: 'center'
    },
    list: {
        width: '25%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    listItem: {
        display: 'flex',
        flexGrow: 0,
        justifyContent: 'flex-start',
    },
    listItemText: {
        flexGrow: 1,
        justifyContent: 'center',
        alignSelf: 'flex-start'
    },
    listItemIcon: {
        display: 'flex',
        flexGrow: 0,
        justifyContent: 'flex-end',
        marginLeft: 0


    }

}))

const languages = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Python', 'SQL']
const frameworks = ['ReactJS', 'NextJS', 'NodeJs', 'Flask', 'MongoDB', 'PostgreSQL']

function Skills() {
    const classes = useStyles()
    return (

        <Container id="skills" className={classes.root}>
            <Typography
                variant="h3"
                className={classes.title}
                align="center"
            >What I know</Typography>
            <Grid container spacing={3} justify="center" >

                <Grid item xs={12} sm={6} className={classes.list} >
                    <Typography variant="h5" >Language</Typography>
                    <List >

                        {languages.map((text, index) => (

                            <ListItem key={index} className={classes.listItem}>
                                <ListItemIcon className={classes.listItemIcon}>
                                    <ArrowRightIcon />
                                </ListItemIcon>

                                <ListItemText primary={text} className={classes.listItemText} />

                            </ListItem>

                        ))}



                    </List>
                </Grid>
                {/* <Grid item xs={12} sm={12} md={4} /> */}
                <Grid item xs={12} sm={6} >
                    <Typography variant="h5" >Framework</Typography>
                    <List className={classes.list}>

                        {frameworks.map((text, index) => (
                            <ListItem key={index} className={classes.listItem}>
                                <ListItemIcon className={classes.listItemIcon}>
                                    <ArrowRightIcon />
                                </ListItemIcon>
                                <ListItemText primary={text} className={classes.listItemText} />
                            </ListItem>
                        ))}

                    </List>
                </Grid>


            </Grid>

        </Container >


    )
}

export default Skills
