import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';

const Header: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const menuItems = (
    <>
      <Button color="inherit" href="#features">Features</Button>
      <Button color="inherit" href="#pricing">Pricing</Button>
      <Button color="inherit" href="#contact">Contact</Button>
      <Button color="primary" variant="contained">Login</Button>
    </>
  );

  return (
    <>
      <AppBar position="fixed" color="default">
        <Container>
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              My SaaS
            </Typography>
            {isSmallScreen ? (
              <>
                <IconButton edge="end" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                  <MenuIcon />
                </IconButton>
                <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                  <List>
                    <ListItem button component="a" href="#features">
                      <ListItemText primary="Features" />
                    </ListItem>
                    <ListItem button component="a" href="#pricing">
                      <ListItemText primary="Pricing" />
                    </ListItem>
                    <ListItem button component="a" href="#contact">
                      <ListItemText primary="Contact" />
                    </ListItem>
                    <ListItem button component="a" href="#login">
                      <ListItemText primary="Login" />
                    </ListItem>
                  </List>
                </Drawer>
              </>
            ) : (
              menuItems
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar /> {/* This is to account for the fixed AppBar */}
    </>
  );
}

export default Header;
