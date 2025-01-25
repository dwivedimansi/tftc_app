import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography, Tabs, Tab, Box, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Performance from './Performance'; // Correct import path
import Holdings from './Holding'; // Import Holdings component
import Funds from './Funds';

function FA13Portfolio() {
  const [selectedTab, setSelectedTab] = useState(0);
  const theme = useTheme();

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      {/* Sidebar */}
      <Card
        sx={{
          width: '300px',
          display: 'flex',
          flexDirection: 'column',
          padding: 2,
          borderRight: 1,
          borderColor: theme.palette.divider,
        }}
      >
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Client Name
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Client Code
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ marginBottom: 3 }}>
            Networth
          </Typography>

          <Button variant="outlined" fullWidth sx={{ mb: 2, fontSize: '1.1rem' }}>
            Total Portfolio
          </Button>
          <Button variant="contained" color="warning" fullWidth sx={{ mb: 2, fontSize: '1.1rem' }}>
            FA 13 Portfolio
          </Button>
          <Button variant="outlined" fullWidth sx={{ fontSize: '1.1rem' }}>
            MO Portfolio
          </Button>
        </CardContent>
      </Card>

      {/* Main Content */}
      <Box sx={{ flex: 1, padding: 3 }}>
        {/* Tabs */}
        <Card sx={{ mb: 3 }}>
          <Tabs
            value={selectedTab}
            onChange={handleTabChange}
            indicatorColor="primary"
            textColor="primary"
            sx={{
              '& .MuiTab-root': { fontSize: '1.2rem', fontWeight: 'bold' },
            }}
          >
            <Tab label="Overview" />
            <Tab label="Performance" />
            <Tab label="Holdings" />
            <Tab label="Funds" />
          </Tabs>
        </Card>

        {/* Tab Content */}
        <Card sx={{ padding: 3 }}>
          {selectedTab === 0 && (
            <Grid container spacing={3}>
              {/* Left Column */}
              <Grid item xs={12} md={6}>
                <Card>
                  <CardContent>
                    <Typography variant="h4" gutterBottom>
                      FA13 Invested Amount
                    </Typography>
                    <Typography variant="h4" gutterBottom>
                      FA13 Portfolio Current Value
                    </Typography>
                    <Typography variant="h4">% Gain</Typography>
                  </CardContent>
                </Card>
              </Grid>

              {/* Right Column */}
              <Grid item xs={12} md={6}>
                <Card
                  sx={{
                    background: theme.palette.warning.light,
                    border: `2px dashed ${theme.palette.warning.main}`,
                  }}
                >
                  <CardContent>
                    <Typography variant="h4" gutterBottom>
                      AWS Database
                    </Typography>
                    <Typography variant="h4" gutterBottom>
                      AWS Database
                    </Typography>
                    <Typography variant="h4">Compute in the Fly</Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          )}

          {selectedTab === 1 && <Performance />} {/* Render Performance component here */}
          {selectedTab === 2 && <Holdings />} {/* Render Holdings component here */}
          {selectedTab === 3 && <Funds />}
        </Card>
      </Box>
    </Box>
  );
}

export default FA13Portfolio;
