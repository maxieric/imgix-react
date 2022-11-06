import React, { createContext, useEffect, useState } from 'react';
import getImages from '../api/images';
import { IActiveImgix, IImage, IImagesSetting, ISettingContext, ISettingImgix } from '../interfaces/image.interface';
import { generateImagesSetting, initialSettingImgix } from '../utils';

interface ISettingImgixProvider {
  children: React.ReactNode;
}

export const SettingContext = createContext<ISettingContext>({
  images: {},
  activeImgix: { url: '', name: '', settings: [], settingActive: -1 },
  changeImageImgix: () => {},
  changeSetting: () => {},
  saveSetting: () => {},
  resetSetting: () => {},
});

const SettingProvider: React.FC<ISettingImgixProvider> = ({ children }) => {
  const [images, setImages] = useState<IImagesSetting>({});
  const [activeImgix, setActiveImgix] = useState<IActiveImgix>({ url: '', name: '', settings: [], settingActive: -1 });

  const getList = async () => {
    const getImagesList = await getImages();
    const format = generateImagesSetting(getImagesList);
    setImages(format);
    const keys = Object.keys(format);
    setActiveImgix({ name: keys[0], url: format[keys[0]].url, settings: format[keys[0]].settings, settingActive: 0 });
  };

  useEffect(() => {
    getList();
  }, []);

  const changeImageImgix = (key: string, indexSetting: number) => {
    setActiveImgix({ ...images[key as keyof IImage], settingActive: indexSetting });
  };

  const changeSetting = (valueSetting: ISettingImgix, indexSetting: number) => {
    const settingsImgix = activeImgix.settings?.length ? [...activeImgix?.settings] : [];
    settingsImgix[indexSetting] = {
      ...settingsImgix[indexSetting],
      ...valueSetting,
    };
    setActiveImgix({ ...activeImgix, settings: settingsImgix });
  };

  const saveSetting = () => {
    const key = activeImgix.name as keyof IImage;
    const newSettings = {
      name: activeImgix.name,
      url: activeImgix.url,
      settings: activeImgix.settings,
    };
    setImages({ ...images, [key]: newSettings });
  };

  const resetSetting = () => {
    const key = activeImgix.name as keyof IImage;
    const indexActive = typeof activeImgix.settingActive === 'number' ? activeImgix.settingActive : 0;
    const settingKey = [...images[key]?.settings];
    settingKey[indexActive] = initialSettingImgix;
    const currentSettings = { ...images[key], settings: settingKey };
    setImages({ ...images, [key]: currentSettings });
    changeSetting(initialSettingImgix, indexActive);
  };

  return (
    <SettingContext.Provider
      value={{ images, activeImgix, changeImageImgix, changeSetting, saveSetting, resetSetting }}
    >
      {children}
    </SettingContext.Provider>
  );
};

export default SettingProvider;
