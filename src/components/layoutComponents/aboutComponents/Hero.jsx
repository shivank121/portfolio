import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';

const gradientTextStyle = {
  background: 'linear-gradient(in hsl, #ff00cc, #3333ff)', // You can tweak colors for exact match
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontWeight: 700,
};

const Hero = () => {
  return (
    <Stack direction={"row"}>
      <Stack gap={"3px"}>

        <Typography variant="h1" sx={{ fontWeight: 700, }}> Creative </Typography>
        <Typography variant="h1" sx={gradientTextStyle}> MERN Stack Developer  </Typography>
        <Typography variant="h1" sx={{ fontWeight: 700, }}> Professional </Typography>
        <Typography variant="body1" mt={"10px"}>
          Skilled in full-stack development, API integration, performance optimization, and modern
          UI with MUI and Redux Toolkit.
        </Typography>

        <Button>
          View my dashboard
        </Button>

      </Stack>
      <Box>
        hh
      </Box>
    </Stack>
  );
};

export default Hero;
