import React from 'react';
import Container from '@mui/material/Container';

const MUIContainer = ({ children, className = '', sx = {}, ...restProps }) => {
  return (
    <Container className={className} sx={{ ...sx }} {...restProps}>
      {children}
    </Container>
  );
};
export default MUIContainer;
