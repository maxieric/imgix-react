import { Box } from '@mui/material';
import React from 'react';
import SideBar from './side-bar';

interface LayoutI {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutI> = ({ children }) => (
  <Box display="flex">
    <SideBar />
    <Box display="flex" className="content">
      {children}
    </Box>
  </Box>
);
export default Layout;
