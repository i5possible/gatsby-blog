import React from 'react';
import { Box } from '@chakra-ui/react';

const Section = ({ children }) => {
  return (
    <Box
      maxWidth="1440px"
      padding="40px 80px"
      marginX="auto" // Centers the section
      width="100%"  // Ensures it takes up full width of the container
    >
      {children}
    </Box>
  );
};

export default Section;
