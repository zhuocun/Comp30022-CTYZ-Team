import React, { useState } from 'react';
import { ImageUploader } from 'antd-mobile';
import { PictureOutline } from 'antd-mobile-icons'
import classes from './uploadPhoto.module.css';



function UploadPhoto() {
  const [fileList, setFileList] = useState();

  return (
    <ImageUploader 
    value={fileList} 
    onChange={setFileList} 
    maxCount={1}
    className={classes.upload}>

    <div
        style={{
          width: 100,
          height: 80,
          borderRadius: 40,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',

        }}
      >
        <PictureOutline style={{ fontSize: 32 }} />
      </div>

    </ImageUploader>

    );
}

export default UploadPhoto;