import { Box } from '@mui/material';
import React from 'react';
import Header from './header';

interface LayoutI {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutI> = ({ children }) => (
  <>
    <Header titleHeader="example title" />
    <Box className="flex">
      <Box className="flex content">{children}</Box>
    </Box>
  </>
);
export default Layout;
