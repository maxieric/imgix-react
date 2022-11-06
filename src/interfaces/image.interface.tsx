export interface ISettingImgix {
  rot?: number;
  bri?: number;
  con?: number;
  exp?: number;
  gam?: number;
  high?: number;
  hue?: number;
  invert?: boolean;
  sat?: number;
  shad?: number;
  sharp?: number;
  usm?: number;
  usmrad?: number;
  vib?: number;
}

export interface IImage {
  url: string;
  name: string;
}

export interface IImageSetting extends IImage {
  settings: ISettingImgix[];
}

export interface IImagesSetting {
  [key: string]: IImageSetting;
}

export interface IActiveImgix extends IImageSetting, IImage {
  settings: ISettingImgix[] | [];
  url: string;
  name: string;
  settingActive: number;
}

export interface ISettingContext {
  images: IImagesSetting;
  activeImgix: IActiveImgix;
  changeSetting: (valueSetting: ISettingImgix, indexSetting: number) => void;
  saveSetting: () => void;
  resetSetting: () => void;
  changeImageImgix: (key: string, indexSetting: number) => void;
}
