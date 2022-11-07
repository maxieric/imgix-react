import { Box, Button, Typography } from '@mui/material';
import React, { useContext, useLayoutEffect, useRef, useState } from 'react';
import { SettingContext } from '../../context/setting-context';
import { ISettingContext } from '../../interfaces/image.interface';
import { getsettingFormatImgix } from '../../utils';
import HistoryImages from '../history-images';
import './dashboard.css';

const Dashboard: React.FC<{}> = () => {
  const { activeImgix, resetSetting } = useContext(SettingContext) as ISettingContext;
  const ref = useRef<HTMLElement>(null);
  const [widthImg, setWidthImg] = useState(0);
  const [heightImg, setHeightImg] = useState(0);

  useLayoutEffect(() => {
    // TODO I need check this error tsx
    setWidthImg(ref?.current?.offsetWidth - 16);
    setHeightImg(ref?.current?.offsetHeight - 259);
    console.log('ref.current.offsetHeight::, ', ref?.current?.offsetHeight);
    console.log('ref.current.offsetWidth, ', ref?.current?.offsetWidth);
  }, []);

  console.log('renderrr image');
  const settingImgixString = activeImgix?.settings
    ? getsettingFormatImgix(activeImgix?.settings[activeImgix?.settingActive])
    : '';

  return (
    <Box className="dashboard" ref={ref}>
      <Box className="flex dashboard__header" my={1}>
        <Typography variant="body1">{activeImgix.name}</Typography>
        <Button variant="contained" onClick={resetSetting} className="dashboard__header--reset">
          <Typography variant="body2">Reset</Typography>
        </Button>
      </Box>
      <Box className="dashboard__image">
        <img
          src={`${activeImgix.url}?auto=compress&w=${widthImg}&h=${heightImg}&fit=crop&${settingImgixString}`}
          alt={activeImgix.name}
        />
      </Box>
      <HistoryImages widthImg={widthImg} heightImg={heightImg} />
    </Box>
  );
};
export default Dashboard;
