import {
  Accordion,
    AccordionDetails,
    AccordionSummary,
    Button,
    Divider,
  Stack,
  Typography,
} from "@mui/material";
// import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormProvider, { RHFTextField } from "../hook-form";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";


const CreateForm = () => {
  const FormSchema = Yup.object().shape({
    campaignName: Yup.string().required("Campaign name is required"),
    from: Yup.string().required("From(sender) is required!"),
    to: Yup.string().required("To(receipient) is required!"),
    subject: Yup.string().required("Subject is required!"),
  });
  const defaultValues = { name: "" };
  const methods = useForm({
    resolver: yupResolver(FormSchema),
    defaultValues,
  });
  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = async (data) => {
    try {
      //submit data to database
      console.log("Save template into database");
    } catch (error) {
      reset();
      setError("afterSubmit", { ...error, message: error.message });
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack gap={3}>
        <Stack
          sx={{ height: "100%" }}
          justifyContent={"center"}
          alignItems={"center"}
          gap={2}
        >
          <RHFTextField name="name" label="Campaign name" />

          <RHFTextField
            name="description"
            label="Campaign Description(optional)"
          />
        </Stack>
        <Divider />
        <Stack
          sx={{ height: "100%" }}
          justifyContent={"center"}
          alignItems={"center"}
          gap={2}
        >
          {/* <RHFTextField name="from" label="From" /> */}
          <RHFTextField name="to" label="To" />
          <Typography variant="caption">
            {`*You can enter multiple emails separated by comma (,).`}
            <br />
            {`For ex: `}
            <i>{`example1@gmail.com, example2@yahoo.com`}</i>
          </Typography>
          <RHFTextField name="subject" label="Subject" />
          <Accordion defaultExpanded sx={{ width: "320px" }}>
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
                  name="content"
                  label="Content"
                  placeholder="Enter plain text or design 👇"
                  sx={{ width: "280px" }}
                  multiline
                  rows={4}
                />
                <Button variant="outlined">Design content</Button>
              </Stack>
            </AccordionDetails>
          </Accordion>
        </Stack>
      </Stack>
    </FormProvider>
  );
};

export { CreateForm };
