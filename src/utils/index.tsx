import { IImage, IImagesSetting, ISettingImgix } from '../interfaces/image.interface';

export const initialSettingImgix: ISettingImgix = {
  rot: 0,
  bri: 0,
  con: 0,
  exp: 0,
  gam: 0,
  high: 0,
  hue: 0,
  invert: false,
  sat: 0,
  shad: 0,
  sharp: 0,
  usm: 0,
  usmrad: 0,
  vib: 0,
};

export const generateImagesSetting = (images: IImage[]): IImagesSetting => {
  const imgSetting: IImagesSetting = {};
  images.forEach((img) => {
    imgSetting[img.name as keyof IImage] = { ...img, settings: Array(5).fill(initialSettingImgix) };
  });
  return imgSetting;
};
