import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Box } from '@mui/material';

const rootElement = document.getElementById('root') as HTMLElement;
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Box>
      <h1>React</h1>
    </Box>
  </StrictMode>,
);
