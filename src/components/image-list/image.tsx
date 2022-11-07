import { Box, Typography } from '@mui/material';
import React from 'react';
import { IImage } from '../../interfaces/image.interface';
import './image.css';

const Image: React.FC<{ image: IImage; onChangeImage: () => void }> = ({ image, onChangeImage }) => (
  <Box display="flex" alignItems="center" className="images" onClick={onChangeImage}>
    <img src={`${image.url}?auto=compress&w=28&h=28&fit=crop`} alt={image.name} className="image" />
    <Typography variant="body2">{image.name}</Typography>
  </Box>
);

export default Image;
