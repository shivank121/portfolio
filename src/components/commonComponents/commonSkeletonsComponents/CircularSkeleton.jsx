import React from 'react';
import Skeleton from '@mui/material/Skeleton';

const CircularSkeleton = ({ size = 40, ...props }) => (
  <Skeleton variant="circular" width={size} height={size} {...props} />
);

export default CircularSkeleton;
