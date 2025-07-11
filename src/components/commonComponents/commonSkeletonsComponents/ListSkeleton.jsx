import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

const ListSkeleton = ({ items = 5 }) => (
  <Box>
    {Array.from({ length: items }).map((_, idx) => (
      <Skeleton key={idx} variant="text" height={30} sx={{ mb: 0.5 }} />
    ))}
  </Box>
);

export default ListSkeleton;
