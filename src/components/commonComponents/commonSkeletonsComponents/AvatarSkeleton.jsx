import React from 'react';
import Skeleton from '@mui/material/Skeleton';

const AvatarSkeleton = ({ width = 40, height = 40 }) => {
  return <Skeleton variant="circular" width={width} height={height} sx={{ borderRadius: '50%' }} />;
};

export default AvatarSkeleton;
