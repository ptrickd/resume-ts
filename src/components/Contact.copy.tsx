/*
import React from "react";
// import { useFormik } from "formik";
import { useForm, SubmitHandler } from "react-hook-form";
// import emailjs from "@emailjs/browser";

import { Button, FormControl, Typography, TextField, Box } from "@mui/material";
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
    <Box component="div">
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
          <TextField
            id="name"
            label="Name"
            variant="filled"
            color="primary"
            onChange={formik.handleChange}
            value={formik.values.name}
          />

          <TextField
            id="email"
            label="Email"
            variant="filled"
            color="primary"
            onChange={formik.handleChange}
            value={formik.values.email}
          />

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
    </Box>
  );
}

export default Contact;
*/
