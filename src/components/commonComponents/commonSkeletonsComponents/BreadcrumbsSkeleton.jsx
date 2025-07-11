import React from 'react';
import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';

const BreadcrumbsSkeleton = ({ items = 5 }) => (
  <Stack direction="row" spacing={1} alignItems="center">
    {[...Array(items)].map((_, i) => (
      <Stack direction="row" alignItems="center" spacing={1} key={i}>
        <Skeleton variant="text" width={80} height={25} animation="wave" sx={{ borderRadius: 1 }} />
        {i < items - 1 && (
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            /
          </Typography>
        )}
      </Stack>
    ))}
  </Stack>
);

BreadcrumbsSkeleton.propTypes = {
  items: PropTypes.number,
};

export default BreadcrumbsSkeleton;
