import React from 'react';
import PropTypes from 'prop-types';

// MUI Components
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';

// SidebarSkeleton component
const SidebarSkeleton = ({ items = 5 }) => (
  <Stack spacing={2}>
    {[...Array(items)].map((_, i) => (
      <Skeleton
        key={i}
        variant="text"
        width="80%"
        height={30}
        animation="wave"
        sx={{
          borderRadius: 2,
          backgroundColor: 'rgba(255, 0, 0, 0.2)', // Soft red for better visual
        }}
      />
    ))}
  </Stack>
);

// Prop types validation
SidebarSkeleton.propTypes = {
  items: PropTypes.number,
};

export default SidebarSkeleton;
