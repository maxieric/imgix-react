import React, { useContext } from 'react';
import { Box, Button, Typography } from '@mui/material';
import './setting-image.css';
import { SettingContext } from '../../context/setting-context';
import Slider from '../slider';
import Switch from '../switch';
import { ISettingContext } from '../../interfaces/image.interface';
import { initialSettingImgix } from '../../utils';

const SettingImage: React.FC<{}> = () => {
  const {
    activeImgix: { settings, settingActive },
    changeSetting,
    saveSetting,
  } = useContext(SettingContext) as ISettingContext;

  const indexActive = settingActive ? settingActive : 0;
  const settingsImgix = settings?.length ? settings : [];

  const handleChangeSetting = (value: { [key: string]: number | string | boolean }) => {
    changeSetting(value, indexActive);
  };

  const handleSave = () => {
    saveSetting();
  };

  return (
    <Box className="setting-image">
      <Box display="flex" justifyContent="center" my={1}>
        <Button variant="contained" onClick={handleSave} sx={{ height: '2rem' }}>
          <Typography variant="body2">Guardar</Typography>
        </Button>
      </Box>
      <Slider
        value={settings[indexActive]?.rot || initialSettingImgix.rot}
        onChangeValue={handleChangeSetting}
        type="rot"
        label="Rotation"
        min={0}
        max={360}
      />
      <Slider
        value={settings[indexActive]?.bri || initialSettingImgix.bri}
        onChangeValue={handleChangeSetting}
        type="bri"
        label="Brightness"
        min={-100}
        max={100}
        track={false}
      />
      <Slider
        value={settingsImgix[indexActive]?.con}
        onChangeValue={handleChangeSetting}
        type="con"
        label="Contrast"
        min={-100}
        max={100}
        track={false}
      />
      <Slider
        value={settingsImgix[indexActive]?.exp}
        onChangeValue={handleChangeSetting}
        type="exp"
        label="Exposure"
        min={-100}
        max={100}
        track={false}
      />
      <Slider
        value={settingsImgix[indexActive]?.gam}
        onChangeValue={handleChangeSetting}
        type="gam"
        label="Gamma"
        min={-100}
        max={100}
      />
      <Slider
        value={settingsImgix[indexActive]?.high}
        onChangeValue={handleChangeSetting}
        type="high"
        label="Highlight"
        min={-100}
        max={0}
        track="inverted"
      />
      <Slider
        value={settingsImgix[indexActive]?.hue || initialSettingImgix.hue}
        onChangeValue={handleChangeSetting}
        type="hue"
        label="Hue Shift"
        min={0}
        max={360}
      />
      <Switch label="Invert" isChecked={settingsImgix[indexActive]?.invert} type="invert" />
      <Slider
        value={settingsImgix[indexActive]?.sat}
        onChangeValue={handleChangeSetting}
        type="sat"
        label="Saturation"
        min={-100}
        max={100}
        track={false}
      />
      <Slider
        value={settingsImgix[indexActive]?.shad}
        onChangeValue={handleChangeSetting}
        type="shad"
        label="Shadow"
        min={0}
        max={100}
      />
      <Slider
        value={settingsImgix[indexActive]?.sharp}
        onChangeValue={handleChangeSetting}
        type="sharp"
        label="Sharpen"
        min={0}
        max={100}
      />
      <Slider
        value={settingsImgix[indexActive]?.usm}
        onChangeValue={handleChangeSetting}
        type="usm"
        label="Unsharp Mask"
        min={-100}
        max={100}
        track={false}
      />
      <Slider
        value={settingsImgix[indexActive]?.usmrad}
        onChangeValue={handleChangeSetting}
        type="usmrad"
        label="Unsharp Mask Radius"
        min={0}
        max={500}
      />
      <Slider
        value={settingsImgix[indexActive]?.vib}
        onChangeValue={handleChangeSetting}
        type="vib"
        label="Vibrance"
        min={-100}
        max={100}
        track={false}
      />
    </Box>
  );
};
export default SettingImage;
