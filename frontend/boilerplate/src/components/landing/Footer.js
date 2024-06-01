
import React from 'react';
import { Container, Typography, Box, Link } from '@mui/material';

function Footer() {
  return (
    <Box sx={{ bgcolor: '#333', color: '#fff', py: 4 }}>
      <Container>
        <Typography variant="body1" align="center">
          <Link href="#features" color="inherit" underline="hover" sx={{ mx: 2 }}>
            Features
          </Link>
          <Link href="#pricing" color="inherit" underline="hover" sx={{ mx: 2 }}>
            Pricing
          </Link>
          <Link href="#contact" color="inherit" underline="hover" sx={{ mx: 2 }}>
            Contact
          </Link>
        </Typography>
        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
          &copy; 2023 My SaaS. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
