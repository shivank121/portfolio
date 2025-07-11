import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';

// For task management UIs.
const KanbanColumnSkeleton = ({ cards = 4 }) => (
  <Paper sx={{ p: 2, width: 300 }}>
    <Skeleton variant="text" width="60%" height={30} />
    <Stack spacing={2} mt={2}>
      {[...Array(cards)].map((_, i) => (
        <Skeleton key={i} variant="rectangular" height={80} sx={{ borderRadius: '8px' }} />
      ))}
    </Stack>
  </Paper>
);

export default KanbanColumnSkeleton;
