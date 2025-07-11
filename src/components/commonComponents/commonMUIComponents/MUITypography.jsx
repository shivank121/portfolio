import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import { styled } from '@mui/system';

// Styled Typography component
const StyledTypography = styled(Typography, { shouldForwardProp: prop => prop !== 'color' })(({
  theme,
  color,
}) => {
  const resolvedColor = theme.palette[color]?.main || color || 'inherit';
  return { color: resolvedColor };
});

const MUITypography = ({ children, variant = 'body2', sx = {}, color = 'inherit' }) => {
  return (
    <StyledTypography variant={variant} sx={sx} color={color}>
      {children}
    </StyledTypography>
  );
};

// PropTypes validation
MUITypography.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
  sx: PropTypes.object,
  color: PropTypes.string,
};

export default React.memo(MUITypography);
