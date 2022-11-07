import React, { useContext, useState } from 'react';
import { Box, Switch as SwitchM } from '@mui/material';
import Typography from '@mui/material/Typography';

import { ISettingContext, SettingContext } from '../../context/setting-context';

interface ImageI {
  type: string;
  label: string;
  isChecked: boolean | undefined;
}

const Switch: React.FC<ImageI> = ({ isChecked = false, type = 'invert', label }) => {
  const { saveSetting } = useContext(SettingContext) as ISettingContext;
  const [checked, setChecked] = useState(isChecked);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    saveSetting({ [type]: event.target.checked });
  };

  return (
    <Box display="flex" alignItems="center">
      <Typography variant="body2">{label}:</Typography>
      <SwitchM checked={checked} onChange={handleChange} />
    </Box>
  );
};
export default Switch;
