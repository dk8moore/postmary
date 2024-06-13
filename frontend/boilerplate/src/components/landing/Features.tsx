import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';

const Features: React.FC = () => {
  return (
    <Box className="tw-py-8 tw-bg-gray-100">
      <Container>
        <Typography variant="h4" component="h2" gutterBottom>
          Features
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Box textAlign="center">
              <img src="/path/to/icon1.png" alt="Feature 1" className="tw-max-w-full tw-h-auto tw-mx-auto" />
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
              <img src="/path/to/icon2.png" alt="Feature 2" className="tw-max-w-full tw-h-auto tw-mx-auto" />
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
              <img src="/path/to/icon3.png" alt="Feature 3" className="tw-max-w-full tw-h-auto tw-mx-auto" />
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