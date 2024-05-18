import { Box, Button, Stack, Typography, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import LineChart from "../../components/LineChart";
import ConversionChart from "../../components/CoversionChart";
import PerformanceOverTime from "../../components/PerformanceOverTime";

const Analytics = () => {
  const isMediumScreen = useMediaQuery("(max-width:728px)");
  return (
    <Stack
      sx={{ backgroundColor: "#f5f8fa", height: "100%", width: "100%" }}
      p={4}
      gap={3}
    >
      <Stack
        direction={isMediumScreen ? "column" : "row"}
        s
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography variant="h2">Analytics</Typography>
        <Button
          variant="contained"
          sx={{
            padding: "4px 20px",
            borderRadius: "20px",
            height: "2.5rem",
            width: isMediumScreen ? "100%" : "auto",
          }}
          component={Link}
          //   to={``}
        >
          <Typography sx={{ textTransform: "capitalize" }}>
            Perform Experiments
          </Typography>
        </Button>
      </Stack>
      <Box m={isMediumScreen ? 1 : 4}>
        <ConversionChart />
      </Box>

      <Box m={isMediumScreen ? 1 : 4}>
        <PerformanceOverTime />
      </Box>
      <Box mt={2} />
    </Stack>
  );
};

export default Analytics;
