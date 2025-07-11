import React from 'react';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';
import CardContent from '@mui/material/CardContent';

const CardSkeleton = () => (
  <Card>
    <Skeleton variant="rectangular" height={140} />
    <CardContent>
      <Stack spacing={1}>
        <Skeleton variant="text" width="80%" />
        <Skeleton variant="text" width="60%" />
        <Skeleton variant="text" width="90%" />
      </Stack>
    </CardContent>
  </Card>
);

export default CardSkeleton;
