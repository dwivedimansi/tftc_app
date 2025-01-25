// Holdings.jsx
import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { Pie } from 'react-chartjs-2'; // Import Pie chart from react-chartjs-2
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the necessary chart components
ChartJS.register(ArcElement, Tooltip, Legend);

const Holdings = () => {
  // Data for the AWS Database Holding pie chart
  const holdingAWSDatabaseData = {
    labels: ['Stocks', 'Bonds', 'Real Estate', 'Cash'], // Example data categories
    datasets: [
      {
        data: [40, 30, 20, 10], // Percentages for each category
        backgroundColor: ['#FF5733', '#33FF57', '#3357FF', '#FF33A1'],
        borderWidth: 1,
      },
    ],
  };

  // Data for the Sector Allocation pie chart
  const sectorAllocationData = {
    labels: ['Technology', 'Healthcare', 'Energy', 'Finance', 'Consumer Goods'], // Example sector categories
    datasets: [
      {
        data: [50, 20, 10, 10, 10], // Sector allocation percentages
        backgroundColor: ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#FF9633'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Grid container spacing={3}>
      {/* Left Column: AWS Database Holding pie chart */}
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Holding AWS Database
            </Typography>
            <Pie data={holdingAWSDatabaseData} />
          </CardContent>
        </Card>
      </Grid>

      {/* Right Column: Sector Allocation AWS Database pie chart */}
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Sector Allocation AWS Database
            </Typography>
            <Pie data={sectorAllocationData} />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Holdings;
