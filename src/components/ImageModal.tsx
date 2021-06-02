import { useState } from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { Button, ButtonGroup, Modal } from '@material-ui/core'

interface IProps {
    open: boolean
    handleClose: () => void
    image: string
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    paper: {
        position: 'absolute',
        width: '80%',
        height: '80%',
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
    },
    image: {
        width: '100%',
        height: '100%',
        backgroundColor: 'yellow'
    }
}))


function getModalStyle() {
    // const top = -50;
    // const left = 0;
    const top = 30;
    const left = 30;
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const ImageModal = ({ open, handleClose, image }: IProps) => {
    const classes = useStyles()
    const [modalStyle] = useState(getModalStyle)

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="image-modal"
                aria-describedby="image-modal"
            >
                <div style={modalStyle} className={classes.paper}>
                    {/* */}
                    <div className={classes.image} onClick={handleClose}>
                        <img
                            className={classes.image}
                            alt="Showing in a modal" src={image} />
                    </div>
                    {/* <Button onClick={handleClose}>Dismiss</Button> */}
                </div>

            </Modal>
        </div >

    )
}

export default ImageModal