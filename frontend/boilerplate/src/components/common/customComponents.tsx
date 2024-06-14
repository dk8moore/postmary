import React from 'react';
import { styled } from '@mui/system';
import { ToggleButton, ToggleButtonGroup } from '@mui/lab';
import { Card, CardContent, Typography, Button, Chip, Box } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

// Styled ToggleButtonGroup component
export const CsToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  backgroundColor: 'rgba(246, 248, 250, 1)',
  padding: 0,
  border: '2px solid rgba(237, 239, 243, 1)',
  borderRadius: 12,
  display: 'flex',
  justifyContent: 'center',
  '& .MuiToggleButtonGroup-grouped': {
    border: 'none',
    margin: theme.spacing(0.5),
    '&.Mui-selected': {
      borderRadius: 7,
    },
  },
}));

// Styled ToggleButton component
export const CsToggleButton = styled(ToggleButton)(({ theme }) => ({
  backgroundColor: 'rgba(248, 248, 248, 1)',
  color: theme.palette.text.secondary,
  padding: theme.spacing(0.5, 3.5),
  minHeight: 'auto',
  textTransform: 'none',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: 'rgba(248, 248, 248, 1)',
  },
  '&.Mui-selected': {
    backgroundColor: '#fff',
    color: theme.palette.primary.main,
    borderRadius: theme.shape.borderRadius,
    boxShadow: '0 0 6px rgba(0, 0, 0, 0.1)',
    '&:hover': {
      backgroundColor: '#fff',
    },
  },
}));

// Define the props for PricingPlan
interface PricingPlanProps {
  title: string;
  subtitle: string;
  price: number;
  discount: number;
  features: string[];
  buttonLabel: string;
  highlight: boolean;
  period: string;
}

// PricingPlan component
export const PricingPlan: React.FC<PricingPlanProps> = ({
  title,
  subtitle,
  price,
  discount,
  features,
  buttonLabel,
  highlight,
  period,
}) => {
  const tempDiscount = Math.floor(price * 12 - (discount * price * 12) / 100);
  const discountedPrice = period === '/yr' ? tempDiscount - (tempDiscount % 10) - 1 : price;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
      <Card
        sx={{
          minWidth: 300,
          maxWidth: 300,
          height: 'auto',
          minHeight: 400,
          boxShadow: '0 0 6px rgba(0, 0, 0, 0.05)',
          borderRadius: 4,
          borderColor: highlight ? 'primary.main' : 'rgba(237, 239, 243, 1)',
          borderWidth: 2,
          borderStyle: 'solid',
          padding: '18px 20px 8px 20px',
          position: 'relative',
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        {highlight && (
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '50px',
              backgroundColor: 'primary.main',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderTopLeftRadius: 4,
              borderTopRightRadius: 4,
            }}
          >
            <Typography variant="h6" component="div" sx={{ fontSize: '1.1em', fontWeight: 'bold' }}>
              Most Popular
            </Typography>
          </Box>
        )}
        <CardContent className="pricing-plan" sx={{ mt: highlight ? '50px' : '0', flexGrow: 1 }}>
          <Typography variant="h5" component="h3" className="pricing-plan-title" sx={{ fontWeight: 'bold' }}>
            {title}
          </Typography>
          <Typography variant="body1" className="pricing-plan-subtitle" sx={{ color: 'secondary.main' }}>
            {subtitle}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
            <Typography variant="h4" className="pricing-plan-price" sx={{ fontSize: '2.3em', fontWeight: 'bold' }}>
              <Typography variant="h3" component="span" sx={{ fontSize: '0.8em', mr: 0.5 }}>€</Typography>
              {discountedPrice}
              <Typography variant="body2" component="span" sx={{ fontSize: '0.5em', color: 'secondary.main' }}>
                {period}
              </Typography>
            </Typography>
            {period === '/yr' && discount && (
              <Chip label={`-${discount}% OFF`} sx={{ fontWeight: 'bold', backgroundColor: 'soft.main', ml: '10px', color: 'primary.main' }} size="small" />
            )}
          </Box>
          <Typography variant="body1" sx={{ mt: 2, color: 'secondary.main' }}>
            <ul style={{ padding: 0 }}>
              {features.map((feature, index) => (
                <li key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                  <FontAwesomeIcon icon={faCheckCircle} style={{ marginRight: '10px' }} />
                  {feature}
                </li>
              ))}
            </ul>
          </Typography>
        </CardContent>
        <Button
          variant="contained"
          sx={{
            backgroundColor: highlight ? 'primary.main' : 'secondary.main',
            margin: '0 auto',
            mb: 3.5,
            borderRadius: 20,
            width: '90%',
            height: '45px',
            textTransform: 'none',
            fontWeight: 'bold',
          }}
        >
          {buttonLabel}
        </Button>
      </Card>
    </Box>
  );
};
