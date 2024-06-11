import React from 'react';
import { Container, Typography, Box } from '@mui/material';

function Template() {
  return (
    <Box className="tw-py-8 tw-bg-gray-100">
      <Container>
        <Typography variant="h4" component="h2" gutterBottom>
          Custom Section
        </Typography>
        <Typography variant="body1">
          This section can be customized to fit your specific needs. You can add any content here, such as additional features, use cases, blog posts, or other information.
        </Typography>
      </Container>
    </Box>
  );
}

export default Template;
