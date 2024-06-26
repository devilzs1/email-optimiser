import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Card, CardContent, Typography, Select, MenuItem } from "@mui/material";

const initialData = {
  labels: Array.from({ length: 31 }, (_, i) => `July ${i + 1}`),
  datasets: [
    {
      label: "Open Rate",
      data: Array.from({ length: 31 }, () => Math.floor(Math.random() * 3000)),
      fill: false,
      backgroundColor: "purple",
      borderColor: "purple",
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
  responsive: true,
  maintainAspectRatio: false,
};

const Dashboard = () => {
  const [data, setData] = useState(initialData);

  const handleChange = (event) => {
    const newData = {
      ...data,
      datasets: [
        {
          ...data.datasets[0],
          label: event.target.value,
          data: Array.from({ length: 31 }, () =>
            Math.floor(Math.random() * 3000)
          ),
        },
      ],
    };
    setData(newData);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          Performance over time
        </Typography>
        <Typography variant="body2">Open rate: 43% (⬇️32%)</Typography>
        <Typography variant="body2">Emails sent: 1,568</Typography>
        <Typography variant="body2">Email count: 49</Typography>
        <Select value={data.datasets[0].label} onChange={handleChange}>
          <MenuItem value="Open Rate">Open Rate</MenuItem>
          <MenuItem value="Click Rate">Click Rate</MenuItem>
          <MenuItem value="Unsubscribe Rate">Unsubscribe Rate</MenuItem>
        </Select>
        <div style={{ height: "400px" }}>
          <Line data={data} options={options} />
        </div>
      </CardContent>
    </Card>
  );
};

export default Dashboard;
