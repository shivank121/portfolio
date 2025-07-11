import React from 'react';
import Skeleton from '@mui/material/Skeleton';

const ImageSkeleton = () => (
  <Skeleton variant="rectangular" width="100%" height={200} sx={{ borderRadius: '8px' }} />
);

export default ImageSkeleton;
