import React, { Fragment, useEffect } from 'react'
import { useFormik } from 'formik';
import emailjs from 'emailjs-com';
import { makeStyles } from '@material-ui/core/styles'
import { Button, FormControl, Typography, TextField } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send';
//@ts-ignore 


type Props = {
    darkTheme: boolean,
    toggleShowModal: (value: boolean) => void
}

type Values = {
    name: string,
    email: string,
    commentBox: string
}

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(2),
        }
    },
    title: {
        margin: theme.spacing(2)
    },
    button: {
        margin: theme.spacing(2)
    }
}))

const validate = (values: Values) => {
    const errors: Values = {
        name: '', email: '', commentBox: ''
    };
    if (!values.name) {
        errors.name = 'Required'
    }
    else if (values.name.length < 3) {
        errors.name = 'Must be at least 3 characters'
    }
    if (!values.email) {
        errors.email = "Required";
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    if (!values.commentBox) {
        errors.commentBox = 'Required'
    }
    else if (values.commentBox.length < 10) {
        errors.commentBox = "Must be at least 10 characters"
    }
    return errors;
};


function Contact({ darkTheme, toggleShowModal }: Props) {
    const classes = useStyles()
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || '';
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '';
    const userId = process.env.REACT_APP_EMAILJS_USER_ID || '';

    const emailTemplate = (values: Values) => {
        return {
            email: values.email,
            name: values.name,
            commentBox: values.commentBox
        }

    }

    const formik = useFormik({
        initialValues: {
            name: '',
            email: "",
            commentBox: ''
        },
        validate,
        onSubmit: (values, { resetForm }) => {
            const templateParams = emailTemplate(values)
            emailjs.send(serviceId, templateId, templateParams, userId)
                .then((result) => {
                    console.log(result.text);
                    resetForm({ values: { name: '', email: '', commentBox: '' } });
                    toggleShowModal(true);
                }, (error) => {
                    console.log(error.text);
                })
                .catch(err => console.log(err))
        }

    })

    return (
        <Fragment>
            <Typography className={classes.title} variant="h6">Leave a comment:</Typography>
            <form onSubmit={formik.handleSubmit}>
                <FormControl id="commentForm" fullWidth className={classes.root}>

                    {/* <div className="form-control"> */}
                    {/* <InputLabel id="labelName" htmlFor="name">Name:</InputLabel> */}
                    {/* {formik.touched.name && formik.errors.name ? <span>{formik.errors.name}</span> : null} */}
                    {/* <Input id="name" name="name" type="text" className="form"
                        autoComplete="off"
                        // onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        fullWidth
                    /> */}
                    <TextField
                        id='name'
                        label='Name'
                        variant="filled"
                        color="primary"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                    />
                    {/* </div> */}
                    {/* <div className="form-control"> */}
                    {/* <InputLabel id="labelEmail" htmlFor="email">Email:</InputLabel> */}
                    {/* {formik.touched.email && formik.errors.email ? <span>{formik.errors.email}</span> : null} */}
                    {/* <Input
                            id="email" name="email" type="email" className="form"
                            autoComplete="off"
                            // onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            fullWidth
                        /> */}
                    <TextField
                        id='email'
                        label='Email'
                        variant="filled"
                        color="primary"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                    {/* </div> */}
                    {/* <div className="form-control"> */}
                    {/* <InputLabel id="labelCommentBox" htmlFor="commentBox">Leave a comment:</InputLabel> */}
                    {/* {formik.touched.commentBox && formik.errors.commentBox ? <span>{formik.errors.commentBox}</span> : null} */}
                    {/* <Input id="commentBox" name="commentBox" rows="4"
                            className="form"
                            // onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.commentBox}
                            fullWidth
                        /> */}
                    {/* </div> */}
                    <TextField
                        id='comments'
                        label='Comments'
                        variant="filled"
                        color="primary"
                        multiline
                        rows={4}
                        onChange={formik.handleChange}
                        value={formik.values.commentBox}
                    />
                    <div className="btn-send-section">
                        <Button
                            className={classes.button}
                            variant="contained"
                            color="primary"
                            id="btn-send"
                            type="submit"
                            size="medium"
                            endIcon={<SendIcon />}
                        >Send&nbsp;</Button>

                    </div>
                </FormControl>
            </form>
        </Fragment>




    )
}

export default Contact
