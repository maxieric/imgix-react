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
    alignItems="center"
    sx={{ height: '3.5rem', backgroundColor: 'rgb(223, 235, 232)' }}
  >
    <Typography variant="h6">{titleHeader}</Typography>
  </Box>
);
export default Header;
