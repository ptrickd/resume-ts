import React from 'react'
import { useFormik } from 'formik';
import emailjs from 'emailjs-com';
//@ts-ignore 
import { Input, TextArea, Label, Wrapper } from '../styles/ContactStyled.tsx';

type Props = {
    darkTheme: boolean,
    toggleShowModal: (value: boolean) => void
}

type Values = {
    name: string,
    email: string,
    commentBox: string
}

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

        <Wrapper darkTheme={darkTheme} id="comment" className="container">

            <form id="commentForm" onSubmit={formik.handleSubmit}>

                <div className="form-control">
                    <Label id="labelName" htmlFor="name">Name:</Label>
                    {formik.touched.name && formik.errors.name ? <span>{formik.errors.name}</span> : null}
                    <Input id="name" name="name" type="text" className="form"
                        placeholder="Name" autoComplete="off"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        darkTheme={darkTheme}
                    />
                </div>
                <div className="form-control">
                    <Label id="labelEmail" htmlFor="email">Email:</Label>
                    {formik.touched.email && formik.errors.email ? <span>{formik.errors.email}</span> : null}
                    <Input
                        id="email" name="email" type="email" className="form"
                        placeholder="my_name@email.com" autoComplete="off"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        darkTheme={darkTheme}
                    />
                </div>
                <div className="form-control">
                    <Label id="labelCommentBox" htmlFor="commentBox">Leave a comment:</Label>
                    {formik.touched.commentBox && formik.errors.commentBox ? <span>{formik.errors.commentBox}</span> : null}
                    <TextArea id="commentBox" name="commentBox" rows="4"
                        className="form" placeholder="Write a comment"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.commentBox}
                        darkTheme={darkTheme}
                    ></TextArea>
                </div>
                {/* <!-- </div>
                            <div className="d-flex button-form"> --> */}
                <div className="btn-send-section">
                    <button id="btn-send" className="" type="submit"
                    >Send&nbsp;</button>

                </div>
            </form>
        </Wrapper>

    )
}

export default Contact
