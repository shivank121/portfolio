import React from 'react';
import PropTypes from 'prop-types';

// MUI Components
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';

import '../../../styles/flexStyles.css'; // Ensure this contains .flex-between

const NavbarSkeleton = ({ tabs = 8 }) => (
  <Box className="flex-between">
    {/* Logo or brand */}
    <Box>
      <Skeleton variant="circular" width={40} height={40} />
    </Box>

    {/* Tab navigation items */}
    <Stack direction="row" spacing={2}>
      {[...Array(tabs)].map((_, index) => (
        <Skeleton key={index} variant="text" width={80} height={30} sx={{ borderRadius: 1 }} />
      ))}
    </Stack>
  </Box>
);

NavbarSkeleton.propTypes = {
  tabs: PropTypes.number,
};

export default NavbarSkeleton;
