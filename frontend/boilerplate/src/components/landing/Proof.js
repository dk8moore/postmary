import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent } from '@mui/material';

function SocialProof() {
  return (
    <Box className="tw-py-8 tw-bg-white">
      <Container>
        <Typography variant="h4" component="h2" gutterBottom>
          What Our Customers Say
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardContent>
                <Typography variant="body1">
                  "This is the best SaaS ever!"
                </Typography>
                <Typography variant="subtitle2" align="right">
                  - Happy Customer
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardContent>
                <Typography variant="body1">
                  "Incredible service and support."
                </Typography>
                <Typography variant="subtitle2" align="right">
                  - Satisfied User
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardContent>
                <Typography variant="body1">
                  "I can't imagine my business without it."
                </Typography>
                <Typography variant="subtitle2" align="right">
                  - Loyal Client
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default SocialProof;
