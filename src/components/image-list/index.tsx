import React, { useContext } from 'react';
import { SettingContext } from '../../context/setting-context';
import { IImage, ISettingContext } from '../../interfaces/image.interface';
import Image from './image';
import './image.css';

const ImageList: React.FC<{}> = () => {
  const { images, changeImageImgix } = useContext(SettingContext) as ISettingContext;

  const handleChangeImg = (key: string) => {
    changeImageImgix(key, 0);
  };

  return (
    <ul>
      {Object.keys(images)?.map((key) => (
        <Image
          image={images[key as keyof IImage]}
          onChangeImage={() => handleChangeImg(key)}
          key={images[key as keyof IImage].name}
        />
      ))}
    </ul>
  );
};
export default ImageList;
