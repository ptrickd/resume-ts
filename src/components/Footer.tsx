//React
import React from 'react';

//Material UI
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

//Constants
import { DRAWER_WIDTH } from '../constants/Styling'

const drawerWidth = DRAWER_WIDTH
const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth
        },
        padding: theme.spacing(5),
        flexGrow: 1
    },
    divider: {
        marginBottom: 10
    }
}))



function Footer() {
    const classes = useStyles()

    return (
        <Container id="footer" className={classes.root}>
            <Divider className={classes.divider} />
            <Grid container justify="center" alignItems="center">
                <Grid
                    item xs={12} md={4}
                >
                    {/* <span style={itemStyles} > */}
                    <Typography variant="body2" align="center">
                        Patrick Dion
                        </Typography>
                    {/* </span> */}
                </Grid>
                <Grid
                    item xs={12} md={4}
                >
                    {/* <span style={itemStyles} > */}
                    <Typography variant="body2" align="center">
                        2020 - 2021
                        </Typography>
                    {/* </span> */}
                </Grid>
                <Grid
                    item xs={12} md={4}
                >
                    {/* <span style={itemStyles} > */}
                    <Typography variant="body2" align="center">
                        EvolveU - Cohort5
                        </Typography>
                    {/* </span> */}
                </Grid>
            </Grid>

        </Container>
    )
}

export default Footer;