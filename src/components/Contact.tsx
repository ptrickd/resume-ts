//React
import React from "react";

//Forms
import { useForm, Controller, SubmitHandler } from "react-hook-form";

//UI
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

//Icons
import SendIcon from "@mui/icons-material/Send";

//Types
type Props = {
  toggleShowModal: (value: boolean) => void;
};
interface IFormInputs {
  name: string;
  email: string;
  commentBox: string;
}

function Contact({ toggleShowModal }: Props) {
  const { handleSubmit, control, reset } = useForm<IFormInputs>({
    defaultValues: {
      name: "",
      email: "",
      commentBox: "",
    },
  });
  const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data);
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
          {" "}
          <Controller
            name="name"
            control={control}
            rules={{ required: true }}
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
          <Controller
            name="email"
            control={control}
            rules={{ required: true }}
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
          <Controller
            name="email"
            control={control}
            rules={{ required: true }}
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
