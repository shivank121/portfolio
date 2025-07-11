import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';

const GridSkeleton = ({ items = 6, itemHeight = 200 }) => (
  <Grid container spacing={2}>
    {[...Array(items)].map((_, i) => (
      <Grid item xs={12} sm={6} md={4} key={i}>
        <Skeleton variant="rectangular" height={itemHeight} sx={{ borderRadius: '8px' }} />
      </Grid>
    ))}
  </Grid>
);

export default GridSkeleton;
