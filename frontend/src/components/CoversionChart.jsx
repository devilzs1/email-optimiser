import React from "react";
import { Bar } from "react-chartjs-2";
import { Box, Card, CardContent, Typography } from "@mui/material";

const data = {
  labels: ["Delivered", "Opened", "Clicked", "Orders"],
  datasets: [
    {
      label: "Email",
      data: [109, 82, 34, 16],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 205, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
      ],
      borderColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
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
//   maintainAspectRatio: false,
};

const ConversionChart = () => (
  <Card>
    <CardContent>
      <Typography variant="h5" component="div">
        Track conversions
      </Typography>
      <Typography variant="body2">Revenue per recipient: --</Typography>
      <Typography variant="body2">
        Average order revenue: $324 (⬇️18%)
      </Typography>
    </CardContent>
    {/* <Box mt={2}> */}
      <Bar data={data} options={options} />
    {/* </Box> */}
  </Card>
);

export default ConversionChart;
