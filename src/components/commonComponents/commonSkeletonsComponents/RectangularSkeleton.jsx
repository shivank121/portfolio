import React from 'react';
import Skeleton from '@mui/material/Skeleton';

const RectangularSkeleton = ({ width = '100%', height = 200, ...props }) => (
  <Skeleton variant="rectangular" width={width} height={height} {...props} />
);

export default RectangularSkeleton;
