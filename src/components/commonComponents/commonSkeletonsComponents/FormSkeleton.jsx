import React from 'react';
import PropTypes from 'prop-types';

// MUI Components
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';

const FormSkeleton = ({ fields = 5 }) => (
  <Stack spacing={2}>
    {[...Array(fields)].map((_, i) => (
      <React.Fragment key={i}>
        <Skeleton variant="text" width="30%" />
        <Skeleton variant="rectangular" height={40} sx={{ borderRadius: '8px' }} />
      </React.Fragment>
    ))}
    {/* Submit button */}
    <Skeleton variant="rectangular" width={120} height={36} sx={{ borderRadius: '8px' }} />
  </Stack>
);

FormSkeleton.propTypes = {
  fields: PropTypes.number,
};

export default FormSkeleton;
