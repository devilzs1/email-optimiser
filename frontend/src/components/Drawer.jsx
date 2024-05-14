import React from "react";
import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Slide,
  Stack,
} from "@mui/material";
import FormProvider, { RHFTextField } from "./hook-form";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const SaveDrawer = ({open, handleClose}) => {
  const NameSchema = Yup.object().shape({
    name: Yup.string()
      .required("Template name is required!")
  });
  const defaultValues={name: "",}
  const methods = useForm({
    resolver: yupResolver(NameSchema), defaultValues,
  })
  const {reset, setError, handleSubmit, formState: {errors}} = methods;

  const onSubmit = async (data) => {
    try {
      //submit data to database
      console.log("Save template into database")
      
    } catch (error) {
      reset();
      setError("afterSubmit", { ...error, message: error.message });
    }
  };

  return (
    <Dialog
      fullWidth
      maxWidth="xs"
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      sx={{ p: 4 }}
    >
      <DialogTitle>Save as Template</DialogTitle>
      <Divider sx={{ width: "100%" }} />
      <DialogContent>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Stack
            sx={{ height: "100%" }}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <RHFTextField name="name" label="Template name" />
          </Stack>
        </FormProvider>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose}>
          Cancel
        </Button>
        <Button onClick={handleSubmit(onSubmit)} autoFocus>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export {SaveDrawer}