// Performance.jsx
import React from 'react';
import { Line, Pie } from 'react-chartjs-2';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

// Register the necessary chart components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement);

const Performance = () => {
  // Sample data for the Line chart (Portfolio performance over time)
  const lineChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'], // X-axis labels
    datasets: [
      {
        label: 'Portfolio Performance',
        data: [10, 20, 15, 30, 50, 40], // Y-axis data (Portfolio)
        borderColor: '#FF5733',
        backgroundColor: 'rgba(255, 87, 51, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  // Sample data for the Line chart (Index performance comparison)
  const indexComparisonData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'], // X-axis labels
    datasets: [
      {
        label: 'Portfolio Performance',
        data: [10, 20, 15, 30, 50, 40], // Portfolio Y-axis data
        borderColor: '#FF5733',
        backgroundColor: 'rgba(255, 87, 51, 0.2)',
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Index Performance', // Comparison with the index
        data: [8, 18, 14, 28, 45, 38], // Index Y-axis data
        borderColor: '#33FF57', // Green for index
        backgroundColor: 'rgba(51, 255, 87, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  // Sample data for the Pie chart (Portfolio distribution)
  const pieChartData = {
    labels: ['Stocks', 'Bonds', 'Real Estate', 'Cash'],
    datasets: [
      {
        data: [45, 25, 15, 15], // Portfolio distribution percentages
        backgroundColor: ['#FF5733', '#33FF57', '#3357FF', '#FF33A1'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h4" gutterBottom>
          Portfolio Performance & Index Comparison
        </Typography>

        {/* Grid to display both the charts (Line and Pie) */}
        <Grid container spacing={3}>
          {/* Line Chart (Portfolio vs Index) */}
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Performance vs Index Comparison
                </Typography>
                <Line data={indexComparisonData} />
              </CardContent>
            </Card>
          </Grid>

          {/* Pie Chart (Portfolio Distribution) */}
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Portfolio Distribution
                </Typography>
                <Pie data={pieChartData} />
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Line Chart for Portfolio Performance */}
        <Grid container spacing={3} sx={{ marginTop: 3 }}>
          <Grid item xs={12}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Portfolio Performance Over Time
                </Typography>
                <Line data={lineChartData} />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Performance;
