import { AppBar, Box, Button, Stack, Toolbar, Typography, useMediaQuery } from '@mui/material'
import { Link } from 'react-router-dom';
import {
  CreateForm,
  FormStateProvider,
} from "../../components/Campaign/CreateForm";

const CreateCampaign = () => {
    const isMediumScreen = useMediaQuery("(max-width:728px)");

  return (
    <Stack
      px={6}
      py={4}
      gap={3}
      sx={{ backgroundColor: "#f5f8fa", height: "100%", minHeight: "90vh" }}
    >
      <AppBar position="fixed">
        <Toolbar
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            padding: ".5rem",
          }}
        >
          <Typography variant="h2">Create campaign</Typography>
          <Stack direction={isMediumScreen ? "column" : "row"} gap={2}>
            <Button
              variant="outlined"
              color="error"
              sx={{
                padding: "4px 20px",
                borderRadius: "20px",
              }}
              component={Link}
              to={`/email/templates`}
            >
              <Typography sx={{ textTransform: "capitalize", color: "#fff" }}>
                Cancel
              </Typography>
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
      <Box mt={isMediumScreen ? 15 : 10} />
      <Stack
        direction={isMediumScreen ? "column" : "row"}
        margin={"auto"}
        gap={4}
        p={4}
        sx={{ backgroundColor: "#fff" }}
      >
        <FormStateProvider>
          <CreateForm />
        </FormStateProvider>
      </Stack>
    </Stack>
  );
}

export default CreateCampaign