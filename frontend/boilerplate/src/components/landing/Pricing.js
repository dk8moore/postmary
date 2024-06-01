import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, Button } from '@mui/material';

function Pricing() {
  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <Typography variant="h4" component="h2" gutterBottom>
          Pricing
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="h3">
                  Basic
                </Typography>
                <Typography variant="h4">
                  $10/month
                </Typography>
                <Typography variant="body1">
                  Feature A, Feature B, Feature C
                </Typography>
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                  Get Started
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="h3">
                  Pro
                </Typography>
                <Typography variant="h4">
                  $30/month
                </Typography>
                <Typography variant="body1">
                  Feature A, Feature B, Feature C, Feature D
                </Typography>
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                  Get Started
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="h3">
                  Enterprise
                </Typography>
                <Typography variant="h4">
                  $100/month
                </Typography>
                <Typography variant="body1">
                  Feature A, Feature B, Feature C, Feature D, Feature E
                </Typography>
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                  Get Started
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Pricing;
