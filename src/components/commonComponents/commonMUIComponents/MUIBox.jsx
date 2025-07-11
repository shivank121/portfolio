import React from 'react';
import PropTypes from 'prop-types';

// @mui components
import { styled } from '@mui/system';
import Box from '@mui/material/Box';

// Styled Box that uses palette and theme props
const StyledBox = styled(Box, {
  shouldForwardProp: prop => !['bgColor', 'color', 'borderRadius'].includes(prop),
})(({ theme, bgColor, color, borderRadius, padding }) => {
  const resolvedBg = bgColor && theme.palette[bgColor]?.main ? theme.palette[bgColor].main : bgColor;
  const resolvedColor = color && theme.palette[color]?.main ? theme.palette[color].main : color;
  const resolvedRadius = typeof borderRadius === 'number' ? theme.shape.borderRadius(borderRadius) : borderRadius;

  return {
    backgroundColor: resolvedBg || 'transparent',
    color: resolvedColor || 'inherit',
    borderRadius: theme.shape.borderRadius(resolvedRadius),
    padding: theme.spacing(padding),
  };
});

const MUIBox = ({
  sx = {},
  padding = 2,
  borderRadius = 3,
  color = 'inherit',
  bgColor = 'transparent',
  className = {},
  children = null,
  ...restProps
}) => {
  return (
    <StyledBox
      color={color}
      padding={padding}
      className={className}
      sx={sx}
      bgColor={bgColor}
      borderRadius={borderRadius}
      {...restProps}
    >
      {children}
    </StyledBox>
  );
};

// PropTypes validation
MUIBox.propTypes = {
  children: PropTypes.node.isRequired,
  sx: PropTypes.object,
  bgColor: PropTypes.string, // e.g. 'primary', '#fff'
  color: PropTypes.string, // e.g. 'textPrimary', 'secondary', '#000'
  borderRadius: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  className: PropTypes.string,
};

export default React.memo(MUIBox);
