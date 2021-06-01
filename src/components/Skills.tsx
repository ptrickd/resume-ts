import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import {
    Container,
    Grid,
    List,
    ListItem,
    ListItemText,
    Typography
} from '@material-ui/core'
//@ts-ignore

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        flexGrow: 1
    },
    title: {
        alignSelf: 'center'
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
            <Grid container spacing={2} >

                <Grid item xs={4} >
                    <Typography variant="h5">Language</Typography>
                    <List>
                        {languages.map((text, index) => (

                            <ListItem key={index} >
                                <ListItemText primary={text} />
                            </ListItem>

                        ))}
                    </List>
                </Grid>
                <Grid item xs={4} />
                <Grid item xs={4} >
                    <Typography variant="h5">Language</Typography>
                    <List>
                        {frameworks.map((text, index) => (
                            <ListItem key={index}>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </Grid>


            </Grid>

        </Container>


    )
}

export default Skills
