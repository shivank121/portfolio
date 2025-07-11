import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

// Useful for activity timelines or history logs.
const TimelineSkeleton = ({ items = 4 }) => (
  <Stack spacing={2.5}>
    {[...Array(items)].map((_, i) => (
      <Stack key={i} spacing={1}>
        <Skeleton variant="text" width="30%" />
        <Skeleton variant="text" width="80%" />
      </Stack>
    ))}
  </Stack>
);

export default TimelineSkeleton;
