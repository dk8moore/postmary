import React from 'react';
import { Container, Typography, Box, Link } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box className="tw-bg-gray-800 tw-text-white tw-py-4">
      <Container>
        <Typography variant="body1" align="center">
          <Link href="#features" color="inherit" underline="hover" className="tw-mx-2">
            Features
          </Link>
          <Link href="#pricing" color="inherit" underline="hover" className="tw-mx-2">
            Pricing
          </Link>
          <Link href="#contact" color="inherit" underline="hover" className="tw-mx-2">
            Contact
          </Link>
        </Typography>
        <Typography variant="body2" align="center" className="tw-mt-2">
          &copy; 2023 My SaaS. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;