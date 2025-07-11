import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/flexStyles.css';

import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Box, Stack, Typography, Button } from '../commonComponents/commonMUIComponents';

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <Box className="flex-center" height="100vh">
      <Stack alignItems="center" justifyContent="center">
        <ErrorOutlineIcon color="error" sx={{ fontSize: 80 }} />
        <Typography variant="h4" color="error">
          Something went wrong.
        </Typography>
        <Typography variant="body2" color="textSecondary" maxWidth={400}>
          {error?.message || 'An unexpected error occurred. Please try refreshing the page.'}
        </Typography>
        <Button variant="contained" color="primary" onClick={resetErrorBoundary}>
          Refresh Page
        </Button>
      </Stack>
    </Box>
  );
};

ErrorFallback.propTypes = {
  error: PropTypes.object,
  resetErrorBoundary: PropTypes.func.isRequired,
};

export default ErrorFallback;
