//React
import React from "react";

//Forms
import { useForm, Controller, SubmitHandler } from "react-hook-form";

//Email
import emailjs from "@emailjs/browser";

//UI
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

//Icons
import SendIcon from "@mui/icons-material/Send";

//Types
interface IFormInputs {
  name: string;
  email: string;
  commentBox: string;
}

function Contact() {
  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || "";
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "";
  const userId = process.env.REACT_APP_EMAILJS_USER_ID || "";

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<IFormInputs>({
    defaultValues: {
      name: "",
      email: "",
      commentBox: "",
    },
  });

  // const sendEmail = (form: IFormInputs) => {
  //   emailjs
  //     .sendForm(serviceId, templateId, form, {
  //       publicKey: userId,
  //     })
  //     .then(
  //       () => {
  //         console.log("SUCCESS!");
  //       },
  //       (error) => {
  //         console.log("FAILED...", error.text);
  //       }
  //     );
  // };

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    if (serviceId && templateId && userId)
      console.log("all emails ids present");
    else console.log("all emails ids missing");
    console.log(data);
  };

  return (
    <Box component="div">
      <Typography sx={{ margin: (theme) => theme.spacing(2) }} variant="h6">
        Leave a comment:
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          component="div"
          sx={{ display: "flex", flexDirection: "column", p: 4 }}
        >
          <Controller
            name="name"
            control={control}
            rules={{ required: true, minLength: 4 }}
            render={({ field }) => (
              <TextField
                {...field}
                id="name"
                label="Name"
                variant="filled"
                color="primary"
                sx={{ m: 1 }}
              />
            )}
          />
          {errors.name?.type === "required" && (
            <Typography
              variant="body1"
              color="error"
              align="left"
              sx={{ m: 1 }}
            >
              * Required
            </Typography>
          )}
          {errors.name?.type === "minLength" && (
            <Typography
              variant="body1"
              color="error"
              align="left"
              sx={{ m: 1 }}
            >
              * Minimum of 3 characters
            </Typography>
          )}
          <Controller
            name="email"
            control={control}
            rules={{
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            }}
            render={({ field }) => (
              <TextField
                {...field}
                id="email"
                label="Email"
                variant="filled"
                color="primary"
                sx={{ m: 1 }}
              />
            )}
          />
          {errors.email?.type === "required" && (
            <Typography
              variant="body1"
              color="error"
              align="left"
              sx={{ m: 1 }}
            >
              * Required
            </Typography>
          )}{" "}
          {errors.email?.type === "pattern" && (
            <Typography
              variant="body1"
              color="error"
              align="left"
              sx={{ m: 1 }}
            >
              * Not a valid email
            </Typography>
          )}
          <Controller
            name="commentBox"
            control={control}
            rules={{ required: true, minLength: 11 }}
            render={({ field }) => (
              <TextField
                {...field}
                id="comments"
                label="Comments"
                variant="filled"
                color="primary"
                multiline
                rows={4}
                sx={{ m: 1 }}
              />
            )}
          />
          {errors.commentBox?.type === "required" && (
            <Typography
              variant="body1"
              color="error"
              align="left"
              sx={{ m: 1 }}
            >
              * Required
            </Typography>
          )}
          {errors.commentBox?.type === "minLength" && (
            <Typography
              variant="body1"
              color="error"
              align="left"
              sx={{ m: 1 }}
            >
              * Minimum of 10 characters
            </Typography>
          )}
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
        </Box>
      </form>
    </Box>
  );
}

export default Contact;
