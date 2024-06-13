import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';

const CTA: React.FC = () => {
  return (
    <Box className="tw-bg-blue-500 tw-text-white tw-py-8 tw-text-center">
      <Container>
        <Typography variant="h4" component="h2" gutterBottom>
          Ready to Get Started?
        </Typography>
        <Button variant="contained" color="secondary" size="large">
          Sign Up Now
        </Button>
      </Container>
    </Box>
  );
}

export default CTA;