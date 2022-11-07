import React, { useEffect, useState } from 'react';
import { Box, Slider as SliderM } from '@mui/material';
import Typography from '@mui/material/Typography';

interface ImageI {
  type: string;
  label: string;
  min: number;
  max: number;
  value: number | undefined;
  track?: false | 'normal' | 'inverted' | undefined;
  onChangeValue: (value: { [key: string]: number | string | boolean }) => void;
}

const valuetext = (value: number): string => `${value}`;

const Slider: React.FC<ImageI> = ({ value = 0, type, label, min, max, track = false, onChangeValue }) => {
  const [valueShow, setValueShow] = useState(value);

  const handleChangeCommitted = (event: React.SyntheticEvent | Event, newValue: number | number[]) => {
    if (typeof newValue === 'number') {
      onChangeValue({ [type]: newValue });
    }
  };

  const handleChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === 'number') {
      setValueShow(newValue);
    }
  };

  useEffect(() => {
    if (value !== valueShow) {
      setValueShow(value);
    }
  }, [value]);

  return (
    <Box>
      <Typography variant="body2">
        {label}: {valueShow}
      </Typography>
      <SliderM
        id={type}
        value={valueShow}
        defaultValue={value}
        aria-label="Temperature"
        getAriaValueText={valuetext}
        onChange={handleChange}
        onChangeCommitted={handleChangeCommitted}
        valueLabelDisplay="auto"
        marks
        min={min}
        max={max}
        track={track}
      />
    </Box>
  );
};
export default Slider;
