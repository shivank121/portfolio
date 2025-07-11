import React from 'react';
import PropTypes from 'prop-types';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const getRandomWidth = () => {
  const widths = [60, 70, 80, 90, 100];
  return `${widths[Math.floor(Math.random() * widths.length)]}%`;
};

const TextSkeleton = ({ lines = 3, gap = 1 }) => (
  <Stack spacing={gap}>
    {Array.from({ length: lines }).map((_, index) => (
      <Skeleton key={index} variant="text" width={getRandomWidth()} />
    ))}
  </Stack>
);

TextSkeleton.propTypes = {
  lines: PropTypes.number,
  gap: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default TextSkeleton;
