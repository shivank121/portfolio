import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/system';
import Stack from '@mui/material/Stack';

// Styled Stack component
const StyledStack = styled(Stack)(({ theme, bgColor, borderRadius }) => ({
  backgroundColor: bgColor || 'transparent',
  borderRadius: theme.shape.borderRadius(borderRadius),
  padding: theme.spacing(2), // Optional: default padding
}));

const MUIStack = ({
  sx = {},
  bgColor = 'transparent',
  borderRadius = 2,
  direction = 'column',
  spacing = 2,
  alignItems = 'stretch',
  justifyContent = 'flex-start',
  children = null,
  className = '',
  ...restProps
}) => {
  return (
    <StyledStack
      sx={sx}
      bgColor={bgColor}
      borderRadius={borderRadius}
      direction={direction}
      spacing={spacing}
      alignItems={alignItems}
      justifyContent={justifyContent}
      className={className}
      {...restProps}
    >
      {children}
    </StyledStack>
  );
};

// PropTypes validation
MUIStack.propTypes = {
  children: PropTypes.node.isRequired,
  sx: PropTypes.object,
  bgColor: PropTypes.string,
  borderRadius: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  direction: PropTypes.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),
  spacing: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default React.memo(MUIStack);
