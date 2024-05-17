import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormProvider, { RHFTextField } from "../hook-form";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHtmlContent } from "../../context/HTMLContentContext";

// Create a context for the form state
const FormStateContext = createContext();

// Create a provider component for the form state context
const FormStateProvider = ({ children }) => {
  const [formState, setFormState] = useState({
    campaignName: "",
    campaignDescription: "",
    from: "",
    to: "",
    subject: "",
    html: "",
  });

  return (
    <FormStateContext.Provider value={[formState, setFormState]}>
      {children}
    </FormStateContext.Provider>
  );
};

const CreateForm = () => {
  const navigate = useNavigate();
  const { htmlContent } = useHtmlContent();

  // Get the form state and its setter from the context
  const [formState, setFormState] = useContext(FormStateContext);

  const FormSchema = Yup.object().shape({
    campaignName: Yup.string().required("Campaign name is required"),
    campaignDescription: Yup.string(),
    from: Yup.string(),
    to: Yup.string()
      .required("To(recipient) is required!")
      .test("valid-emails", "Invalid email format", (value) => {
        if (!value) return true; // If no value, let the required validation handle it
        const emails = value.split(",").map((email) => email.trim());
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emails.every((email) => emailRegex.test(email));
      }),
    subject: Yup.string().required("Subject is required!"),
    html: Yup.string().required("Content is required"),
  });

  const methods = useForm({
    resolver: yupResolver(FormSchema),
    defaultValues: formState,
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
      console.log("Save template into database");
    } catch (error) {
      reset();
      setError("afterSubmit", { ...error, message: error.message });
    }
  };

  const handleInputChange = (name, value) => {
    setValue(name, value); // Update the form value
    setFormState((prevState) => ({ ...prevState, [name]: value })); // Update the form state
    clearErrors(name); // Clear errors for the input field
  };

  const handleDesignContent = () => {
    navigate("/email/templates-editor");
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack gap={3}>
        <Stack justifyContent={"center"} alignItems={"center"} gap={2}>
          <RHFTextField
            name="campaignName"
            label="Campaign name"
            onChange={(e) => handleInputChange("campaignName", e.target.value)}
            error={!!errors.campaignName}
            helperText={errors.campaignName ? errors.campaignName.message : ""}
          />
          <RHFTextField
            name="campaignDescription"
            label="Campaign Description(optional)"
            onChange={(e) =>
              handleInputChange("campaignDescription", e.target.value)
            }
            error={!!errors.campaignDescription}
            helperText={
              errors.campaignDescription
                ? errors.campaignDescription.message
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
                  name="html"
                  label="Content"
                  placeholder="Design 👇"
                  multiline
                  rows={4}
                  value={htmlContent}
                  InputProps={{
                    readOnly: true,
                  }}
                  error={!!errors.html}
                  helperText={errors.html ? errors.html.message : ""}
                />
                <Button variant="outlined" onClick={handleDesignContent}>
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
  );
};

export { CreateForm, FormStateProvider };

// !working but data is erased on designing may be I require react-redux for state management
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   Accordion,
//   AccordionDetails,
//   AccordionSummary,
//   Button,
//   Divider,
//   Stack,
//   Typography,
// } from "@mui/material";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import FormProvider, { RHFTextField } from "../hook-form";
// import * as Yup from "yup";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { useHtmlContent } from "../../context/HTMLContentContext";

// const CreateForm = () => {
//   const navigate = useNavigate();
//   const { htmlContent } = useHtmlContent();

//   const FormSchema = Yup.object().shape({
//     campaignName: Yup.string().required("Campaign name is required"),
//     campaignDescription: Yup.string(),
//     from: Yup.string(),
//     to: Yup.string()
//       .required("To(recipient) is required!")
//       .test("valid-emails", "Invalid email format", (value) => {
//         if (!value) return true; // If no value, let the required validation handle it
//         const emails = value.split(",").map((email) => email.trim());
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         return emails.every((email) => emailRegex.test(email));
//       }),
//     subject: Yup.string().required("Subject is required!"),
//     html: Yup.string().required("Content is required"),
//   });

//   const defaultValues = {
//     campaignName: "",
//     campaignDescription: "",
//     from: "",
//     to: "",
//     subject: "",
//     html: "",
//   };

//   const methods = useForm({
//     resolver: yupResolver(FormSchema),
//     defaultValues,
//     mode: "onSubmit", // validate fields on submit event
//   });

//   const {
//     reset,
//     setError,
//     handleSubmit,
//     setValue,
//     clearErrors,
//     formState: { errors },
//   } = methods;

//   const onSubmit = async (data) => {
//     try {
//       // Submit data to database
//       console.log("Save template into database");
//     } catch (error) {
//       reset();
//       setError("afterSubmit", { ...error, message: error.message });
//     }
//   };

//   const handleInputChange = (name, value) => {
//     setValue(name, value); // Update the form value
//     clearErrors(name); // Clear errors for the input field
//   };

//   const handleDesignContent = () => {
//     navigate("/email/templates-editor");
//   };

//   return (
//     <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
//       <Stack gap={3}>
//         <Stack justifyContent={"center"} alignItems={"center"} gap={2}>
//           <RHFTextField
//             name="campaignName"
//             label="Campaign name"
//             onChange={(e) => handleInputChange("campaignName", e.target.value)}
//             error={!!errors.campaignName}
//             helperText={errors.campaignName ? errors.campaignName.message : ""}
//           />
//           <RHFTextField
//             name="campaignDescription"
//             label="Campaign Description(optional)"
//             onChange={(e) =>
//               handleInputChange("campaignDescription", e.target.value)
//             }
//             error={!!errors.campaignDescription}
//             helperText={
//               errors.campaignDescription
//                 ? errors.campaignDescription.message
//                 : ""
//             }
//           />
//         </Stack>
//         <Divider />
//         <Stack justifyContent={"center"} alignItems={"center"} gap={2}>
//           <RHFTextField
//             name="to"
//             label="To"
//             onChange={(e) => handleInputChange("to", e.target.value)}
//             error={!!errors.to}
//             helperText={errors.to ? errors.to.message : ""}
//           />
//           <Typography variant="caption">
//             {`*You can enter multiple emails separated by comma (,).`}
//             <br />
//             {`For example: `}
//             <i>{`example1@gmail.com, example2@yahoo.com`}</i>
//           </Typography>
//           <RHFTextField
//             name="subject"
//             label="Subject"
//             onChange={(e) => handleInputChange("subject", e.target.value)}
//             error={!!errors.subject}
//             helperText={errors.subject ? errors.subject.message : ""}
//           />
//           <Accordion defaultExpanded sx={{ width: "100%" }}>
//             <AccordionSummary
//               expandIcon={<ExpandMoreIcon />}
//               aria-controls="panel1-content"
//               id="panel1-header"
//             >
//               <Typography>Content</Typography>
//             </AccordionSummary>
//             <AccordionDetails>
//               <Stack gap={2} justifyContent={"center"}>
//                 <RHFTextField
//                   name="html"
//                   label="Content"
//                   placeholder="Design 👇"
//                   multiline
//                   rows={4}
//                   value={htmlContent}
//                   InputProps={{
//                     readOnly: true,
//                   }}
//                   error={!!errors.html}
//                   helperText={errors.html ? errors.html.message : ""}
//                 />
//                 <Button variant="outlined" onClick={handleDesignContent}>
//                   Design content
//                 </Button>
//               </Stack>
//             </AccordionDetails>
//           </Accordion>
//         </Stack>
//         <Button
//           variant="contained"
//           color="success"
//           sx={{
//             padding: "4px 20px",
//             borderRadius: "20px",
//           }}
//           onClick={handleSubmit(onSubmit)}
//         >
//           <Typography sx={{ textTransform: "capitalize" }}>Send</Typography>
//         </Button>
//       </Stack>
//     </FormProvider>
//   );
// };

// export { CreateForm };
