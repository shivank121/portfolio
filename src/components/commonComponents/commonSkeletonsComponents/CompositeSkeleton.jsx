import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

const CompositeSkeleton = () => (
  <Box p={2}>
    <Skeleton variant="text" width="40%" />
    <Skeleton variant="rectangular" height={200} sx={{ my: 2, borderRadius: '8px' }} />
    <Stack direction="row" spacing={2}>
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="text" width="60%" />
    </Stack>
    <Skeleton variant="rectangular" height={40} width={120} sx={{ mt: 2 }} />
  </Box>
);

export default CompositeSkeleton;
