import React from 'react';

//@ts-ignore
import { Wrapper } from '../styles/Icons.ts';


import { makeStyles } from '@material-ui/core/styles'
import { Avatar } from '@material-ui/core'

interface IProps {
    iconsArr: { text: string, icon: string }[]
}

const useStyles = makeStyles(theme => ({
    icon: {
        width: theme.spacing(7),
        height: theme.spacing(7)
    }
}))

function Icons({ iconsArr }: IProps) {

    const classes = useStyles()

    const WrappedInTooltips = () => {
        return iconsArr.map(iconObj => {
            return (
                <Avatar alt="icon" src={iconObj.icon} className={classes.icon} />
            )
        })
    }

    return (
        <Wrapper >
            {WrappedInTooltips()}
        </Wrapper>
    )
}

export default Icons

