import React from "react";
import { useFormik } from "formik";
import emailjs from "emailjs-com";

import {
  Button,
  FormControl,
  Typography,
  TextField,
  Container,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
//@ts-ignore

type Props = {
  toggleShowModal: (value: boolean) => void;
};

type Values = {
  name: string;
  email: string;
  commentBox: string;
};

const validate = (values: Values) => {
  const errors: Values = {
    name: "",
    email: "",
    commentBox: "",
  };
  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length < 3) {
    errors.name = "Must be at least 3 characters";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.commentBox) {
    errors.commentBox = "Required";
  } else if (values.commentBox.length < 10) {
    errors.commentBox = "Must be at least 10 characters";
  }
  return errors;
};

function Contact({ toggleShowModal }: Props) {
  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || "";
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "";
  const userId = process.env.REACT_APP_EMAILJS_USER_ID || "";

  const emailTemplate = (values: Values) => {
    return {
      email: values.email,
      name: values.name,
      commentBox: values.commentBox,
    };
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      commentBox: "",
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      const templateParams = emailTemplate(values);
      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then(
          (result) => {
            console.log(result.text);
            resetForm({ values: { name: "", email: "", commentBox: "" } });
            toggleShowModal(true);
          },
          (error) => {
            console.log(error.text);
          }
        )
        .catch((err) => console.log(err));
    },
  });

  return (
    <Container>
      <Typography sx={{ margin: (theme) => theme.spacing(2) }} variant="h6">
        Leave a comment:
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <FormControl
          id="commentForm"
          fullWidth
          sx={{
            "& .MuiTextField-root": {
              margin: (theme) => theme.spacing(2),
            },
          }}
        >
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
            id="name"
            label="Name"
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
            id="email"
            label="Email"
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
            id="comments"
            label="Comments"
            variant="filled"
            color="primary"
            multiline
            rows={4}
            onChange={formik.handleChange}
            value={formik.values.commentBox}
          />
          <div className="btn-send-section">
            <Button
              sx={{ margin: (theme) => theme.spacing(2) }}
              variant="contained"
              color="primary"
              id="btn-send"
              type="submit"
              size="medium"
              endIcon={<SendIcon />}
            >
              Send&nbsp;
            </Button>
          </div>
        </FormControl>
      </form>
    </Container>
  );
}

export default Contact;
