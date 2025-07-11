import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';

// Mimics toast/notification center items.
const NotificationSkeleton = ({ count = 3 }) => (
  <Stack spacing={2}>
    {[...Array(count)].map((_, i) => (
      <Box key={i} display="flex" alignItems="center" gap={2}>
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="text" width="80%" />
      </Box>
    ))}
  </Stack>
);

export default NotificationSkeleton;
