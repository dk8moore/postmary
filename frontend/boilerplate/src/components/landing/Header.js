
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';

function Header() {   
  return (
    <AppBar position="static" color="default">
      <Container>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            My SaaS
          </Typography>
          <Button color="inherit" href="#features">Features</Button>
          <Button color="inherit" href="#pricing">Pricing</Button>
          <Button color="inherit" href="#contact">Contact</Button>
          <Button color="primary" variant="contained">Login</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
