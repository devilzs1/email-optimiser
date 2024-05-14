import { Button, Stack, Typography, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";

const AllCampaigns = () => {
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
        <Typography variant="h2">Campaigns</Typography>
        <Button
          variant="contained"
          sx={{
            padding: "4px 20px",
            borderRadius: "20px",
            height: "2.5rem",
            width: isMediumScreen ? "100%" : "auto",
          }}
          component={Link}
          to={`/campaigns/create-campaign`}
        >
          <Typography sx={{ textTransform: "capitalize" }}>
            Create Campaign
          </Typography>
        </Button>
      </Stack>
    </Stack>
  );
};

export default AllCampaigns;
