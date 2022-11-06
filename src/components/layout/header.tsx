import { Box, Typography } from '@mui/material';
import React from 'react';

interface HeaderI {
  titleHeader?: React.ReactNode;
}

const Header: React.FC<HeaderI> = ({ titleHeader = '' }) => (
  <Box
    display="flex"
    alignContent="center"
    justifyContent="center"
    sx={{ height: '3.5rem', backgroundColor: '#b0f2c2' }}
  >
    <Typography variant="h3">{titleHeader}</Typography>
  </Box>
);
export default Header;
