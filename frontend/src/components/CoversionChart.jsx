import React from "react";
import { Bar } from "react-chartjs-2";
import { Box, Card, CardContent, Stack, Typography, useMediaQuery } from "@mui/material";

const data = {
  labels: ["Delivered", "Opened", "Clicked"],
  // labels: ["Delivered", "Opened", "Clicked", "Orders"],
  datasets: [
    {
      label: "Email",
      // data: [109, 82, 34, 16],
      data: [109, 82, 34],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        // "rgba(255, 205, 86, 0.2)",
      ],
      borderColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(75, 192, 192)",
        // "rgb(255, 205, 86)",
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
//   responsive: true,
  maintainAspectRatio: false,
};


const ConversionChart = () => {
  const isMediumScreen = useMediaQuery("(max-width: 768px)");

return (
  <Card>
    <CardContent>
      <Typography variant="h5" component="div">
        Track conversions
      </Typography>
    </CardContent>
    {/* <Box mt={2}> */}
    <Stack gap={2} p={1}>
      <Stack px={2}>
        <Typography>Delivered : {data.datasets[0].data[0]}</Typography>
        <Typography>Opened : {data.datasets[0].data[1]}</Typography>
        <Typography>Clicked : {data.datasets[0].data[2]}</Typography>
        {/* <Typography>Delivered : {data.datasets[0].data[0]}</Typography> */}
      </Stack>
      <Stack px={1}>
        <Bar data={data} options={options} />
      </Stack>
    </Stack>
    {/* </Box> */}
  </Card>
);
}
  
  

export default ConversionChart;
