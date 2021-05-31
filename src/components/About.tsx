import React from 'react'
import { Typography, Button, Container, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import resumePdf from '../files/myresume.pdf';
//@ts-ignore 


type Props = {
    darkTheme: boolean
}

const useStyles = makeStyles(theme => ({
    root: {
        background: 'linear-gradient(90deg, rgba(238,237,231,1) 0%, rgba(134,139,142,1) 35%, rgba(185,183,189,1) 66%, rgba(231,210,204,1) 100%);',
        margin: theme.spacing(2)
    },
    section: {
        margin: theme.spacing(1),
        marginLeft: theme.spacing(2)
    },
    button: {
        margin: theme.spacing(1),
        marginLeft: theme.spacing(2)
    }
}))

function About({ darkTheme }: Props) {
    const classes = useStyles()
    return (
        <Container id="about-me" maxWidth="lg" >
            <Paper className={classes.root}>
                <Typography variant="h4" className={classes.section} gutterBottom>More about me</Typography>
                {/* <!-- <h5>Full Stack Developer</h5> --> */}
                <Typography variant="body1" className={classes.section} gutterBottom>
                    &nbsp;
                    Living in Calgary, I like the mountains, outdoor activities,
                    snowboard, hiking or others. Comfortable with JavaScript and
                    Python, front and back-end, experimenting with React Native and mobile development.
                    Love to learn new languages and fameworks. Available to work remote or in an office.
            </Typography>
                <Button
                    id="buttons"
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    href={resumePdf}
                >       View Resume &raquo;
            </Button>
            </Paper>


        </Container>
    )
}

export default About


// role = "button"
// data - container="body" data - toggle="popover" data - placement="top"