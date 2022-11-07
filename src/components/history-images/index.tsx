import { Box, TextareaAutosize, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { SettingContext } from '../../context/setting-context';
import { ISettingContext } from '../../interfaces/image.interface';
import { getsettingFormatImgix } from '../../utils';
interface HistoryImages {
  widthImg: number;
  heightImg: number;
}
const HistoryImages: React.FC<HistoryImages> = ({ widthImg, heightImg }) => {
  const {
    images,
    activeImgix: { name, settingActive },
    changeImageImgix,
  } = useContext(SettingContext) as ISettingContext;

  const getUrl = images[name]?.url
    ? `${images[name].url}?auto=compress&w=${widthImg}&h=${heightImg}&fit=crop&${getsettingFormatImgix(
        images[name].settings[settingActive],
      )}`
    : '';

  const handleChangeImg = (index: number) => {
    changeImageImgix(name, index);
  };
  return (
    <Box display="flex" flexDirection="column">
      <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" alignContent="center">
        {images[name]?.settings?.map((setting, index) => (
          <Box
            onClick={() => handleChangeImg(index)}
            key={`${name}-${index}`}
            sx={{
              flex: '0 1 calc(20% - 8px)',
              cursor: 'pointer',
            }}
          >
            <img
              style={{
                width: '100%',
                height: heightImg ? `${heightImg / 4}px` : '',
                transition: settingActive === index ? 'all 0.3s cubic-bezier(.25,.8,.25,1)' : '',
                boxShadow: settingActive === index ? '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)' : '',
                border: settingActive === index ? '1px solid rgb(0 0 0 / 50%)' : '',
              }}
              src={`${images[name].url}?auto=compress&w=50&h=50&fit=crop&${getsettingFormatImgix(setting)}`}
              alt={name}
            />
          </Box>
        ))}
      </Box>
      <Box my={1}>
        <TextareaAutosize
          aria-label="minimum height"
          minRows={3}
          placeholder="Minimum 3 rows"
          defaultValue={getUrl}
          style={{ width: '100%' }}
          readOnly={true}
        />
      </Box>
    </Box>
  );
};
export default HistoryImages;
