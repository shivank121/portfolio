import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

// Skeleton that mimics tab headers loading.
const TabsSkeleton = ({ count = 10 }) => (
  <Stack direction="row" spacing={2}>
    {[...Array(count)].map((_, i) => (
      <Skeleton key={i} variant="rectangular" width={70} height={20} />
    ))}
  </Stack>
);

export default TabsSkeleton;
