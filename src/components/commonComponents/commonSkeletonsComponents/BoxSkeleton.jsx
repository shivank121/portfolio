import React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

const BoxSkeleton = ({
  variant = 'text',
  width = '100%',
  height = 40,
  animation = 'wave',
  count = 1,
  sx = {},
  skeletonSx = {},
}) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, ...sx }}>
      {Array.from({ length: count }).map((_, index) => (
        <Skeleton
          key={index}
          variant={variant}
          animation={animation}
          width={width}
          height={height}
          sx={{ borderRadius: '5px', ...skeletonSx }}
        />
      ))}
    </Box>
  );
};

export default React.memo(BoxSkeleton);
