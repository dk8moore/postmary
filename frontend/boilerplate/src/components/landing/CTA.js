
import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';

function CTA() {
  return (
    <Box sx={{ bgcolor: '#007BFF', color: '#fff', py: 8, textAlign: 'center' }}>
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
