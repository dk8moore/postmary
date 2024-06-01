
import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';

function Features() {
  return (
    <Box sx={{ py: 8, bgcolor: '#f8f8f8' }}>
      <Container>
        <Typography variant="h4" component="h2" gutterBottom>
          Features
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Box textAlign="center">
              <img src="/path/to/icon1.png" alt="Feature 1" style={{ maxWidth: '100px' }} />
              <Typography variant="h6" component="h3">
                Feature 1
              </Typography>
              <Typography variant="body1">
                Description of feature 1.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box textAlign="center">
              <img src="/path/to/icon2.png" alt="Feature 2" style={{ maxWidth: '100px' }} />
              <Typography variant="h6" component="h3">
                Feature 2
              </Typography>
              <Typography variant="body1">
                Description of feature 2.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box textAlign="center">
              <img src="/path/to/icon3.png" alt="Feature 3" style={{ maxWidth: '100px' }} />
              <Typography variant="h6" component="h3">
                Feature 3
              </Typography>
              <Typography variant="body1">
                Description of feature 3.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Features;
