import React from 'react'
import { useFormik } from 'formik';
import emailjs from 'emailjs-com';
import '../styles/contact.scss';


// const myEmail = process.env.MY_EMAIL;

const validate = values => {
    const errors = {};
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


function Contact() {

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userId = process.env.REACT_APP_EMAILJS_USER_ID;

    const handleReset = () => {
        console.log('handleReset')
    }

    const emailTemplate = (values) => {
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
        onSubmit: values => {
            const templateParams = emailTemplate(values)
            emailjs.send(serviceId, templateId, templateParams, userId)
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                })
                .catch(err => console.log(err))
        }

    })

    return (

        <div id="comment" className="container">
            <div className="col d-flex justify-content-center">
                <form id="commentForm" onSubmit={formik.handleSubmit}>
                    <div className="form-group ">
                        <input id="contact_number" type="text" className="hide"
                            name="contact_number"

                        />
                        <label id="labelName" htmlFor="name">Name:</label>
                        {formik.touched.name && formik.errors.name ? <span>{formik.errors.name}</span> : null}
                        <input id="name" name="name" type="text" className="form form-control"
                            placeholder="Name" autoComplete="off"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.name}
                        />
                        <label id="labelEmail" htmlFor="email">Email:</label>
                        {formik.touched.email && formik.errors.email ? <span>{formik.errors.email}</span> : null}
                        <input
                            id="email" name="email" type="email" className="form form-control"
                            placeholder="my_name@email.com" autoComplete="off"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                        <label id="labelCommentBox" htmlFor="commentBox">Leave a comment:</label>
                        {formik.touched.commentBox && formik.errors.commentBox ? <span>{formik.errors.commentBox}</span> : null}
                        <textarea id="commentBox" name="commentBox" rows="4"
                            className="form form-control" placeholder="Write a comment"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.commentBox}
                        ></textarea>
                        {/* <!-- </div>
                            <div className="d-flex button-form"> --> */}
                        <div className="d-flex justify-content-center">
                            <button id="btn-send" className="btn btn-primary btn-small" type="submit"
                            >Send&nbsp;</button>
                            <button id="btn-reset" className="btn btn-danger btn-small" href="#!"
                                onClick={handleReset}
                            >Reset</button>
                        </div>

                    </div>

                </form>
            </div>
        </div>

    )
}

export default Contact
