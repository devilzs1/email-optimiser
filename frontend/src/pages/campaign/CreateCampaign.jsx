import { AppBar, Box, Button, Divider, Stack, Toolbar, Typography, useMediaQuery } from '@mui/material'
import { Link } from 'react-router-dom';
import { CreateForm } from '../../components/Campaign/CreateForm';

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
          <Button
            variant="contained"
            color="success"
            sx={{
              padding: "4px 20px",
              borderRadius: "20px",
            }}
            component={Link}
            to={`/email/templates`}
          >
            <Typography sx={{ textTransform: "capitalize" }}>
              Send & Exit
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>
      <Box mt={isMediumScreen ? 15 : 10} />
      <Stack
        direction={isMediumScreen ? "column" : "row"}
        // justifyContent={"space-between"}
        // alignItems={"center"}
        gap={4}
        px={4}
      >
        {/* Form */}
        <CreateForm />
        <Divider />
        <Stack>hehehe</Stack>
      </Stack>
    </Stack>
  );
}

export default CreateCampaign