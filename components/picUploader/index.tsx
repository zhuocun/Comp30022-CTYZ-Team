import React, { useState } from "react";
import { ImageUploader } from "antd-mobile";
import { PictureOutline } from "antd-mobile-icons";
import classes from "./index.module.css";
import { ImageUploadItem } from "antd-mobile/es/components/image-uploader";

const PicUploader: React.FC = () => {
    const [fileList, setFileList] = useState<ImageUploadItem[]>();

    async function upload(file: File) {
        return {
            url: URL.createObjectURL(file)
        };
    }

    return (
        <ImageUploader
            value={fileList}
            onChange={setFileList}
            maxCount={1}
            upload={upload}
            className={classes.upload}>

            <div
                style={{
                    width: 100,
                    height: 80,
                    borderRadius: 40,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"

                }}
            >
                <PictureOutline style={{ fontSize: 32 }} />
            </div>

        </ImageUploader>

    );
};

export default PicUploader;