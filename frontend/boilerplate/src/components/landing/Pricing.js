import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import { CsToggleButton, CsToggleButtonGroup, PricingPlan } from '../customComponents';
import '../styles.css';

function Pricing() {
  const [plan, setPlan] = React.useState('/mo');

  const plans = [
    {
      title: 'Basic',
      subtitle: 'Ideal for individuals',
      price: 9,
      discount: 15,
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
      buttonLabel: 'Get Started',
      highlight: false,
    },
    {
      title: 'Standard',
      subtitle: 'Perfect for small teams',
      price: 89,
      discount: 20,
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
      buttonLabel: 'Get Started',
      highlight: true,
    },
    {
      title: 'Premium',
      subtitle: 'Best for large teams',
      price: 139,
      discount: 25,
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
      buttonLabel: 'Get Started',
      highlight: false,
    },
  ];

  const handlePlanChange = (event, newPlan) => {
    if (newPlan !== null) {
      setPlan(newPlan);
    }
  };

  return (
    <Box className="dotted-background">
      <Container className="container">
        <Typography variant="h4b" component="h1" gutterBottom className="pricing-title">
          Transparent Pricing for All
        </Typography>
        <Typography
          variant="subtitle1"
          gutterBottom
          className="pricing-subtitle"
          sx={{ color: 'text.secondary', mb: 3 }}
        >
          More than 100,000 entrepreneurs have created their companies quickly with Earney.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
          <CsToggleButtonGroup
            value={plan}
            exclusive
            onChange={handlePlanChange}
            aria-label="plan selection"
            sx={{ mx: 1 }}
          >
            <CsToggleButton value="/mo" aria-label="monthly" disableRipple>
              Monthly
            </CsToggleButton>
            <CsToggleButton value="/yr" aria-label="yearly" disableRipple>
              Yearly
            </CsToggleButton>
          </CsToggleButtonGroup>
        </Box>
        <Grid container spacing={3} justifyContent="center" alignItems="flex-end">
          {plans.map((planDetails, index) => (
            <Grid item key={index}>
              <PricingPlan {...planDetails} period={plan} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Pricing;
