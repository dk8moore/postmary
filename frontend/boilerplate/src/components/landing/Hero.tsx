import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';

const Hero: React.FC = () => {
  return (
    <Box className="tw-bg-blue-500 tw-text-white tw-py-8 tw-text-center">
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
