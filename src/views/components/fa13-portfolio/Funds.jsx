import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function Funds() {
  const theme = useTheme();

  // Sample data for FA13 Non-Usable and MO of Calc on the Fly (Replace with actual data)
  const fa13NonUsable = 100000; // Example value
  const moCalcOnTheFly = 250000; // Example value

  // Calculate the total
  const totalFunds = fa13NonUsable + moCalcOnTheFly;

  return (
    <Grid container spacing={3}>
      {/* FA13 Non-Usable Card */}
      <Grid item xs={12} md={6}>
        <Card sx={{ background: theme.palette.success.light }}>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              FA13 Non-Usable (AWS Databse)
            </Typography>
            <Typography variant="h5" color="text.secondary">
              {`$${fa13NonUsable.toLocaleString()}`}
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* MO of Calc on the Fly Card */}
      <Grid item xs={12} md={6}>
        <Card sx={{ background: theme.palette.warning.light }}>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              MO (Calc on the Fly)
            </Typography>
            <Typography variant="h5" color="text.secondary">
              {`$${moCalcOnTheFly.toLocaleString()}`}
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* Total Funds Card */}
      <Grid item xs={12}>
        <Card sx={{ background: theme.palette.info.light }}>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              Total Funds (MO API)
            </Typography>
            <Typography variant="h5" color="text.primarylight">
              {`$${totalFunds.toLocaleString()}`}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Funds;
