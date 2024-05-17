
import  { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const LineChart = () => {
  const chartRef = useRef(null);
  const [selectedMetric, setSelectedMetric] = useState("openRate");

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    const chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
        datasets: [
          {
            label: "Open Rate",
            data: [25, 40, 50, 45],
            borderColor: "rgba(255, 99, 132, 1)",
            backgroundColor: "rgba(255, 99, 132, 0.2)",
          },
          {
            label: "Click Rate",
            data: [15, 28, 35, 30],
            borderColor: "rgba(54, 162, 235, 1)",
            backgroundColor: "rgba(54, 162, 235, 0.2)",
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        // responsive: true,
        // maintainAspectRatio: false,
      },
    });

    return () => {
      chart.destroy();
    };
  }, [selectedMetric]);

  const handleChange = (event) => {
    setSelectedMetric(event.target.value);
  };

  return (
    <div>
      <FormControl>
        <InputLabel id="metric-select-label">Select Metric</InputLabel>
        <Select
          labelId="metric-select-label"
          id="metric-select"
          value={selectedMetric}
          onChange={handleChange}
        >
          <MenuItem value="openRate">Open Rate</MenuItem>
          <MenuItem value="clickRate">Click Rate</MenuItem>
        </Select>
      </FormControl>
      <canvas ref={chartRef} width="600" height="400"></canvas>
    </div>
  );
};

export default LineChart;
