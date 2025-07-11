import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/system';
import IconButton from '@mui/material/IconButton';

// Styled IconButton
const StyledIconButton = styled(IconButton)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  color: theme.palette.text.primary,
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const MUIIconButton = ({
  children,
  onClick,
  color = 'default',
  size = 'medium',
  disabled = false,
  edge = false,
  sx = {},
  className = '',
  ...rest
}) => {
  return (
    <StyledIconButton
      onClick={onClick}
      color={color}
      size={size}
      disabled={disabled}
      edge={edge ? 'start' : false}
      sx={sx}
      className={className}
      {...rest}
    >
      {children}
    </StyledIconButton>
  );
};

MUIIconButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  color: PropTypes.oneOf([
    'inherit',
    'default',
    'primary',
    'secondary',
    'error',
    'info',
    'success',
    'warning',
  ]),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool,
  edge: PropTypes.bool, // true = "start", false = no edge
  sx: PropTypes.object,
  className: PropTypes.string,
};

export default React.memo(MUIIconButton);
