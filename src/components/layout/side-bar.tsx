import { Box } from '@mui/material';
import React from 'react';
import ImageList from '../image-list';
import './side-bar.css';

const SideBar: React.FC<{}> = () => (
  <Box className="side-bar">
    <ImageList />
  </Box>
);

export default SideBar;
