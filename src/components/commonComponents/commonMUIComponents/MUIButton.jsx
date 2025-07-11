import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';

// Styled Button
const StyledButton = styled(Button)(({ theme }) => ({
  fontWeight: 500,
  color: theme.palette.mode === 'dark' ? 'black' : 'white',
  backgroundColor: theme.palette.mode === 'dark' ? 'white' : 'black',
}));

const MUIButton = ({
  children,
  variant = 'contained',
  color = 'primary',
  size = 'medium',
  onClick,
  disabled = false,
  startIcon,
  endIcon,
  sx = {},
  className = '',
  ...rest
}) => {
  return (
    <StyledButton
      variant={variant}
      color={color}
      size={size}
      onClick={onClick}
      disabled={disabled}
      startIcon={startIcon}
      endIcon={endIcon}
      sx={sx}
      className={className}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

MUIButton.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.oneOf(['text', 'outlined', 'contained']),
  sx: PropTypes.object,
  endIcon: PropTypes.node,
  color: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  startIcon: PropTypes.node,
  className: PropTypes.string,
};

export default React.memo(MUIButton);
