
import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';

function Hero() {
  return (
    <Box sx={{ bgcolor: '#007BFF', color: '#fff', py: 8, textAlign: 'center' }}>
      <Container>
        <Typography variant="h2" component="h1" gutterBottom>
          Your SaaS Headline
        </Typography>
        <Typography variant="h5" component="p" gutterBottom>
          Your subheadline explaining the SaaS
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Get Started
        </Button>
      </Container>
    </Box>
  );
}

export default Hero;
