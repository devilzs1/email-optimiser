import { Button, Stack, Typography, useMediaQuery } from '@mui/material'
import { Link } from 'react-router-dom';

const Templates = () => {
    const isMediumScreen = useMediaQuery("(max-width:728px)");

  return (
    <Stack
      sx={{ backgroundColor: "#f5f8fa", height: "100vh", width: "100%" }}
      p={4}
      gap={3}
    >
      <Stack
        direction={isMediumScreen ? "column" : "row"}
        s
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography variant="h2">Templates</Typography>
        <Button
          variant="contained"
          sx={{
            padding: "4px 20px",
            borderRadius: "20px",
            height: "2.5rem",
            width: isMediumScreen ? "100%" : "auto",
          }}
          component={Link}
          to={`/email/templates`}
        >
          <Typography sx={{ textTransform: "capitalize" }}>
            Create template
          </Typography>
        </Button>
      </Stack>
    </Stack>
  );
}

export default Templates