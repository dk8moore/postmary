import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';

function Header() {   
  return (
    <AppBar position="static" color="default" className="tw-bg-white tw-shadow-md">
      <Container>
        <Toolbar className="tw-flex tw-justify-between">
          <Typography variant="h6" className="tw-flex-grow">
            My SaaS
          </Typography>
          <div className="tw-flex tw-space-x-4">
            <Button color="inherit" href="#features">Features</Button>
            <Button color="inherit" href="#pricing">Pricing</Button>
            <Button color="inherit" href="#contact">Contact</Button>
            <Button color="primary" variant="contained" className="tw-bg-blue-500 tw-text-white">Login</Button>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
