import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// Placeholder for a loading modal or dialog.
const DialogSkeleton = ({ width = 400 }) => (
  <Box p={3} width={width}>
    <Skeleton variant="text" width="100%" height={30} />
    <Skeleton variant="rectangular" width="100%" height={100} sx={{ mt: 2, borderRadius: '8px' }} />

    <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
      <Skeleton variant="rectangular" width={100} height={36} sx={{ borderRadius: '8px' }} />
      <Skeleton variant="rectangular" width={100} height={36} sx={{ borderRadius: '8px' }} />
    </Stack>
  </Box>
);

export default DialogSkeleton;
