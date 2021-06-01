import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import {
    Card,
    CardContent,
    CardMedia,
    CardHeader,
    List,
    ListItem,
    CardActionArea,
    Divider,
    Typography
} from '@material-ui/core'


interface IProps {
    id: string,
    title: string,
    screenshots: string,
    description: string,
    handleClickDetails: (id: string) => void,
    darkTheme: boolean,
    skills: string[]
}

const useStyles = makeStyles({
    root: {
        maxWidth: 280,
        margin: 10,
        backgroundColor: '#ccc3c3'
    },
    media: {
        height: 140,
        borderBottom: '1px solid black'
    },
    header: {
        alignItems: 'center',
        fontSize: '2rem'
    }
})

function ProjectCards({ id, title, screenshots, description, handleClickDetails, darkTheme, skills }: IProps) {
    const classes = useStyles()

    const limitCharacter = (str: string) => {

        if (str.length > 100) return str.substring(0, 100) + '...'
        return str

    }

    return (

        <Fragment>
            <Card className={classes.root} >

                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={screenshots[0]}
                        title='screenshot'
                    />
                    <CardHeader title={title} className={classes.header} />
                </CardActionArea>
                <Divider />
                <CardContent>
                    <Typography variant='subtitle1' component='h6'>{limitCharacter(description)}</Typography>

                    <List >
                        <ListItem dense> <Typography variant='subtitle1'>{skills[0]}</Typography></ListItem>
                        <ListItem dense> <Typography variant='subtitle1'>{skills[1]}</Typography></ListItem>
                        <ListItem dense> <Typography variant='subtitle1'>{skills[2]}</Typography></ListItem>
                    </List>

                </CardContent>

            </Card>

        </Fragment>





        // </ProjectBox>
    )
}

export default ProjectCards
