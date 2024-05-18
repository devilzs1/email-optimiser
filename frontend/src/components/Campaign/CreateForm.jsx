
import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Divider,
  Stack,
  Typography,
  Dialog,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormProvider, { RHFTextField } from "../hook-form";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Slide from "@mui/material/Slide";
import TemplateEditor from "../../pages/email/CampaignEditor";

import axios from "axios";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CreateForm = () => {
  const [htmlContent, setHtmlContent] = useState({ design: {}, html: "" });
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const FormSchema = Yup.object().shape({
    campaign_name: Yup.string().required("Campaign name is required"),
    campaign_description: Yup.string(),
    from: Yup.string(),
    to: Yup.string()
      .required("To (recipient) is required!")
      .test("valid-emails", "Invalid email format", (value) => {
        if (!value) return true; // If no value, let the required validation handle it
        const emails = value.split(",").map((email) => email.trim());
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emails.every((email) => emailRegex.test(email));
      }),
    subject: Yup.string().required("Subject is required!"),
    template: Yup.object().shape({
      design: Yup.object(),
      html: Yup.string()
        .required("HTML content is required")
        .test("valid-html", "HTML string must be valid HTML", (value) => {
          if (!value) return false;
          const htmlRegex = /<\/?[a-z][\s\S]*>/i;
          return htmlRegex.test(value);
        }),
    }),
  });

  const defaultValues = {
    campaign_name: "",
    campaign_description: "",
    from: "",
    to: "",
    subject: "",
    template: { design: {}, html: "" },
  };

  const methods = useForm({
    resolver: yupResolver(FormSchema),
    defaultValues,
    mode: "onSubmit", // validate fields on submit event
  });

  const {
    reset,
    setError,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = methods;

  const onSubmit = async (data) => {
    try {
      // Submit data to database
      console.log(data);
      
    } catch (error) {
      reset();
      setError("afterSubmit", { ...error, message: error.message });
    }
  };

  const handleInputChange = (name, value) => {
    setValue(name, value); // Update the form value
    clearErrors(name); // Clear errors for the input field
  };

  return (
    <>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack gap={3}>
          <Stack justifyContent={"center"} alignItems={"center"} gap={2}>
            <RHFTextField
              name="campaign_name"
              label="Campaign name"
              onChange={(e) =>
                handleInputChange("campaign_name", e.target.value)
              }
              error={!!errors.campaign_name}
              helperText={
                errors.campaign_name ? errors.campaign_name.message : ""
              }
            />
            <RHFTextField
              name="campaign_description"
              label="Campaign Description (optional)"
              onChange={(e) =>
                handleInputChange("campaign_description", e.target.value)
              }
              error={!!errors.campaign_description}
              helperText={
                errors.campaign_description
                  ? errors.campaign_description.message
                  : ""
              }
            />
          </Stack>
          <Divider />
          <Stack justifyContent={"center"} alignItems={"center"} gap={2}>
            <RHFTextField
              name="to"
              label="To"
              onChange={(e) => handleInputChange("to", e.target.value)}
              error={!!errors.to}
              helperText={errors.to ? errors.to.message : ""}
            />
            <Typography variant="caption">
              {`*You can enter multiple emails separated by comma (,).`}
              <br />
              {`For example: `}
              <i>{`example1@gmail.com, example2@yahoo.com`}</i>
            </Typography>
            <RHFTextField
              name="subject"
              label="Subject"
              onChange={(e) => handleInputChange("subject", e.target.value)}
              error={!!errors.subject}
              helperText={errors.subject ? errors.subject.message : ""}
            />
            <Accordion defaultExpanded sx={{ width: "100%" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography>Content</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Stack gap={2} justifyContent={"center"}>
                  <RHFTextField
                    name="template.html"
                    label="Content"
                    placeholder="Design 👇"
                    multiline
                    rows={4}
                    value={htmlContent.html}
                    InputProps={{
                      readOnly: true,
                    }}
                    error={!!errors.template?.html}
                    helperText={errors.template?.html?.message || ""}
                  />
                  <Button variant="outlined" onClick={handleClickOpen}>
                    Design content
                  </Button>
                </Stack>
              </AccordionDetails>
            </Accordion>
          </Stack>
          <Button
            variant="contained"
            color="success"
            sx={{
              padding: "4px 20px",
              borderRadius: "20px",
            }}
            onClick={handleSubmit(onSubmit)}
          >
            <Typography sx={{ textTransform: "capitalize" }}>Send</Typography>
          </Button>
        </Stack>
      </FormProvider>
      {open && (
        <Dialog
          fullScreen
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          <TemplateEditor
            // setHtmlContent={(value) => {
            //   setHtmlContent(value);
            //   handleInputChange("template.html", value.html);
            // }}
            setHtmlContent={(value) => {
              setHtmlContent(value);
              handleInputChange("template", value);
            }}
            handleClose={handleClose}
            htmlContent={htmlContent}
          />
        </Dialog>
      )}
    </>
  );
};

export { CreateForm };
